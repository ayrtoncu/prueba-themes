'use client'
import React from 'react'
import BookingFormModal from "@/elements/modals/BookingFormModal";
import { useTranslation } from "react-i18next";
const TitleTourArea = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="row gy-24 align-items-center justify-content-center section-title-space">
        <div className="col-lg-6 col-md-8">
          <div className="section-title-wrapper text-center">
            <span className="section-subtitle mb-10">{t('tripsspan')} </span>
            <h2 className="section-title">{t('tripstitle')} </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitleTourArea