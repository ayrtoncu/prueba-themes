import initTranslations from "../i18n";
import HomeTwoMain from "@/components/home-two/HomeTwoMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import TranslationsProvider from './../../components/TranslationsProvider';
const i18Namespaces = ['home'];
export default async function Home({ params: { locale }, }: { params: { locale: any } }) {
  const { t, resources } = await initTranslations(locale, i18Namespaces)
  return (
    <>
      <TranslationsProvider resources={resources} locale={locale} namespaces={i18Namespaces}>
        <MetaData pageTitle={t('header')}>
          <Wrapper>
            <main>
              <HomeTwoMain lang={t('lang')} />
            </main>
          </Wrapper>
        </MetaData>
      </TranslationsProvider>
    </>
  );
};

