import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ThemeButton } from '@components/ButtonTheme';
import { ChallengeBox } from '@components/ChallengeBox';
import { CompletedChallenges } from '@components/CompletedChallenges';
import { CountDown } from '@components/CountDown';
import { ExperienceBar } from '@components/ExperienceBar';
import { Profile } from '@components/Profile';

import { ChallengesProvider } from '@hooks/useChallenges';
import { CountDownProvider } from '@hooks/useCountDown';

import { Container } from '@styles/pages/Home';

import { ChallengesProviderProps } from '@utils/types/hooks';

export default function Home(props: ChallengesProviderProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesComplited={props.challengesComplited}
    >
      <Container>
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
