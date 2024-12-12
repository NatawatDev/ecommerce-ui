import React from 'react'
import {Card, CardFooter, CardBody} from "@nextui-org/card"
import formatPrice from '@/utils/formatPrice'
import { useRouter } from 'next/navigation'

const ProductCard:React.FC<any> = ({ productItem }) => {
  const router = useRouter()
  const hanldeClickDetail = (id: string) => {
    router.push(`/detail/${id}`)
  }
  return (
    <Card className="border-none h-full cursor-pointer hover:bg-gray-200" radius="none">
      <button  onClick={() => hanldeClickDetail(productItem._id)}>
        <CardBody className='p-0 flex-1'>
          <img src={productItem.imageUrl} alt={`Product of ${productItem.name}`} className="w-full h-full object-cover" />
        </CardBody>
        <CardFooter className="flex flex-col">
          <div className='w-full p-6'>
            <p className='line-clamp-2 text-ellipsis overflow-hidden text-left'>{productItem.name}</p>
            <p className="text-default-500 text-left">฿ {formatPrice(productItem.price)}</p>
          </div>        
        </CardFooter>
      </button>
    </Card>
  )
}

export default ProductCard