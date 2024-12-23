import Banner from '@/components/banner'
import Product from '@/components/product'
import Loading from '@/components/Loading'
import apiRepo from './apiRepo'

const Page = async() => {
  const bannerData = await apiRepo.getBannerList()
  if (!bannerData) {
    return <Loading />
  }
  return (
    <div className='w-full'>
      <Banner bannerList={bannerData.data}/>
      <Product/>
    </div>
  );
};

export default Page;
