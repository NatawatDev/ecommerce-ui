import Banner from '@/components/banner'
import Product from '@/components/product'
import Loading from '@/components/Loading'
import apiRepo from './apiRepo'



const Page = async() => {
  const bannerData = await apiRepo.getBannerList()
  const productData = await apiRepo.getProductList()

  const [bannerList, productList] = await Promise.all([bannerData.data, productData.data])
  

  if (!bannerList || !productList) {
    return <Loading />
  }
  return (
    <div className='w-full'>
      <Banner bannerList={bannerList}/>
      <Product productList={productList} />
    </div>
  );
};

export default Page;
