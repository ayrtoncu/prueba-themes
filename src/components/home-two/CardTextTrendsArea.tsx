'use client'
import React from 'react'
import { useTranslation } from "react-i18next";
const CardTextTrendsArea = () => {
  const {t} = useTranslation()
  return (
    <>
      <span className="cta-subtitle">{t('mostripsCardSpan')}</span>
      <h3 className="cta-title white-text mb-25">
        {t('mostripsCardTitle')}
      </h3>
    </>
  )
}

export default CardTextTrendsArea