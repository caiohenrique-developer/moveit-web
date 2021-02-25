import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="github-profile-avatar.jpeg" alt="GitHub profile avatar" />
            <div>
                <strong> Caio Henrique </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" /> level {level}
                </p>
            </div>
        </div>
    );
}