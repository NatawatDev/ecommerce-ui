'use client'

import {Select, SelectItem} from "@nextui-org/select"
import { useState, useEffect } from 'react'
import CardProduct from './CardProduct'
import useFetch from '@/utils/useFetch'
import { Input } from "@nextui-org/input"
import { IProductItem } from '@/types/index'

const ProductContent = () => {
  const options = [
    { key: '1', label: 'Price : High - Low' },
    { key: '2', label: 'Price : Low - High' }
  ]
  const [optionValue, setOptionValue] = useState('1')
  const [productList, setProductList] = useState<IProductItem[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const { data, loading, error } = useFetch<IProductItem[]>('/products')

  const sortProducts = (products: IProductItem[], value: string) => {
    if (value === '1') {
      return [...products].sort((a, b) => b.price - a.price); // High to Low
    } else if (value === '2') {
      return [...products].sort((a, b) => a.price - b.price); // Low to High
    }
    return products;
  };

  useEffect(() => {
    if (data) {
      const sortedData = sortProducts(data, optionValue);
      setProductList(sortedData)
    }
  },[data, optionValue])

  if (loading) return <div>Loading...</div>
  
  if (error) return <div>Error: {error}</div>
  
  const handleSelectionChange = (keys: Set<string>):void => {
    const selectedValue = Array.from(keys)[0]
    setOptionValue(selectedValue)
  };

  return (
    <div>
      <div className='w-full my-4'>
        <p className='text-center text-[20px] font-medium' >NEW ARRIVALS</p>
        <div className='flex justify-center w-full md:justify-between items-center py-4 gap-4 text-[14px]'>
          <div className="flex items-center gap-4 text-[14px] w-[25%] hidden md:flex inline">
            <p>Search</p>
            <Input variant='bordered' radius="none" placeholder="Search by name" onValueChange={(e) => setSearchQuery(e)}/>
          </div>
          <div className="flex items-center gap-4 text-[14px] w-[25%]">
            <p className="whitespace-nowrap">Sort By</p>
            <Select
              className=''
              radius='none'
              variant='bordered'
              selectedKeys={new Set([optionValue])}
              onSelectionChange={(keys) => handleSelectionChange(keys as Set<string>)}
            >
              {options.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}      
            </Select>
          </div>
          
        </div>
      </div>        
      <div className='w-full'>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        {filteredProducts.map((item) => (
          <div key={item._id}>
            <CardProduct productItem={item}/>
          </div>            
        ))}   
        </div>               
      </div>
    </div>
  )
}

export default ProductContent