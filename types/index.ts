export interface BannerItem {
  _id: string;
  name: string;
  description: string;
  displayOrder: number;
  imageUrl: string;
  updatedAt: string;
  createdAt: string;
}

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

export interface IForm {
  name: string,
  description: string,
  quantity: number,
  price: number,
  file: File
}