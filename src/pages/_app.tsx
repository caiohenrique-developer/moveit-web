import { useContext } from 'react';
import { ThemeModeContext } from '../contexts/ThemeModeContext';

import GlobalStyle from '../styles/globals'

function MyApp({ Component, pageProps }) {
  const { theme } = useContext(ThemeModeContext);

  console.log('theme')
  console.log(theme)
  
  return (
    <>
      <ThemeModeContext.Provider value={{theme}}>
        <Component {...pageProps} />
      </ThemeModeContext.Provider>
      
      <GlobalStyle />
    </>
  )
}

export default MyApp