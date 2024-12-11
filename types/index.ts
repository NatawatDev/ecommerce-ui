import { ReactNode } from 'react' 
import { RegisterOptions } from 'react-hook-form'

export interface IProductItem {
  _id: string,
  name: string,
  price: number,
  imageUrl: string
}

export interface IProductDetail extends IProductItem {
  _id: string,
  createdAt: string,
  description: string,
  quantity: number,
  updatedAt?: string
}

export interface IProductProps {
  productList: IProductItem[]
}

export interface IForm {
  name: string,
  description: string,
  quantity: number,
  price: number,
  file: File
}

export interface IBaseButtonProp {
  icon?: ReactNode,
  title?: string,
  action?: () => void,
  className?: string,
  disabled?: boolean,
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger", 
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"
}

export interface IBaseInputProps {
  className?: string,
  name: string,
  validate?: RegisterOptions,
  label?: ReactNode,
  labelPlacement?: 'outside' | 'outside-left' | 'inside' | undefined,
  placeholder?: string,
  type?: 'text',
  disabled?: boolean
}

export interface IBannerItem {
  _id: string;
  name: string;
  description: string;
  displayOrder: number;
  imageUrl: string;
  updatedAt: string;
  createdAt: string;
}

export interface IBannerProps {
  bannerList: IBannerItem[]
}
