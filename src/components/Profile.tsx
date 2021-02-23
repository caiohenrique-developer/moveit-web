import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/caiohenrique-developer.png" alt="Profile avatar GitHub" />
            <div>
                <strong> Caio Henrique </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" /> level 1
                </p>
            </div>
        </div>
    );
}