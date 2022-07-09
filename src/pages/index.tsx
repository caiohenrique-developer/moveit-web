import React from 'react';

import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ChallengeBox } from '@components/ChallengeBox';
import { CompletedChallenges } from '@components/CompletedChallenges';
import { CountDown } from '@components/CountDown';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Profile } from '@components/Profile';

import { ChallengesProvider } from '@hooks/useChallenges';
import { CountDownProvider } from '@hooks/useCountDown';

import { Container } from '@styles/pages/Home';

import { ChallengesProviderProps } from '@utils/types/hooks';

export default function Home({
  level,
  currentExperience,
  challengesComplited,
}: ChallengesProviderProps): JSX.Element {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesComplited={challengesComplited}
    >
      <Container>
        <Head>
          <title>Move.it | Boost yourself!</title>
        </Head>

        <Header />

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

        <Footer />
      </Container>
    </ChallengesProvider>
  );
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { level, currentExperience, challengesComplited } = ctx.req.cookies;

//   return {
//     props: {
//       level: Number(level),
//       currentExperience: Number(currentExperience),
//       challengesComplited: Number(challengesComplited),
//     },
//   };
// };
