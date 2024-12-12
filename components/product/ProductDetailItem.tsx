'use client'

import { useRouter } from 'next/navigation'
import formatPrice from '@/utils/formatPrice'
import BaseButton from '@/components/base/BaseButton'
import { Pencil } from 'lucide-react';
import { IProductDetailItemProps } from '@/types/index'

const ProductDetailItem:React.FC<IProductDetailItemProps> = ({ productDetail }) => {
  const router = useRouter()

  const handleEdit = (id: string) => {
    router.push(`/item-form/${id}`);
  }

  return (
    <div>
      {productDetail && (
        <div className='w-full flex flex-col md:flex-row md:justify-center md:pt-[64px] gap-5 mb-[150px]'>
          <img className='md:h-auto md:max-w-[400px] w-full object-cover' src={productDetail.imageUrl} alt="Product Goods" />
          <div className='md:flex md:flex-col md:gap-6'>
            <p className='text-[20px] font-medium'>{productDetail.name}</p>
            <p className='text-[28px] md:text-[32px] font-medium'>฿ {formatPrice(productDetail.price)}</p>
            <p className='text-[14px]'>{productDetail.description}</p>
            <BaseButton action={() => handleEdit(productDetail._id)} icon={<Pencil/>} title='Edit' color='warning' variant='ghost' className='w-[10%]'/>
          </div>          
        </div>        
      )}      
    </div>
  )
}

export default ProductDetailItem
