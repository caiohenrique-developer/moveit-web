import Head from 'next/head'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from '../contexts/CountDownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from "../styles/pages/Home.module.css";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesComplited: number;
  toggleThemeMode: () => void;
}

export default function Home(props: HomeProps) {
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

        <button
          type="button"
          className={styles.darkModeBTN}
          onClick={props.toggleThemeMode}
        >
          <span className="material-icons">brightness_4</span>
          <span className="material-icons">brightness_5</span>
          <span className="material-icons">brightness_7</span>
        </button>

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