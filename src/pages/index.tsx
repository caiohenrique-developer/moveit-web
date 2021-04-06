import Head from 'next/head';

import { GetServerSideProps } from 'next';
import { CountDownProvider } from '../hooks/useCountDown';
import { ChallengesProvider } from '../hooks/useChallenges';
import { ChallengesProviderProps } from "../utils/types/hooks";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { ThemeButton } from "../components/ButtonTheme";

import styles from "../styles/pages/Home.module.css";

export default function Home(props: ChallengesProviderProps) {
  
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesComplited={props.challengesComplited}
    >
      <div className={styles.container}>
        <Head>
          <title>Move.it | Boost yourself!</title>
        </Head>

        <ThemeButton />

        <ExperienceBar />

        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesComplited } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesComplited: Number(challengesComplited)
    }
  }
}