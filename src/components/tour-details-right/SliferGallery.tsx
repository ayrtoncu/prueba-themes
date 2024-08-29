import Image from "next/image";
import React from 'react';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import destImgOne from "../../../public/assets/images/destination/destination-img-1.png";
import destImgTwo from "../../../public/assets/images/destination/destination-img-2.png";
import destImgThree from "../../../public/assets/images/destination/destination-img-3.png";
import { imageLoader } from "@/hooks/image-loader";

const SliferGallery = ({ gallery }: { gallery: any }) => {
  console.log(gallery)

  const destinationSliderData = [
    {
      id: 1,
      img: destImgOne,
    },
    {
      id: 2,
      img: destImgTwo,
    },
    {
      id: 3,
      img: destImgThree,
    },
    {
      id: 3,
      img: destImgOne,
    },
  ];

  return (
    <div className="destinations-details-slider details-slide p-relative mb-30">
      <div className="swiper details-slide-activation">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".tourigo-navigation-next",
            prevEl: ".tourigo-navigation-prev",
          }}
          pagination={{
            el: ".bd-pagination",
            clickable: true,
          }}
        >
          {gallery &&
            gallery.map((item: any, index: string) => (
              <SwiperSlide key={index} className="custom-swiper-slide">
                <div className="swiper-slide">
                  <Image
                    src={"https://admin.7wondersperu.com/wp-content/uploads/" + item.mediaDetails.file}
                    loader={imageLoader}
                    width={736}
                    height={424}
                    style={{ width: "100%", height: "auto" }}
                    alt={item.alt}
                  />
                </div>
              </SwiperSlide>
            ))}
          <div className="slider-pagination-wrapper">
            <div className="slider-pagination bd-pagination mt-50 justify-content-center"></div>
          </div>
        </Swiper>
      </div>
      <div className="details-slide-navigation btn-navigation">
        <button className="tourigo-navigation-prev">
          <i className="fa-regular fa-angle-left"></i>
        </button>
        <button className="tourigo-navigation-next">
          <i className="fa-regular fa-angle-right"></i>
        </button>
      </div>
    </div>
  )
}

export default SliferGallery