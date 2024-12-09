import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from "@nextui-org/input"
import { IBaseInputProps } from '@/types/index'
 


const BaseInput: React.FC<IBaseInputProps> = ({ className, name, validate, label, labelPlacement, placeholder, type='text', disabled = false}) => {
  const { register, formState: { errors } } = useFormContext()
  return (
    <div className='flex flex-col'>
      <Input
        classNames={{
          inputWrapper: [
            `${errors[name] ? 'border-red-500 focus:border-red-500' : ''}`,
            'focus:border-red-500',
          ],
        }}
        className={className}        
        variant='bordered'
        size='lg'
        radius='none'
        isDisabled={disabled}
        label={label}
        labelPlacement={labelPlacement}
        placeholder={placeholder}
        {...register(name, validate)}
        name={name}
        type={type}
      />
      {errors[name] && <p className="text-sm text-red-500 text-left">{(errors[name] as any).message}</p>}
    </div>
  )
}

export default BaseInput