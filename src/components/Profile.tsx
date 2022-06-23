import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { motion, AnimatePresence } from 'framer-motion';

import { useChallenges } from '@hooks/useChallenges';

import { FormContainer, Label, Input } from '@styles/components/Profile';

export function Profile(): JSX.Element {
  const { level } = useChallenges();

  const [avatar, setAvatar] = useState('pinpng.com-avatar-png-1146730.png');
  const [name, setName] = useState('');
  const [avatarFeedbackStatus, setAvatarFeedbackStatus] = useState('');

  useEffect(() => {
    const userAvatarStorage = JSON.parse(
      localStorage.getItem('@MoveIt:user-info'),
    );

    if (userAvatarStorage) setAvatar(userAvatarStorage?.avatar);
  }, []);

  const handleFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log(avatar);
    console.log(name);
  };

  const handleProfileAvatar = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    const selectedImgFile = ev.target?.files[0];
    const selectedImgFileType = selectedImgFile?.type;
    const extractSelectedImgFileType = selectedImgFileType?.split('/')[1];
    const validImgFileTypesRegExp = /(gif|jpe?g|tiff?|png|svg|webp|bmp)$/i;
    const validImgTypes = validImgFileTypesRegExp.test(
      extractSelectedImgFileType,
    );

    if (selectedImgFile && validImgTypes) {
      const updatedAvatar = URL.createObjectURL(selectedImgFile);

      setAvatar(updatedAvatar);
      setAvatarFeedbackStatus('');
      populateStorage(updatedAvatar);
      return;
    }

    setAvatarFeedbackStatus('Invalid image file type');
  };

  const populateStorage = (userAvatar?: string, userName = 'John Doe') => {
    const userInfo =
      (userAvatar || userName) &&
      JSON.stringify({
        name: userName,
        avatar: userAvatar,
      });

    localStorage.setItem('@MoveIt:user-info', userInfo);
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <section>
        <motion.img
          src={avatar}
          alt='GitHub profile avatar'
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <Label elementSection='userAvatar' htmlFor='avatar'>
          <Input
            type='file'
            id='avatar'
            accept='image/*'
            multiple={false}
            placeholder='Alterar foto'
            elementSection='userAvatar'
            capture
            onChange={handleProfileAvatar}
          />
        </Label>
        <AnimatePresence>
          {avatarFeedbackStatus && (
            <motion.span
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
            >
              {avatarFeedbackStatus}
            </motion.span>
          )}
        </AnimatePresence>
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
          <AnimatePresence>
            {name && (
              <motion.button
                type='submit'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.1 }}
              >
                <FiCheckSquare />
              </motion.button>
            )}
          </AnimatePresence>
        </Label>
        <p>
          <img src='icons/level.svg' alt='Level' />
          level {level}
        </p>
      </section>
    </FormContainer>
  );
}
