import React, { createContext, useContext, useState } from 'react';

import { motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import { ChildrenGlobalType } from '@utils/types/GlobalTypes';
import { ContextFormat } from '@utils/types/hooks';

const ThemeModeContext = createContext({} as ContextFormat);

export const ThemeModeProvider = ({
  children,
}: ChildrenGlobalType): JSX.Element => {
  const [theme, setTheme] = useState('dark');

  const styleProps = {
    background:
      theme === 'dark'
        ? 'linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 70%, rgba(59,59,59,1) 100%)'
        : theme === 'light'
        ? 'linear-gradient(180deg, rgba(242,243,245,1) 0%, rgba(242,243,245,1) 70%, rgba(203,203,203,1) 100%)'
        : '',
    boxShadow:
      theme === 'dark'
        ? 'rgb(255 255 255 / 8%)'
        : theme === 'light'
        ? 'rgb(0 0 0 / 8%)'
        : '',
    inputProfileColor:
      theme === 'dark' ? '#ffffff12' : theme === 'light' ? '#ffffff' : '',
    text: theme === 'dark' ? '#f7f7f7' : theme === 'light' ? '#666' : '',
    white: theme === 'dark' ? '#222222' : theme === 'light' ? '#fff' : '',
    grayLine: theme === 'dark' ? '#dcdde0' : theme === 'light' ? '#dcdde0' : '',
    textHighlight:
      theme === 'dark' ? '#b3b9ff' : theme === 'light' ? '#b3b9ff' : '',
    title: theme === 'dark' ? '#ffbe00bf' : theme === 'light' ? '#2e384d' : '',
    buttonTitle:
      theme === 'dark' ? '#dcdde0' : theme === 'light' ? '#2e384d' : '',
    red: theme === 'dark' ? '#e83f5b' : theme === 'light' ? '#e83f5b' : '',
    green: theme === 'dark' ? '#4cd62b' : theme === 'light' ? '#4cd62b' : '',
    blue: theme === 'dark' ? '#f9aa33' : theme === 'light' ? '#5965e0' : '',
    blueDark: theme === 'dark' ? '#dc8b12' : theme === 'light' ? '#4953b8' : '',
    blueTwitter:
      theme === 'dark' ? '#2aa9e0' : theme === 'light' ? '#2aa9e0' : '',
    border: theme === 'dark' ? '#121212' : theme === 'light' ? '#f0f1f3' : '',
    invert:
      theme === 'dark' ? 'invert(1)' : theme === 'light' ? 'invert(0)' : '',
    revert:
      theme === 'dark' ? 'invert(0)' : theme === 'light' ? 'invert(1)' : '',
  };

  const themeMode = {
    dark: styleProps /* Dark mode (Default) */,
    light: styleProps /* Light mode */,
  };

  const handleThemeModeToggle = () => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const changedTheme = () => {
    return theme === 'dark' ? themeMode.dark : themeMode.light;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <ThemeProvider theme={changedTheme}>
        <ThemeModeContext.Provider value={{ theme, handleThemeModeToggle }}>
          {children}
        </ThemeModeContext.Provider>
      </ThemeProvider>
    </motion.div>
  );
};

export const useThemeMode = (): ContextFormat => {
  const context = useContext(ThemeModeContext);

  return context;
};
