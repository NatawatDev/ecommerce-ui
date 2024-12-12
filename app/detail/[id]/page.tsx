import ProductDetailItem from "@/components/product/ProductDetailItem"
import Error from "@/components/Error"
import apiRepo from "@/app/apiRepo"

type Params = Promise<{ id: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { id } = await params
  let productData = null

  try {
    const response = await apiRepo.getProductDetail(id)

    if (response.status === 200) {
      productData = response.data
    } else {
      return <Error message={response.data.message}/>
    }
  } catch (error) {
    console.log(error)    
    return <Error message='An unknown error occurred'/>
  }

  return (
    <> 
      <ProductDetailItem productDetail={productData} />
    </>
  )
}

export default Page
