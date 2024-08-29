// 'use client'
import React from "react";
import BannerTwo from "./BannerTwo";
import ChooseArea from "./ChooseArea";
import DestinationArea from "./DestinationArea";
import ActivityTwoArea from "./ActivityTwoArea";
import TrendsArea from "./TrendsArea";
import TestimonialAreaTwo from "./TestimonialAreaTwo";
import BlogTwoArea from "./BlogTwoArea";
import TourAreaTwo from "./TourAreaTwo";
// import { useTranslation } from "react-i18next";
const HomeTwoMain = ({ lang }: { lang: any }) => {

  return (
    <>
      <BannerTwo />
      <ChooseArea />
      {/* <DestinationArea /> */}
      <TourAreaTwo lang={lang} />
      {/* <ActivityTwoArea /> */}
      <TrendsArea langTrends={lang} />
      {/* <TestimonialAreaTwo /> */}
      {/* <BlogTwoArea /> */}
    </>
  );
};

export default HomeTwoMain;
