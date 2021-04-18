import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { motion } from 'framer-motion';

import { useChallenges } from '@hooks/useChallenges';

import { FormContainer, Label, Input } from '@styles/components/Profile';

export function Profile(): JSX.Element {
  const { level } = useChallenges();

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');

  const handleFormSubmit = (ev: FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();

    console.log(avatar);
    console.log(name);
  };

  const handleProfileAvatar = (ev: ChangeEvent<HTMLInputElement>): void => {
    // ToDo: img base64!
    setAvatar(ev.target.files[0].name);
    console.log(avatar);
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <section>
        <motion.img
          src='github-profile-avatar.jpeg'
          alt='GitHub profile avatar'
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <Label elementSection='userAvatar' htmlFor='avatar'>
          <Input
            type='file'
            id='avatar'
            placeholder='Alterar foto'
            elementSection='userAvatar'
            capture
            onChange={handleProfileAvatar}
          />
        </Label>
      </section>

      <section>
        <Label elementSection='userName'>
          <Input
            type='text'
            placeholder='Qual o seu nome?'
            elementSection='userName'
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <button type='submit'>
            <FiCheckSquare />
          </button>
        </Label>
        <p>
          <img src='icons/level.svg' alt='Level' />
          level {level}
        </p>
      </section>
    </FormContainer>
  );
}
