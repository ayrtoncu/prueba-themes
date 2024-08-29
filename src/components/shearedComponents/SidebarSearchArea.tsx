"use client";
import { imageLoader } from "@/hooks/image-loader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sideBarBg from "../../../public/assets/images/bg/b-Machupicchu1.jpg";
import SidebarBookingForm from "@/forms/SidebarBookingForm";
import SidebarBlogList from "./SidebarBlogList";
import SidebarSearchInputBox from "./SidebarSearchInputBox";
import { useTranslation } from "react-i18next";

interface propsType {
  placeHolderTextData: string;
}

const SidebarSearchArea = ({ placeHolderTextData }: propsType) => {
  const { t } = useTranslation()
  return (
    <>
      <aside className="sidebar-wrapper sidebar-sticky">
        <div className="sidebar-widget-wrapper mb-30">
          {/* <div className="sidebar-widget widget">
            <h6 className="sidebar-widget-title small mb-15">Search Here</h6>
            <div className="sidebar-search">
              <SidebarSearchInputBox placeHolder={placeHolderTextData} />
            </div>
          </div>

          <div className="sidebar-widget-divider"></div> */}
          <div className="sidebar-widget widget">
            <h6 className="sidebar-widget-title small mb-15">{t('contactform')}</h6>
            <SidebarBookingForm />
          </div>
          {/* <div className="sidebar-widget-divider"></div> */}
          {/* <SidebarBlogList /> */}
        </div>
        <div className="sidebar-widget-banner p-relative">
          <div className="sidebar-widget-thumb p-relative">
            <Image
              src={sideBarBg}
              loader={imageLoader}
              style={{ width: "100%", height: "100%" }}
              alt="img"
            />
          </div>
          <div className="sidebar-widget-content">
            <span className="bd-play-btn pulse-white mb-40">
              <i className="icon-call-ring"></i>
            </span>
            <p className="b3 mb-0">{t('contactanos')}</p>
            <h5 className="mb-25">
              <Link href="/tel:+51978964009">+51 978 964 009</Link>
            </h5>
            <h5 className="mb-25">
              <Link href="/tel:+51991287395">+51 991 287 395</Link>
            </h5>
            <div className="sidebar-btn">
              <Link className="bd-text-btn style-two" href="https://api.whatsapp.com/send?phone=51991287395">
                {t('buttonchat')}
                <span className="icon__box">
                  <i className="fa-light fa-angle-right icon__first"></i>
                  <i className="fa-light fa-angle-right icon__second"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarSearchArea;
