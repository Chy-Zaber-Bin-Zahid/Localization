import React from 'react';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';

function MyApp({ Component, pageProps }: AppProps) {
  // pageProps.messages should be loaded in getStaticProps/getServerSideProps
  const { locale = 'en', messages = {} } = pageProps as any;

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en">
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
