const url = process.env.NEXT_PUBLIC_DEV_URL

const getBannerList = async() =>   {
  const response  = await fetch(`${url}/banners`)
  const data = await response.json()
  return { data, response: response.status }
}

const getProductList = async(limit = 0, offset = 0) => {
  const response = await fetch(`${url}/products?limit=${limit}&offset=${offset}`)
  const data = await response.json()
  return { data, status: response.status }
}

const getProductByName = async(name: string) => {
  const response = await fetch(`${url}/products/search/${name}`)
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
  getProductByName,
  getProductDetail,
  createProduct,
  updateProduct
}

export default apiRepo