'use client'
import React from "react";
import WhyChoseElementTwo from "../common/whyChoseElement/WhyChoseElementTwo";
import { useTranslation } from "react-i18next";

const ChooseArea = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="bd-chose-area section-space">
        <div className="container">
          <div className="row align-items-center justify-content-center section-title-space">
            <div className="col-xl-6">
              <div className="section-title-wrapper text-center">
                <span className="section-subtitle mb-10">{t('sectionaboutspan')}</span>
                <h2 className="section-title">{t('sectionabout')}</h2>
              </div>
            </div>
          </div>
          <div className="row gy-24">
            <WhyChoseElementTwo />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;
