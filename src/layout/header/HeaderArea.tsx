"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import MenuTwo from "./components/MenuTwo";
import useGlobalContext from "@/hooks/use-context";
import LanguageChangerD from './../../components/LanguageChangerD';

const HeaderArea = () => {
  const { toggleSideMenu, scrollDirection } = useGlobalContext();
  return (
    <>
      <header>
        <div
          className={`header-area header-style header-style-two header-transparent ${scrollDirection === "down" ? "bd-sticky" : ""
            }`}
          id="header-sticky"
        >
          <div className="container">
            <div className="header-inner">
              <div className="header-logo">
                {/* <Link href="/">
                  <Image
                    src={logoBlack}
                    loader={imageLoader}
                    style={{ width: "100%", height: "auto" }}
                    alt="Logo"
                  />
                </Link> */}
              </div>
              <div className="header-menu">
                <nav className="main-menu" id="mobile-menu">
                  <MenuTwo />
                </nav>
              </div>
              <LanguageChangerD />
              <div className="header-right">

                <div className="header-action d-flex align-items-center">
                  <div onClick={toggleSideMenu} className="header-hamburger ml-20 d-xl-none">
                    <div className="sidebar-toggle">
                      <Link className="bar-icon" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderArea;
