import ProductDetailItem from "@/components/product/ProductDetailItem"

const url = process.env.NEXT_PUBLIC_DEV_URL

async function getProductDetail(id: string) {
  const data = await fetch(`${url}/products/${id}`)
  return await data.json()
}

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params 

  const productData = await getProductDetail(id)

  return (
    <> 
      <ProductDetailItem productDetail={productData} />
    </>
  )
}

export default page
