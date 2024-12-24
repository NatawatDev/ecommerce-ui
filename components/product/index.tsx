'use client'

import { useState, useEffect, useMemo } from 'react'
import { Select, SelectItem } from "@nextui-org/select"
import { Pagination } from '@nextui-org/pagination'

import apiRepo from '@/app/apiRepo'
import { showErrorAlert } from '@/utils/systemAlert'

import ProductCard from "./ProductCard"
import ProductSearchItem from './ProductSearchItem'
import Loading from '../Loading'

import { IProductItem } from '@/types/index'

const ProductContent = () => {
  const options = [
    { key: '1', label: 'Price : High - Low' },
    { key: '2', label: 'Price : Low - High' }
  ]
  const [optionValue, setOptionValue] = useState('1')
  const [productList, setProductList] = useState<IProductItem[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  const limit = 8

  useEffect(() => {
    fecthProduct(limit, 0)
  }, [])

  const sortedProducts = useMemo(() => {
    const productsToSort = [...productList];
    if (optionValue === '1') {
      return productList.sort((a, b) => b.price - a.price);
    } else if (optionValue === '2') {
      return productList.sort((a, b) => a.price - b.price);
    }
    return productsToSort;
  }, [productList, optionValue]);

  const handleSelectionChange = (keys: Set<React.Key>): void => {
    const selectedValue = Array.from(keys).join(", ")
    setOptionValue(selectedValue);
  };

  const handlePageChange = (page: number): void => {    
    const pageOffset = page * limit
    fecthProduct(limit, pageOffset)
  }

  const fecthProduct = async (pageLimit: number, pageOffset: number) => {
    try {
      const response = await apiRepo.getProductList(pageLimit, pageOffset)

      if (response.status === 200) {
        setIsLoading(false)
        setProductList(response.data) 
      } else {
        setIsLoading(false)
        showErrorAlert(response.data.message || 'Cannot Fectch Products.')
      }
      
    } catch (error: unknown) {
      setIsLoading(false)
      if (error instanceof Error) {
        showErrorAlert(error.message || 'An error occurred while fetching product data.');
      } else {
        showErrorAlert('An unknown error occurred.');
      }      
    }    
  }

  if (isLoading) return <Loading/>
  

  return (
    <div>
      <div className='w-full my-4'>
        <p className='text-center text-[20px] font-medium' >NEW ARRIVALS</p>
        <div className='flex justify-center w-full md:justify-between items-center py-4 gap-4 text-[14px]'>
          <ProductSearchItem/>          
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
        {sortedProducts.map((item) => (
          <div key={item._id}>
            <ProductCard productItem={item}/>            
          </div>            
        ))}                 
        </div>
        <div className='flex justify-center my-[40px]'>
          <Pagination onChange={handlePageChange} showControls initialPage={1} total={2} />
        </div>               
      </div>
    </div>
  )
}

export default ProductContent