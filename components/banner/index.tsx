import BannerItem from './BannerItem'
import Loading from '@/components/Loading'
import apiRepo from '@/app/apiRepo'

const Banner = async () => {

  const bannerData = await apiRepo.getBannerList()
  const bannerList = bannerData.data
  
  if (!bannerData) {
    return <Loading />
  }

  return (
    <>
      <BannerItem bannerList={bannerList}/>
    </>
  );
};

export default Banner
