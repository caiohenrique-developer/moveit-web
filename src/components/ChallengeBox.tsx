import { useChallenges } from '../hooks/useChallenges';
import { useCountDown } from '../hooks/useCountDown';
import {
  Container,
  ChallengeNotActive,
  ChallengeActive,
  ChallengeButton,
} from '../styles/components/ChallengeBox';

export function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useChallenges();
  const { resetCountDown } = useCountDown();

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt='Icon' />
            <strong>{activeChallenge.title}</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <ChallengeButton
              type='button'
              status='failed'
              onClick={handleChallengeFailed}
            >
              Não completei
            </ChallengeButton>
            <ChallengeButton
              type='button'
              status='succeeded'
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level up icon' />
            Avance de nível completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  );
}
