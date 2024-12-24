import ProductDetailItem from "@/components/product/ProductDetailItem"
import Loading from "@/components/Loading";
import apiRepo from "@/app/apiRepo"

type Params = Promise<{ id: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { id } = await params

  const response = await apiRepo.getProductDetail(id)
  const productData = response.data
  
  if (!productData) {
    return <Loading />
  }

  return (
    <> 
      <ProductDetailItem productDetail={productData} />
    </>
  )
}

export default Page
