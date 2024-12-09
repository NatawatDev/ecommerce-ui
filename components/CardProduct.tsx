import React from 'react'
import {Card, CardFooter, CardBody} from "@nextui-org/card"
import formatPrice from '@/utils/formatPrice'

const CardProduct:React.FC<any> = ({productItem}) => {
  return (
    <Card className="border-none" radius="none">
      <CardBody className='p-0'>
        <img src={productItem.imageUrl} alt="" />
      </CardBody>
      <CardFooter className="flex flex-col justify-start">
        <div className='p-6'>
          <p>{productItem.name}</p>
          <p className="text-default-500">฿ {formatPrice(productItem.price)}</p>
        </div>        
      </CardFooter>
    </Card>
  )
}

export default CardProduct