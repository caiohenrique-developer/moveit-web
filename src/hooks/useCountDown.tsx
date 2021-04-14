import { createContext, useContext, useEffect, useState } from 'react';
import { useChallenges } from './useChallenges';
import { CountDownContextData } from '@utils/types/hooks';
import { ChildrenGlobalType } from '@utils/types/GlobalTypes';

const CountDownContext = createContext({} as CountDownContextData);

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: ChildrenGlobalType) {
  const { startNewChallenge } = useChallenges();

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 100);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountDownContext.Provider
      value={{
        isActive,
        hasFinished,
        minutes,
        seconds,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}

export const useCountDown = () => {
  const context = useContext(CountDownContext);

  return context;
};
