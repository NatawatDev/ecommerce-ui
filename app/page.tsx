'use client'

import { useState, useEffect } from 'react'
import Banner from '@/components/Banner'
import ProductContent from '@/components/ProductContent'
import useFetch from '@/utils/useFetch'
import { BannerItem } from '@/types/index'

const Page = () => {
  const [bannerList, setBannerList] = useState<BannerItem[]>([])

  const { data, loading, error } = useFetch<BannerItem[]>('/banners')
  
  useEffect(() => {
    if (data) {
      setBannerList(data)
    }
   
  }, [data])

  if (loading) return <div>Loading...</div>
  
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <Banner bannerList={bannerList} />
      <ProductContent />
    </div>
  );
};

export default Page;
