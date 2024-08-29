"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import yellowShape from "../../../public/assets/images/shapes/yellow-shape.png";
import logoWhite from "../../../public/assets/images/logo/7wonders-logo-transparent.png"
import { imageLoader } from "@/hooks/image-loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { sliderData } from "@/data/homeTwo/slider-home-two-data";
import Link from "next/link";
import facebook from "../../../public/assets/images/banner/social/t4.png"
import instagram from "../../../public/assets/images/banner/social/t.png"
import tripadvisor from "../../../public/assets/images/banner/social/tripad.png"
const BannerTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      swiperRef.current.navigation.update();
    }
  }, [activeIndex]);
  return (
    <>
      <section className="bd-banner-area banner-style-two" style={{ maxHeight: 600 }}>
        <div className="swiper p-relative">
          <div className="swiper-wrapper" style={{ maxHeight: 600 }}>
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Navigation]}
              effect={"fade"}
              onSlideChange={handleSlideChange}
              navigation={{
                nextEl: ".banner-navigation-next",
                prevEl: ".banner-navigation-prev",
              }}
              autoplay={{
                delay: 3000,
              }}
              loop={true}
            >
              {sliderData?.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="banner-slider-wrapper">
                      <div
                        className="banner-two-image"
                        style={{ backgroundImage: `url(${item.bgImg.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                      ></div>
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-xxl-9 col-xl-9 col-lg-10">
                            <div className="banner-two-content">
                              <div className="logobanner">
                                <div className="banner-title medium fw-7 mb-20 white-text">
                                  <Image
                                    src={logoWhite}
                                    style={{ width: "100%", height: "auto" }}
                                    alt="logo 7wonders"
                                  />
                                  <div className="offcanvas-social">
                                    <ul>
                                      <li>
                                        <Link href="https://www.facebook.com/profile.php?id=100063554742334">
                                          <Image src={facebook} alt="facebook 7wonders" width={36} height={36} />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.instagram.com/7wondersperu/">
                                          <Image src={instagram} alt="facebook 7wonders" width={36} height={36} />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d23651566-Reviews-7wonders_Peru-Cusco_Cusco_Region.html">
                                          <Image src={tripadvisor} alt="facebook 7wonders" width={36} height={36} />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <div className="left">
                                  <h1 className="banner-title medium fw-7 mb-20 white-text">
                                    {item.tagOne}{" "}
                                    <span className="yellow-shape">
                                      {item.tagTwo}{" "}
                                      <Image
                                        src={yellowShape}
                                        loader={imageLoader}
                                        style={{ width: "100%", height: "auto" }}
                                        alt="yellow-shape"
                                      />
                                    </span>
                                    {item.tagThree}
                                  </h1>
                                  <p className="banner-description mb-20">
                                    {item.description}
                                  </p>
                                </div> */}
                              </div>
                              {/* <h1 className="banner-title medium fw-7 mb-20 white-text">
                                {item.tagOne}{" "}
                                <span className="yellow-shape">
                                  {item.tagTwo}{" "}
                                  <Image
                                    src={yellowShape}
                                    loader={imageLoader}
                                    style={{ width: "100%", height: "auto" }}
                                    alt="yellow-shape"
                                  />
                                </span>
                                {item.tagThree}
                              </h1>
                              <p className="banner-description mb-20">
                                {item.description}
                              </p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* navigation button start */}
          <div className="banner-nav-btn d-none d-md-block">
            <div className="banner-navigation-btn-2">
              <button className="banner-navigation-prev">
                <i className="fa-regular fa-angle-left"></i>
              </button>
              <button className="banner-navigation-next">
                <i className="fa-regular fa-angle-right"></i>
              </button>
            </div>
          </div>
          {/* navigation button end */}
        </div>
        <style jsx>{`
        .logobanner{
          display: grid;
          grid-template-columns: 30% 70%;
          justify-content: center;
          align-items: center;
        }
          @media only screen and (max-width: 600px) {
            .logobanner {
              grid-template-columns: 80%;
            }
          }
      `}</style>
      </section>
    </>
  );
};

export default BannerTwo;
