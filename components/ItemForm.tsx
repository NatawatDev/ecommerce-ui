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
import apiRepo from '@/app/apiRepo'
import Loading from './Loading'

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

  useEffect(() => {
    if (id && productData) {
      formMethods.reset(productData)
    }
  }, [id, productData])

  const fetchProductById = async (id: string) => {
    try {
      const response = await apiRepo.getProductDetail(id)
      if (response.status === 200) {
        setProductData(response.data)        
      } else {
        showErrorAlert('Product not found')
      }
    } catch (error: any) {
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
    setIsSaving(true)

    try {
      const response = await apiRepo.createProduct(formData)

      if (response.status === 201) {
        setIsSaving(false)
        showSuccessAlert('Created product successfully!')
        router.push('/')
      } else {
        setIsSaving(false)
        showErrorAlert(response.data.message || 'An error occurred while creating the product.')
      }
    } catch (error) {
      setIsSaving(false)
      showErrorAlert('An error occurred while creating the product.')
    }
  }

  const updateProduct = async (id: string, formData: FormData) => {
    setIsSaving(true)
    try {
      const response = await apiRepo.updateProduct(id, formData)

      if (response.status === 200) {
        setIsSaving(false)
        showSuccessAlert('Updated product successfully!')
        router.push('/')
      } else {
        setIsSaving(false)
        showErrorAlert(response.data.message || 'An error occurred while updating the product.')
      }
    } catch (error) {
      setIsSaving(false)
      showErrorAlert('An error occurred while updating the product.')
    }
  }

  return (
    <FormProvider {...formMethods}>
    <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
      <div className="text-center">
        <p className="text-[20px] font-medium">{id ? "Edit Item" : "Add Item"}</p>
        <div className="flex flex-col gap-4">
          {id && !productData ? (
            <Loading/>
          ) : (
            <>
              <div className="flex pt-6">
                <div>
                  <p className="text-left pb-2">Image</p>
                  <div className="flex items-center gap-2">
                    <BaseButton
                      action={handleFileClick}
                      icon={<Upload />}
                      title="Upload"
                      color="warning"
                      variant="ghost"
                      disabled={isSaving}
                    />
                    {fileName && <span>{fileName}</span>}
                    {!fileName && id && productData && (
                      <img src={productData.imageUrl} alt="Preview Edit Product" className="w-20 h-20" />
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              <BaseInput
                placeholder="Name"
                name="name"
                label="Name"
                validate={{ required: "This field is required" }}
                disabled={isSaving}
              />
              <BaseTextarea
                placeholder="Enter your description"
                name="description"
                label="Description"
                labelPlacement="outside"
                validate={{ required: "This field is required" }}
                disabled={isSaving}
              />
              <BaseInput
                placeholder="Quantity"
                name="quantity"
                label="Quantity"
                validate={{ required: "This field is required" }}
                disabled={isSaving}
              />
              <BaseInput
                placeholder="Price (Baht)"
                name="price"
                label="Price"
                validate={{ required: "This field is required" }}
                disabled={isSaving}
              />
              <BaseButton
                action={formMethods.handleSubmit(handleSubmit)}
                title={id ? "Save" : "Add"}
                color="warning"
                className="w-full"
                disabled={isSaving}
              />
            </>
          )}
        </div>
      </div>
    </form>
  </FormProvider>
  )
}

export default ItemForm