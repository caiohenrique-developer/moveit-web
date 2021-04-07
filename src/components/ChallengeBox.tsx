import { useChallenges } from '../hooks/useChallenges';
import { useCountDown } from '../hooks/useCountDown';

import { Container } from '../styles/components/ChallengeBox'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useChallenges();
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
            {
                activeChallenge ? (
                    <div className={'challengeActive'}>
                        <header>Ganhe {activeChallenge.amount} xp</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="Body icon" />
                            <strong>{activeChallenge.title}</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <button
                                type="button"
                                className={'challengeFailedButton'}
                                onClick={handleChallengeFailed}
                            >
                                Não completei
                            </button>
                            <button
                                type="button"
                                className={'challengeSucceededButton'}
                                onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
                        </footer>
                    </div>
                ) : (
                        <div className={'challengeNotActive'}>
                            <strong>Finalize um ciclo para receber um desafio</strong>
                            <p>
                                <img src="icons/level-up.svg" alt="Level up icon" />
                                Avance de nível completando desafios.
                            </p>
                        </div>
                    )
            }
        </Container>
    )
}