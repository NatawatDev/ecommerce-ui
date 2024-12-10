'use client'

import { useState, useEffect } from 'react'
import Banner from '@/components/Banner'
import ProductContent from '@/components/ProductContent'
import useFetch from '@/utils/useFetch'
import { IBannerItem } from '@/types/index'
import Loading from '@/components/Loading'

const Page = () => {
  const [bannerList, setBannerList] = useState<IBannerItem[]>([])

  const { data, loading, error } = useFetch<IBannerItem[]>('/banners')
  
  useEffect(() => {
    if (data) {
      setBannerList(data)
    }
   
  }, [data])

  if (loading) return <Loading></Loading>
  
  if (error) return <div>Error: {error}</div>

  return (
    <div className='w-full'>
      <Banner bannerList={bannerList} />
      <ProductContent />
    </div>
  );
};

export default Page;
