'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

interface BannerItem {
  _id: string;
  name: string;
  description: string;
  displayOrder: number;
  imageUrl: string;
  updatedAt: string;
  createdAt: string;
}

interface BannerProps {
  bannerList: BannerItem[];
}

const Banner: React.FC<BannerProps> = ({ bannerList }) => {
  return (
    <>
      {bannerList.length > 0 && (
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {bannerList.map((item) => (
            <SwiperSlide key={item._id}>
              <div>
                <img src={item.imageUrl} alt={item.name} className="w-full h-[150px] object-fit md:object-none md:h-[430px]" />
              </div>              
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Banner
