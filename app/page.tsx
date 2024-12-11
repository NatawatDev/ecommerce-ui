import Banner from '@/components/banner'
import Product from '@/components/product'

const url = process.env.NEXT_PUBLIC_DEV_URL

async function getBannerList() {
  const data = await fetch(`${url}/banners`)
  return await data.json()
}

async function getProductList() {
  const data = await fetch(`${url}/products`)
  return await data.json()
}

const Page = async() => {
  const bannerData = getBannerList()
  const productData = getProductList()

  const [bannerList, productList] = await Promise.all([bannerData, productData])
  return (
    <div className='w-full'>
      <Banner bannerList={bannerList}/>
      <Product productList={productList} />
    </div>
  );
};

export default Page;
