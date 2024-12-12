const url = process.env.NEXT_PUBLIC_DEV_URL

const getBannerList = async() =>   {
  const response  = await fetch(`${url}/banners`)
  const data = await response.json()
  return { data, response: response.status }
}

const getProductList = async() => {
  const response = await fetch(`${url}/products`)
  const data = await response.json()
  return { data, status: response.status }
}

const getProductDetail = async(id: string) => {
  const response = await fetch(`${url}/products/${id}`)
  const data = await response.json()
  return { data, status: response.status }
}

const createProduct = async (formData: FormData) => {
  const response = await fetch(`${url}/products`, {
    method: 'POST',
    body: formData,
  })
  const data = await response.json()
  return { data, status: response.status }
}

const updateProduct = async (id: string, formData: FormData) => {
  const response = await fetch(`${url}/products/${id}`, {
    method: 'PUT',
    body: formData,
  })
  const data = await response.json()
  return { data, status: response.status }
}


const apiRepo = {
  getBannerList,
  getProductList,
  getProductDetail,
  createProduct,
  updateProduct
}

export default apiRepo