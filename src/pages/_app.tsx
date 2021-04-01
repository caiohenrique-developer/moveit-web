import GlobalStyle from '../styles/globals'
import { ThemeModeProvider } from '../contexts/ThemeModeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeModeProvider>
        <Component {...pageProps} />

        <GlobalStyle />
    </ThemeModeProvider>
  )
}

export default MyApp;