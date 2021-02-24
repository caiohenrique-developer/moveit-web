import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="github-profile-avatar.jpeg" alt="GitHub profile avatar" />
            <div>
                <strong> Caio Henrique </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" /> level 1
                </p>
            </div>
        </div>
    );
}