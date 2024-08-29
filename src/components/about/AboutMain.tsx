'use client'
import React from "react";
import Breadcrumb from "../common/breadcrumb/BreadCrumb";
import AboutWrapper from "./AboutWrapper";
import VideoArea from "./VideoArea";
import AboutCtaArea from "./AboutCtaArea";
import TravelArea from "../shearedComponents/TravelArea";
import AboutTestimonial from "./AboutTestimonial";
import AboutTeamArea from "./AboutTeamArea";
import InstagramArea from "../shearedComponents/InstagramArea";
import { useTranslation } from "react-i18next";
const AboutMain = () => {
  const { t } = useTranslation()
  return (
    <>
      <Breadcrumb titleOne={t('titleabout')} titleTwo={t('titleabout')} image="2024/08/am1-fullday.jpg" />
      <div style={{ width: "80%", margin: 'auto', textAlign: 'center' }}>
        <h2>{t('header')} </h2>
        <img src="https://admin.7wondersperu.com/wp-content/uploads/2024/08/constancia-pachamama1.jpg" />
      </div>
      {/* <AboutWrapper /> */}
      {/* <VideoArea /> */}
      {/* <AboutCtaArea /> */}
      {/* <TravelArea />} */}
      {/* <AboutTestimonial /> */}
      {/* <AboutTeamArea /> */}
      {/* <InstagramArea /> */}
    </>
  );
};

export default AboutMain;
