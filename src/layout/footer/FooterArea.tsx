import Link from "next/link";
import React from "react";
import Image from "next/image";
import footer from "../../../public/assets/images/footer/verde2.png"
import logo from "../../../public/assets/images/logo/7wonders-logo-transparent.png"
import { useTranslation } from "react-i18next";
const FooterArea = () => {
  const { t } = useTranslation()
  return (
    <>
      <footer className="bd-footer-area  fix">
        <div className="section-space" style={{ backgroundImage: `url(${footer.src})`, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-5 col-xl-5 col-lg-6">
                <div className="footer-inner text-center">
                  <div className="demo-footer-text">
                    <h3 className="mb-15">
                      {t('contact')}
                    </h3>
                  </div>
                  <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt="logo 7wonders"
                    className="mb-100"
                  />
                  <div className="">
                    {/* <Link
                      href="https://themeforest.net/item/tourigo-tour-travel-html5-template/51357906?s_rank=1"
                      className="bd-primary-btn btn-style has-arrow is-bg radius-60"
                    >
                      <span className="bd-primary-btn-arrow arrow-right">
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                      <span className="bd-primary-btn-text">Purchase Now</span>
                      <span className="bd-primary-btn-circle"></span>
                      <span className="bd-primary-btn-arrow arrow-left">
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-area black-bg" style={{ border: 'none' }}>
          <div className="container">
            <div className="row gy-24 align-items-center justify-content-center">
              <div className="
              col-lg-6 col-md-6 col-12">
                <div className="footer-copyright has-white underline-two text-center">
                  <p>
                    Copyright @ 2024{" "}
                    <Link
                      href="/"
                      target="_blank"
                    >
                      7Wonders
                    </Link>{" "}
                    . {t('copyright')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterArea;
