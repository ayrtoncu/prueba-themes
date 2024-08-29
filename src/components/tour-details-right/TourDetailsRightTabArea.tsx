"use client";
import { imageLoader } from "@/hooks/image-loader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import parseHTML from "html-react-parser";

const TourDetailsRightTabArea = ({ data }: { data: any }) => {
  return (
    <>
      <div className="tour-details-nav-tabs mb-35">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-description-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-description"
              type="button"
              role="tab"
              aria-controls="nav-description"
              aria-selected="true"
            >
              Descriptions
            </button>
            <button
              className="nav-link"
              id="nav-itinerary-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-itinerary"
              type="button"
              role="tab"
              aria-controls="nav-itinerary"
              aria-selected="false"
              tabIndex={-1}
            >
              Itinerary
            </button>
            <button
              className="nav-link"
              id="nav-inclusions-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-inclusions"
              type="button"
              role="tab"
              aria-controls="nav-inclusions"
              aria-selected="false"
              tabIndex={-1}
            >
              Inclusions
            </button>
            <button
              className="nav-link"
              id="nav-recomendations-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-recomendations"
              type="button"
              role="tab"
              aria-controls="nav-recomendations"
              aria-selected="false"
              tabIndex={-1}
            >
              Recomendations
            </button>
            <button
              className="nav-link"
              id="nav-paymenth-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-paymenth"
              type="button"
              role="tab"
              aria-controls="nav-paymenth"
              aria-selected="false"
              tabIndex={-1}
            >
              Paymenth Methods
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade active show"
            id="nav-description"
            role="tabpanel"
            aria-labelledby="nav-description-tab"
            tabIndex={0}
          >
            <div className="m-5">
              {parseHTML(data.descripciontour)}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-itinerary"
            role="tabpanel"
            aria-labelledby="nav-itinerary-tab"
            tabIndex={0}
          >
            <div className="m-5">
              {parseHTML(data.itinerariotour)}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-inclusions"
            role="tabpanel"
            aria-labelledby="nav-inclusions-tab"
            tabIndex={0}
          >
            <div className="m-5">
              {parseHTML(data.included)}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-recomendations"
            role="tabpanel"
            aria-labelledby="nav-recomendations-tab"
            tabIndex={0}
          >
            <div className="m-5">
              {parseHTML(data.recomenda)}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-paymenth"
            role="tabpanel"
            aria-labelledby="nav-paymenth-tab"
            tabIndex={0}
          >
            <div className="m-5">
              {parseHTML(data.paymentmethods)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetailsRightTabArea;
