import Banner from '@/components/banner'
import Product from '@/components/product'


const Page = async() => {
  return (
    <div className='w-full'>
      <Banner/>
      <Product/>
    </div>
  );
};

export default Page;
