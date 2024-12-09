'use client'

import React from 'react'
import CardProduct from './CardProduct'

const ProductContent = () => {
  const productItem = {
    name: `Men's Plain Derby Semi Casual Shoes`,
    price: 6800,
    imageUrl: 'https://res.cloudinary.com/dmd2b4hlk/image/upload/v1733755249/products/aibexjsonbdrh7ponzma.png'
  }
  return (
    <div>
      <div>
        <p className='text-center' >NEW ARRIVALS</p>
        <div className='flex justify-center gap-4'>
          <p>Sort By</p>
          <div>mock select</div>
        </div>
        <div>
          <CardProduct productItem={productItem}/>
        </div>
      </div>
    </div>
  )
}

export default ProductContent