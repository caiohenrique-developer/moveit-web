import { ChangeEvent, useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    const [avatar, setAvatar] = useState('');

    const handleProfileAvatar = (ev: ChangeEvent<HTMLInputElement>) => {
        console.log('Aqui vem o nome do arquivo.');
        setAvatar(ev.target.files[0].name);
        console.log(avatar);
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileAvatar}>
                <img src={"github-profile-avatar.jpeg"} alt="GitHub profile avatar" />
                <label htmlFor="avatar">
                    <input
                        type="file"
                        id="avatar"
                        placeholder="Alterar foto"
                        capture
                        onChange={handleProfileAvatar}
                    />
                </label>
            </div>
            
            <div>
                <strong>Caio Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />level {level}
                </p>
            </div>
        </div>
    );
}