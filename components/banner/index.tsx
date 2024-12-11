import BannerItem from './BannerItem'
import { IBannerProps } from '@/types/index'

const Banner = async ({ bannerList }:IBannerProps ) => {
  return (
    <>
      <BannerItem bannerList={bannerList}/>
    </>
  );
};

export default Banner
