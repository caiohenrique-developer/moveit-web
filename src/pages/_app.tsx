import React from 'react';

import { AppProps } from 'next/app';

import { ThemeModeProvider } from '@hooks/useThemeMode';

import GlobalStyle from '@styles/globals';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeModeProvider>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeModeProvider>
  );
};

export default MyApp;
