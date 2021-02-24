import { ChallengesProvider } from '../contexts/ChallengesContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
