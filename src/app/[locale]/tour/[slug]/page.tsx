import initTranslations from "@/app/i18n";
import TourDetailsRightMain from "@/components/tour-details-right/TourDetailsRightMain";
import TranslationsProvider from "@/components/TranslationsProvider";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import { getSingleTour } from "@/lib/tours";
import React from "react";
const i18Namespaces = ['tourtext'];
export default async function TourPage({ params: { slug, locale } }: { params: { slug: string; locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18Namespaces)
  const dataslug = slug;
  const idiomastring = locale.toString();
  const tourdata = await getSingleTour(dataslug, idiomastring);
  const tour = tourdata.translation;
  return (
    <>
      <TranslationsProvider resources={resources} locale={locale} namespaces={i18Namespaces}>
        <MetaData pageTitle={tour.title}>
          <Wrapper>
            <main>
              <TourDetailsRightMain data={tour} />
            </main>
          </Wrapper>
        </MetaData>
      </TranslationsProvider>
    </>
  );
};
