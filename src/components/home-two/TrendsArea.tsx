import Image from "next/image";
import React from "react";
import ctaImgFour from "../../../public/assets/images/bg/b-Machupicchu1.jpg";
import Link from "next/link";
import BookingFormModal from "@/elements/modals/BookingFormModal";
import CardComponent from "./cardComponent";
import { getAllToursCards } from "@/lib/tours";
import TitleTrendsArea from "./TitleTrendsArea";
import CardTextTrendsArea from "./CardTextTrendsArea";
export default async function TrendsArea({ langTrends }: { langTrends: string }) {
  const configLang = langTrends;
  const tours = await getToursCards(configLang);
  return (
    <>
      <section className="bd-tour-area section-space">
        <div className="container">
          <div className="row gy-24 align-items-center justify-content-between section-title-space">
            <TitleTrendsArea />
            <div className="col-xl-3 col-md-3 col-sm-3">
              <div className="tour-navigation btn-navigation p-relative style-three d-flex justify-content-md-end">
                <button className="tourigo-navigation-prev">
                  <i className="fa-regular fa-angle-left"></i>
                </button>
                <button className="tourigo-navigation-next">
                  <i className="fa-regular fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row gy-24">
            <div className="col-xxl-3 col-xl-3 col-lg-4 order-lg-0 order-1">
              <div className="cta-wrapper cta-style-four">
                <div className="cta-thumb-four">
                  <Image
                    src={ctaImgFour}
                    style={{ width: "100%", height: "auto" }}
                    alt="image"
                  />
                </div>
                <div className="cta-content">
                  <CardTextTrendsArea />
                  {/* <div className="cta-button">
                    <Link
                      href="/booking"
                      className="bd-primary-btn btn-style has-arrow is-bg btn-tertiary is-white radius-60"
                    >
                      <span className="bd-primary-btn-arrow arrow-right">
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                      <span className="bd-primary-btn-text">Book Now</span>
                      <span className="bd-primary-btn-circle"></span>
                      <span className="bd-primary-btn-arrow arrow-left">
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-8 order-lg-1 order-0">
              <div className="tour-slide-wrapper p-relative">
                <div className="swiper tour__active_two">
                  <CardComponent tours={tours.nodes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingFormModal />
    </>
  );
};

export async function getToursCards(idioma: string) {
  const tours = await getAllToursCards(idioma);
  return tours;
}

