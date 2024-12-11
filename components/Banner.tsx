import { IBannerItem } from '@/types/index'
import BannerItem from './BannerItem';

const Banner = async () => {
  const url = process.env.NEXT_PUBLIC_DEV_URL
  const data = await fetch(`${url}/banners`)
  const bannerList: IBannerItem[] = await data.json()
  return (
    <>
      <BannerItem bannerList={bannerList}/>
    </>
  );
};

export default Banner
