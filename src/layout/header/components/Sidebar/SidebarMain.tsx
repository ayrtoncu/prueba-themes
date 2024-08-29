import { imageLoader } from "@/hooks/image-loader";
import useGlobalContext from "@/hooks/use-context";
import Image from "next/image";
import React from "react";
import logoBlack from "../../../../../public/assets/images/logo/7wonders-logo-transparent.png";
import Link from "next/link";
import MobileMenu from "../MobileMenu";

const SidebarMain = () => {
  const { sideMenuOpen, toggleSideMenu } = useGlobalContext();
  return (
    <>
      <div className="fix">
        <div className={`offcanvas-area ${sideMenuOpen ? "info-open" : ""}`}>
          <div className="offcanvas-wrapper">
            <div className="offcanvas-content">
              <div className="offcanvas-top d-flex justify-content-between align-items-center mb-25">
                <div className="offcanvas-logo">
                  <Link href="/">
                    <Image
                      src={logoBlack}
                      loader={imageLoader}
                      width={100}
                      height={160}
                      alt="logo 7 Wonders in Peru"
                    />
                  </Link>
                </div>
                <div onClick={toggleSideMenu} className="offcanvas-close">
                  <button className="offcanvas-close-icon animation--flip">
                    <span className="offcanvas-m-lines">
                      <span className="offcanvas-m-line line--1"></span>
                      <span className="offcanvas-m-line line--2"></span>
                      <span className="offcanvas-m-line line--3"></span>
                    </span>
                  </button>
                </div>
              </div>
              {/* <div className="offcanvas-search mb-0">
                <form action="#">
                  <input
                    type="text"
                    name="offcanvasSearch"
                    placeholder="Search here"
                  />
                  <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div> */}
              <div className="mobile-menu fix mb-25 mean-container">
                <div className="mean-bar">
                  <nav className="mean-nav">
                    <MobileMenu />
                  </nav>
                </div>
              </div>
              <div className="offcanvas-about d-none d-lg-block mb-25">
                <h4 className="offcanvas-title-meta">About 7Wonders</h4>
                <p>
                  7 Wonders offers personalized tours in Cusco, from Machu Picchu to the Sacred Valley, ensuring unique experiences and exceptional service.
                </p>
              </div>
              <div className="offcanvas-contact mb-25">
                <h4 className="offcanvas-title-meta">Contact Info</h4>
                <ul>
                  {/* <li className="d-flex align-items-center gap-10">
                    <div className="offcanvas-contact-icon">
                      <Link target="_blank" href="#">
                        <i className="fal fa-map-marker-alt"></i>
                      </Link>
                    </div>
                    <div className="offcanvas-contact-text">
                      <Link target="_blank" href="#">
                        1426 Center StreetBend, 97702, California, USA
                      </Link>
                    </div>
                  </li> */}
                  <li className="d-flex align-items-center gap-10">
                    <div className="offcanvas-contact-icon">
                      <Link href="tel:+51978964009">
                        <i className="far fa-phone"></i>
                      </Link>
                    </div>
                    <div className="offcanvas-contact-text">
                      <Link href="tel:+51978964009">+51 978 964 009
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-10">
                    <div className="offcanvas-contact-icon">
                      <Link href="tel:+51991287395">
                        <i className="far fa-phone"></i>
                      </Link>
                    </div>
                    <div className="offcanvas-contact-text">
                      <Link href="tel:+51991287395">+51 991 287 395</Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center gap-10">
                    <div className="offcanvas-contact-icon">
                      <Link href="mailto:7wonderspe@gmail.com">
                        <i className="fal fa-envelope"></i>
                      </Link>
                    </div>
                    <div className="offcanvas-contact-text">
                      <Link href="mailto:7wonderspe@gmail.com">
                        7wonderspe@gmail.com
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="offcanvas-btn mb-25">
                <h4 className="offcanvas-title-meta">Account</h4>
                <div className="header-btn-wrap gap-10">
                  <Link className="bd-btn btn-style text-btn" href="/sign-in">
                    Log In
                  </Link>
                  <Link className="bd-btn btn-style text-btn" href="/contact">
                    Get Started
                  </Link>
                </div>
              </div> */}
              <div className="offcanvas-social">
                <h4 className="offcanvas-title-meta">Follow Us on Social Media</h4>
                <ul>
                  <li>
                    <Link href="https://www.facebook.com/profile.php?id=100063554742334">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/7wondersperu/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d23651566-Reviews-7wonders_Peru-Cusco_Cusco_Region.html">
                      <i className="fa fa-tripadvisor"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={toggleSideMenu}
        className={`offcanvas-overlay ${sideMenuOpen ? "overlay-open" : ""}`}
      ></div>
      <div className="offcanvas-overlay-white"></div>
    </>
  );
};

export default SidebarMain;
