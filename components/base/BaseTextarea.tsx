import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Textarea } from "@nextui-org/input"
import { IBaseInputProps } from '@/types/index'

const BaseTextarea: React.FC<IBaseInputProps> = ({ className, name, validate, label, labelPlacement, placeholder, disabled = false}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className='flex flex-col text-left'>      
      <Textarea
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
      />
      {errors[name] && <p className="text-sm text-red-500">{(errors[name] as any).message}</p>}
    </div>
  )
}

export default BaseTextarea