import { useCountDown } from '../hooks/useCountDown';

import { Container } from "../styles/components/CountDown";

export function CountDown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountDown,
        startCountDown
    } = useCountDown();

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <Container>
            <div>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {
                hasFinished ? (
                    <button
                        disabled
                        // className={styles.countDownButton}
                    >
                        Ciclo encerrado
                        <img src="icons/check_circle.svg" alt="Check icon - Cycle checked" />
                    </button>
                ) : (
                        <>
                            {
                                isActive ? (
                                    <button
                                        type="button"
                                        // className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                        onClick={resetCountDown}
                                    >
                                        Abandonar ciclo
                                        <img src="icons/close-white.svg" alt="Close icon - To abandon a cycle" />
                                    </button>
                                ) : (
                                        <button
                                            type="button"
                                            // className={styles.countDownButton}
                                            onClick={startCountDown}
                                        >
                                            Iniciar um ciclo
                                            <img src="icons/play_arrow.svg" alt="Play icon - Start a cycle" />
                                        </button>
                                    )
                            }
                        </>
                    )
            }
        </Container>
    );
}