import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { motion, AnimatePresence } from 'framer-motion';
import { object, string } from 'yup';

import { useChallenges } from '@hooks/useChallenges';

import { FormContainer, Label, Input } from '@styles/components/Profile';

export function Profile(): JSX.Element {
  const { level } = useChallenges();
  const inputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('John Doe');
  const [avatar, setAvatar] = useState('pinpng.com-avatar-png-1146730.png');
  const [avatarFeedbackStatus, setAvatarFeedbackStatus] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const userInfoStoraged = JSON.parse(
      localStorage.getItem('@MoveIt:user-info'),
    );

    if (userInfoStoraged) {
      setName(userInfoStoraged?.name);
      setAvatar(userInfoStoraged?.avatar);
    }
  }, []);

  const handleFormSubmit = useCallback(
    async (ev: FormEvent<HTMLFormElement>) => {
      ev.preventDefault();

      try {
        const userSchema = object({
          name: string().required('Nome é obrigatório!'),
        });

        // parse and assert validity
        await userSchema.validate(
          { name },
          {
            strict: true,
            abortEarly: false,
          },
        );

        populateStorage(name, avatar);
      } catch (err) {
        console.error('Displaying Yup validation error: ', err);
      }
    },
    [name, avatar],
  );

  const handleProfileAvatar = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    const selectedImgFile = ev.target?.files[0];

    if (selectedImgFile && selectedImgFile?.type.startsWith('image/')) {
      const fileReader = new FileReader();

      fileReader.onload = ((file: File) => {
        return (e) => {
          const base64 = e.target?.result;

          setAvatar(base64);
          populateStorage(name, base64);
          setAvatarFeedbackStatus('');
        };
      })(selectedImgFile);

      fileReader.readAsDataURL(selectedImgFile);

      return;
    }

    setAvatarFeedbackStatus('Invalid image file type');
  };

  const handleInputFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlurred = useCallback(() => {
    setIsFocused(false);
  }, []);

  const populateStorage = (userName?: string, userAvatar?: string) => {
    const userInfo =
      (userName || userAvatar) &&
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
            capture
            id='avatar'
            type='file'
            accept='image/*'
            multiple={false}
            placeholder='Alterar foto'
            elementSection='userAvatar'
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
        <Label
          elementSection='userName'
          onBlur={handleInputBlurred}
          onFocus={handleInputFocused}
        >
          <div>
            <Input
              required
              type='text'
              value={name}
              ref={inputRef}
              elementSection='userName'
              placeholder='Qual o seu nome?'
              onChange={(ev) => setName(ev.target.value)}
            />
            <span />
          </div>
          <AnimatePresence>
            {isFocused && (
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
