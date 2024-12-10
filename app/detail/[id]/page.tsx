'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import useFetch from '@/utils/useFetch'
import formatPrice from '@/utils/formatPrice'
import BaseButton from '@/components/base/BaseButton'
import { Pencil } from 'lucide-react';
import { IProductDetail } from '@/types/index'
import Loading from '@/components/Loading'

const ProductDetail = () => {
  const router = useRouter()
  const { id } = useParams()
  const { data, loading, error } = useFetch<IProductDetail>(`/products/${id}`)
  const [product, setProduct] = useState<IProductDetail>()

  useEffect(() => {
    if (data) {
      setProduct(data)
    }    
  },[data])

  const handleEdit = (id: string) => {
    router.push(`/item-form/${id}`);
  };

  if (loading) return <Loading></Loading>
  
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {product && (
        <div className='w-full flex flex-col md:flex-row md:justify-center md:pt-[64px] gap-5 mb-[150px]'>
          <img className='md:w-full md:h-full' src={product.imageUrl} alt="Product Image" />
          <div className='md:flex md:flex-col md:gap-6'>
            <p className='text-[20px] font-medium'>{product.name}</p>
            <p className='text-[28px] md:text-[32px] font-medium'>฿ {formatPrice(product.price)}</p>
            <p className='text-[14px]'>{product.description}</p>
            <BaseButton action={() => handleEdit(product._id)} icon={<Pencil/>} title='Edit' color='warning' variant='ghost' className='w-[10%]'/>
          </div>          
        </div>        
      )}      
    </div>
  )
}

export default ProductDetail
