import { useChallenges } from '../hooks/useChallenges';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesComplited } = useChallenges();

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesComplited}</span>
        </div>
    )
}