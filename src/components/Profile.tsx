import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FiCheckCircle, FiAlertTriangle, FiLoader } from 'react-icons/fi';

import { motion, AnimatePresence } from 'framer-motion';
import { object, string } from 'yup';

import { useChallenges } from '@hooks/useChallenges';

import { FormContainer, Label, Input } from '@styles/components/Profile';

export function Profile(): JSX.Element {
  const { level } = useChallenges();
  const inputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('John Doe');
  const [avatar, setAvatar] = useState('pinpng.com-avatar-png-1146730.png');
  const [feedbackStatus, setFeedbackStatus] = useState('');
  const [feedbackStatusClass, setFeedbackStatusClass] = useState('');
  const [buttonFeedbackStatus, setButtonFeedbackStatus] = useState('');
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

  useEffect(() => {
    const successValidation =
      feedbackStatusClass === 'successName' ||
      feedbackStatusClass === 'successImg';
    const errorValidation =
      feedbackStatusClass === 'errorName' || feedbackStatusClass === 'errorImg';

    if (successValidation) {
      setTimeout(() => setFeedbackStatus(''), 2000);
      setTimeout(() => setFeedbackStatusClass(''), 2500);
      setTimeout(() => setButtonFeedbackStatus(''), 3000);
    } else if (errorValidation) {
      setTimeout(() => setFeedbackStatus(''), 5000);
      setTimeout(() => setFeedbackStatusClass(''), 5500);
      setTimeout(() => setButtonFeedbackStatus(''), 6000);
    }
  }, [buttonFeedbackStatus, feedbackStatusClass]);

  const handleFormSubmit = async (ev: FormEvent<HTMLFormElement>) => {
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

      setFeedbackStatus('');
      setFeedbackStatusClass('successName');
      setButtonFeedbackStatus('successBtn');
      populateStorage(name, avatar);
    } catch (err) {
      setFeedbackStatus(err.message);
      setFeedbackStatusClass('errorName');
      setButtonFeedbackStatus('errorBtn');
      console.error('Displaying Yup validation error: ', err);
    }
  };

  const handleProfileUserAvatar = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    const selectedImgFile = ev.target?.files[0];

    if (selectedImgFile && selectedImgFile?.type.startsWith('image/')) {
      const fileReader = new FileReader();

      fileReader.onload = ((file: File) => {
        return (e) => {
          const base64 = e.target?.result;

          setAvatar(base64);
          populateStorage(name, base64);
          setFeedbackStatus('');
          setFeedbackStatusClass('successImg');
          setButtonFeedbackStatus('successBtn');
        };
      })(selectedImgFile);

      fileReader.readAsDataURL(selectedImgFile);

      return;
    }

    setFeedbackStatusClass('errorImg');
    setButtonFeedbackStatus('errorBtn');
    setFeedbackStatus('Tipo de arquivo inválido!');
  };

  const handleProfileUserName = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    const inputUserName = ev.target?.value;

    if (/^\s/.test(inputUserName)) return false;

    setName(inputUserName);
    setFeedbackStatus('');
    setFeedbackStatusClass('');
    setButtonFeedbackStatus('');
  };

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
        <Label
          htmlFor='avatar'
          elementSection='userAvatar'
          className={feedbackStatusClass && feedbackStatusClass}
          feedbackStatusClass={feedbackStatusClass === 'errorImg'}
        >
          <Input
            capture
            id='avatar'
            type='file'
            accept='image/*'
            multiple={false}
            placeholder='Alterar foto'
            elementSection='userAvatar'
            onChange={handleProfileUserAvatar}
          />
        </Label>
        <AnimatePresence>
          {feedbackStatus && (
            <motion.span
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
            >
              {feedbackStatus}
            </motion.span>
          )}
        </AnimatePresence>
      </section>

      <section>
        <Label
          elementSection='userName'
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          className={feedbackStatusClass && feedbackStatusClass}
          feedbackStatusClass={feedbackStatusClass === 'errorName'}
        >
          <div>
            <Input
              type='text'
              value={name}
              ref={inputRef}
              elementSection='userName'
              placeholder='Qual o seu nome?'
              onChange={handleProfileUserName}
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
                className={buttonFeedbackStatus}
              >
                {buttonFeedbackStatus === 'successBtn' ? (
                  <FiCheckCircle />
                ) : buttonFeedbackStatus === 'errorBtn' ? (
                  <FiAlertTriangle />
                ) : (
                  <FiLoader />
                )}
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
