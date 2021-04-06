import { ChangeEvent, FormEvent, useState } from 'react';
import { useChallenges } from '../hooks/useChallenges';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useChallenges();

    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');

    const handleFormSubmit = (ev: FormEvent<HTMLFormElement>): void => {
        ev.preventDefault();

        console.log(avatar);
        console.log(name);
    }
    
    const handleProfileAvatar = (ev: ChangeEvent<HTMLInputElement>): void => {
        // ToDo: img base64!
        console.log('Aqui vem o nome do arquivo.');
        setAvatar(ev.target.files[0].name);
        console.log(avatar);
    }

    return (
        <form
            className={styles.profileContainer}
            onSubmit={handleFormSubmit}
        >
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
                <label>
                    <input
                        type="text"
                        placeholder="Qual o seu nome?"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                    <button type="button">Botão de ação pro form que vou colocar</button>
                </label>
                <p>
                    <img src="icons/level.svg" alt="Level" />level {level}
                </p>
            </div>
        </form>
    );
}