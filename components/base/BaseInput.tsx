import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from "@nextui-org/input"
import { IBaseInputProps } from '@/types/index'

const BaseInput: React.FC<IBaseInputProps> = ({ className, name, validate, label, placeholder, type='text', disabled = false}) => {
  const { register, formState: { errors } } = useFormContext()
  return (
    <div className='flex flex-col text-left'>
      <label>{label}</label>
      <Input
        isInvalid={errors[name] ? true : false}
        errorMessage={errors[name] && (errors[name] as any).message}
        className={className}        
        variant='bordered'
        size='lg'
        radius='none'
        isDisabled={disabled}
        placeholder={placeholder}
        {...register(name, validate)}
        name={name}
        type={type}
      />
    </div>
  )
}

export default BaseInput