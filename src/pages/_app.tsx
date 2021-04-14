import { AppProps } from 'next/app';
import { ThemeModeProvider } from '../hooks/useThemeMode';
import GlobalStyle from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeModeProvider>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeModeProvider>
  );
};

export default MyApp;
