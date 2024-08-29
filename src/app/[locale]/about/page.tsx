import initTranslations from "@/app/i18n";
import AboutMain from "@/components/about/AboutMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import TranslationsProvider from '../../../components/TranslationsProvider';
const i18Namespaces = ['about-us'];
export default async function AboutPage({ params: { locale }, }: { params: { locale: any } }) {
  const { t, resources } = await initTranslations(locale, i18Namespaces)
  return (
    <>
      <TranslationsProvider resources={resources} locale={locale} namespaces={i18Namespaces}>
        <MetaData pageTitle={t('titleabout')}>
          <Wrapper>
            <main>
              <AboutMain />
            </main>
          </Wrapper>
        </MetaData>
      </TranslationsProvider>
    </>
  );
};
