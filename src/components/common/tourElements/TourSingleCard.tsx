"use client";
import { imageLoader } from "@/hooks/image-loader";
import useGlobalContext from "@/hooks/use-context";
import { ITourDataType } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ItourPropsType {
  tour: ITourDataType;
  className: string;
  tourWrapperClass: string;
  isparentClass: boolean;
}

const TourSingleCard = ({
  tour,
  className,
  tourWrapperClass,
  isparentClass,
}: ItourPropsType) => {
  const image = tour.featuredImage;
  const featureImage = image.node
  return (
    <>
      {isparentClass === true ? (
        <>
          <div className={className}>
            <div className={tourWrapperClass}>
              <div className="p-relative">
                <div className="tour-thumb">
                  <Link href={`/tour/${tour.slug}`}>
                    <Image
                      src={`https://admin.7wondersperu.com/wp-content/uploads/${tour.featuredImage.node.mediaDetails?.file}`}
                      loader={imageLoader}
                      width={500}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                      alt="image"
                    />
                  </Link>
                </div>
                {/* <div className="tour-meta d-flex align-items-center justify-content-between">
                  <button className="tour-favorite tour-like">
                    <i className="icon-heart"></i>
                  </button>
                  <div className="tour-location">
                    <span>
                      <Link href={`/tour-details/${tour?.id}`}>
                        <i className="fa-regular fa-location-dot"></i>{" "}
                        {tour.tourLocation}
                      </Link>
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="tour-content">
                {/* <div className="tour-rating d-flex align-items-center gap-10 mb-10">
                  <div className="tour-rating-icon fs-14 d-flex rating-color">
                    <GetRatting averageRating={rating} />
                  </div>
                  <div className="tour-rating-text">
                    <span>
                      {tour.tourRating}
                    </span>
                  </div>
                </div> */}
                <h5 className="tour-title fw-5 underline custom_mb-5">
                  <Link href={`/tour/${tour.slug}`}>
                    {tour.title}
                  </Link>
                </h5>
                <span className="tour-price b3">
                  ${tour.tourinfo.precio ? tour.tourinfo.precio : null}
                </span>
                <div className="tour-divider"></div>

                <div className="tour-meta d-flex align-items-center justify-content-between">
                  <div className="time d-flex align-items-center gap--5">
                    <i className="icon-heart"></i>
                    <span>{tour.tourinfo.dias ? tour.tourinfo.dias : null} days</span>
                  </div>
                  <div className="tour-btn">
                    <Link
                      href={`/tour/${tour.slug}`}
                      className="bd-text-btn style-two"
                      type="button"
                    >
                      Book Now
                      <span className="icon__box">
                        <i className="fa-regular fa-arrow-right-long icon__first"></i>
                        <i className="fa-regular fa-arrow-right-long icon__second"></i>
                      </span>
                    </Link>
                    {/* <button
                      onClick={() => setModalData(tour)}
                      className="bd-text-btn style-two"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#popUpBookingForm"
                    >
                      Book Now
                      <span className="icon__box">
                        <i className="fa-regular fa-arrow-right-long icon__first"></i>
                        <i className="fa-regular fa-arrow-right-long icon__second"></i>
                      </span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={tourWrapperClass}>
            <div className="p-relative">
              <div className="tour-thumb image-overly">
                <Link href={`/tour/${tour.slug}`}>
                  <Image
                    src={`https://admin.7wondersperu.com/wp-content/uploads/${tour.featuredImage.node.mediaDetails.file}`}
                    width={500}
                    height={300}
                    loader={imageLoader}
                    style={{ width: "100%", height: "auto" }}
                    alt="image"
                  />
                </Link>
              </div>
              <div className="tour-meta d-flex align-items-center justify-content-between">
                <button className="tour-favorite tour-like">
                  <i className="icon-heart"></i>
                </button>
                <div className="tour-location">
                  <span>
                    <Link href={`/tour/${tour.slug}`}>
                      <i className="fa-regular fa-location-dot"></i>{" "}
                      {tour.tourLocation}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="tour-content">
              {/* <div className="tour-rating d-flex align-items-center gap-10 mb-10">
                <div className="tour-rating-icon fs-14 d-flex rating-color">
                  <GetRatting averageRating={rating} />
                </div>
                <div className="tour-rating-text">
                  <span>
                    {tour.tourRating} ({tour.tourRatingCount} Ratings)
                  </span>
                </div>
              </div> */}
              <h5 className="tour-title fw-5 underline custom_mb-5">
                <Link href={`/tour/${tour.slug}`}>{tour.title}</Link>
              </h5>
              <span className="tour-price b3">
                ${tour.tourinfo.precio?.toLocaleString("en-US")}
              </span>
              <div className="tour-divider"></div>

              <div className="tour-meta d-flex align-items-center justify-content-between">
                <div className="time d-flex align-items-center gap--5">
                  <i className="icon-heart"></i>
                  <span>{tour.tourinfo.dias} days</span>
                </div>
                <div className="tour-btn">
                  <Link
                    href={`/tour/${tour.slug}`}
                    className="bd-text-btn style-two"
                    type="button"
                  >
                    Book Now s
                    <span className="icon__box">
                      <i className="fa-regular fa-arrow-right-long icon__first"></i>
                      <i className="fa-regular fa-arrow-right-long icon__second"></i>
                    </span>
                  </Link>
                  {/* <button
                    onClick={() => setModalData(tour)}
                    className="bd-text-btn style-two"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#popUpBookingForm"
                  >
                    Book Now
                    <span className="icon__box">
                      <i className="fa-regular fa-arrow-right-long icon__first"></i>
                      <i className="fa-regular fa-arrow-right-long icon__second"></i>
                    </span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TourSingleCard;