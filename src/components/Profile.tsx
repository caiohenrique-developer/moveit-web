import { ChangeEvent, FormEvent, useState } from 'react';
import { FiCheckSquare } from "react-icons/fi";
import { useChallenges } from '../hooks/useChallenges';
import { FormContainer } from '../styles/components/Profile';

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
        <FormContainer onSubmit={handleFormSubmit} >
            <section>
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
            </section>
            
            <section>
                <label>
                    <input
                        type="text"
                        placeholder="Qual o seu nome?"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                    <button type="submit"><FiCheckSquare /></button>
                </label>
                <p>
                    <img src="icons/level.svg" alt="Level" />level {level}
                </p>
            </section>
        </FormContainer>
    );
}