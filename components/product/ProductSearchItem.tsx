'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import apiRepo from '@/app/apiRepo';
import { IProductItem } from '@/types/index'
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";

const ProductSearchItem = () => {
  const router = useRouter()
  const [productItem, setProductItem] = useState<IProductItem[]>([])

  const handleSearchProductByName = (name: string) => {
    if (name) {
      fetchProductByName(name)
    }
  }

  const handleSelectedItem = (id: React.Key | null) => {
    if (id) {
      router.push(`/detail/${id}`)
    }
  }

  const fetchProductByName = async (name: string) => {
    try {
      const response = await apiRepo.getProductByName(name)
      setProductItem(response.data)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="flex items-center gap-4 text-[14px] w-[25%] hidden md:flex inline">
      <p>Search</p>
      <Autocomplete  
        radius='none'
        variant='bordered'
        placeholder='Search by name'
        items={productItem}
        isClearable
        onInputChange={handleSearchProductByName}
        onSelectionChange={handleSelectedItem}
      >
        {(item) => 
          <AutocompleteItem 
            key={item._id}
            startContent={<img alt={`content-${item.name}`} className="w-6 h-6" src={item.imageUrl} />}
          >
            {item.name}
          </AutocompleteItem>}
      </Autocomplete>
    </div>
  )
}

export default ProductSearchItem