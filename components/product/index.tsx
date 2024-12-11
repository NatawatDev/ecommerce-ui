'use client'

import { useState } from 'react'
import ProductCard from "./ProductCard"
import { Select, SelectItem } from "@nextui-org/select"
import { Input } from "@nextui-org/input"
import { IProductProps } from '@/types/index'

const ProductContent = ({ productList }: IProductProps) => {
  const options = [
    { key: '1', label: 'Price : High - Low' },
    { key: '2', label: 'Price : Low - High' }
  ]
  const [optionValue, setOptionValue] = useState('1')
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
            <ProductCard productItem={item}/>
          </div>            
        ))}   
        </div>               
      </div>
    </div>
  )
}

export default ProductContent