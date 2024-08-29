'use client'
import React from 'react'
import { useTranslation } from "react-i18next";
const TitleTrendsArea = () => {
  const { t } = useTranslation()
  return (
    <div className="col-lg-6 col-md-8">
      <div className="section-title-wrapper">
        <span className="section-subtitle mb-10">{t('mosttripsspan')}</span>
        <h2 className="section-title">{t('mosttripstitle')}</h2>
      </div>
    </div>
  )
}

export default TitleTrendsArea