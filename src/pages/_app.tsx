import { AppProps } from 'next/app';
import GlobalStyle from '@styles/globals';
import { ThemeModeProvider } from '@hooks/useThemeMode';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeModeProvider>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeModeProvider>
  );
};

export default MyApp;
