import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Textarea } from "@nextui-org/input"
import { IBaseInputProps } from '@/types/index'

const BaseTextarea: React.FC<IBaseInputProps> = ({ className, name, validate, label, placeholder, disabled = false}) => {
  
  const { register, formState: { errors } } = useFormContext()

  return (
    <div className='flex flex-col text-left'>
      <label>{label}</label>      
      <Textarea
        className={className}
        isInvalid={errors[name] ? true : false}
        errorMessage={errors[name] && (errors[name] as any).message}
        variant='bordered'
        size='lg'
        radius='none'
        isDisabled={disabled}
        placeholder={placeholder}
        {...register(name, validate)}
        name={name}
      />      
    </div>
  )
}

export default BaseTextarea