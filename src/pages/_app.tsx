import { useState } from 'react';
import GlobalStyle, { themeMode } from '../styles/globals'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');

  const handleThemeModeToggle = () => { theme === 'dark' ? setTheme('light') : setTheme('dark'); }
  
  return (
    <>
      <ThemeProvider theme={ theme === 'dark' ? themeMode.dark : themeMode.light }>
        <Component {...pageProps} />

        <button
          onClick={handleThemeModeToggle}
        >Alterar tema</button>

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp