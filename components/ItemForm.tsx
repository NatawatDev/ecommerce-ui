'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Upload } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { useForm, FormProvider } from "react-hook-form"
import BaseInput from './base/BaseInput'
import BaseTextarea from './base/BaseTextarea'
import BaseButton from './base/BaseButton'
import { showSuccessAlert,showErrorAlert } from '../utils/systemAlert'
import { IForm } from '@/types/index'

const ItemForm = () => {
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string>('')
  const [productData, setProductData] = useState<any | null>(null)

  const formMethods = useForm<IForm>()
  const router = useRouter()
  const { id } = useParams()
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (id) {
      fetchProductById(id as string)
    }
  }, [id])

  const fetchProductById = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DEV_URL}/products/${id}`)
      if (response.ok) {
        const data = await response.json()
        setProductData(data)
        formMethods.reset(data)
      } else {
        showErrorAlert('Product not found')
      }
    } catch (error: any) {
      console.error('Error:', error)
      showErrorAlert(error.message || 'An error occurred while fetching product data.')
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name)
    }
  }

  const handleFileClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (data: any) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('quantity', data.quantity)
    formData.append('price', data.price)

    if (!id && !fileInputRef.current?.files?.[0]) {
      showErrorAlert('Please attach a file before saving.')
      return
    }

    const file = fileInputRef.current?.files?.[0]
    if (file) {
      formData.append('file', file)
    }
    if (id) {
      updateProduct(id as string, formData)
    } else {
      createProduct(formData)
    }

  }

  const createProduct = async (formData: FormData) => {
    try {
      setIsSaving(true)

      const response = await fetch(`${process.env.NEXT_PUBLIC_DEV_URL}/products`, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        setIsSaving(false)
        showSuccessAlert('Created product successfully!')
        router.push('/')
      } else {
        const errorData = await response.json()
        setIsSaving(false)
        showErrorAlert(errorData.message || 'An error occurred while creating the product.')
      }
    } catch (error: any) {
      setIsSaving(false)
      console.error('Error:', error)
      showErrorAlert(error.message || 'An unknown error occurred.')
    }
  }

  const updateProduct = async (id: string, formData: FormData) => {
    try {
      setIsSaving(true)

      const response = await fetch(`${process.env.NEXT_PUBLIC_DEV_URL}/products/${id}`, {
        method: 'PUT',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        setIsSaving(false)
        showSuccessAlert('Updated product successfully!')
        router.push('/')
      } else {
        const errorData = await response.json()
        setIsSaving(false)
        showErrorAlert(errorData.message || 'An error occurred while updating the product.')
      }
    } catch (error: any) {
      setIsSaving(false)
      console.error('Error:', error)
      showErrorAlert(error.message || 'An unknown error occurred.')
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
        <div className='text-center'>
          <p className='text-[20px] font-medium'>Add/Edit Item</p>
          <div className='flex flex-col gap-4'>
            <div className='flex pt-6'>           
              <div>
                <p className='text-left pb-2'>Image</p>
                <div className='flex items-center gap-2'>
                  <BaseButton action={handleFileClick} icon={<Upload/>} title='Upload' color='warning' variant='ghost' disabled={isSaving}/>
                  {fileName && <span>{fileName}</span>}
                  {!fileName && id && productData && <img src={productData.imageUrl} alt="Product Image" className="w-20 h-20" />}
                </div>
                
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  style={{ display: 'none' }}
                />            
              </div>          
            </div>
            <BaseInput placeholder='Name' name='name' label='Name' labelPlacement='outside' validate={{ required: 'This field is required' }} disabled={isSaving}/>
            <BaseTextarea placeholder="Enter your description" name='description' label="Description" labelPlacement="outside" validate={{required: 'This field is required'}} disabled={isSaving}/>           
            <BaseInput placeholder='Quantity' name='quantity' label='Quantity' labelPlacement='outside' validate={{required: 'This field is required'}}  disabled={isSaving}/>
            <BaseInput placeholder='Price (Baht)' name='price' label='Price' labelPlacement='outside' validate={{required: 'This field is required'}} disabled={isSaving}/>
            <BaseButton action={formMethods.handleSubmit(handleSubmit)} title='Save' color='warning' className='w-full' disabled={isSaving} />
          </div>
        </div>
      </form>
  </FormProvider>
  )
}

export default ItemForm