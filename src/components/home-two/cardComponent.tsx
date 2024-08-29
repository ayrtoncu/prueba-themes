"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TourSingleCard from '../common/tourElements/TourSingleCard';
const CardComponent = ({ tours }: { tours: any }) => {
  const datatour = tours;
  console.log(datatour)
  return (
    <>
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          651: {
            slidesPerView: 2,
          },

          950: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".tourigo-navigation-next",
          prevEl: ".tourigo-navigation-prev",
        }}
        modules={[Navigation]}
        className="d-flex overflow-hidden custom-swiper"
      >
        {datatour.map((item: any) => (
          <SwiperSlide
            key={item.id}
            className="custom-swiper-slide"
          >
            <TourSingleCard
              tour={item}
              className=""
              tourWrapperClass="tour-wrapper style-one"
              isparentClass={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}


export default CardComponent;