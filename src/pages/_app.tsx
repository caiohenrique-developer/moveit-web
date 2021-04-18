import React from 'react';
import Modal from 'react-modal';

import { AppProps } from 'next/app';

import { ThemeModeProvider } from '@hooks/useThemeMode';

import GlobalStyle from '@styles/globals';

Modal.setAppElement('#__next');

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeModeProvider>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeModeProvider>
  );
};

export default MyApp;
