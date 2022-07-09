import React, { useState } from 'react';

import { useThemeMode } from '@hooks/useThemeMode';

import { Container } from '@styles/components/ButtonTheme';

export function ThemeButton(): JSX.Element {
  const { handleThemeModeToggle } = useThemeMode();

  const [themeToggle, setThemeToggle] = useState(false);

  const handleThemeModeToggleBtn = () => {
    setThemeToggle(!themeToggle);
    handleThemeModeToggle();
  };

  return (
    <Container type='button' onClick={handleThemeModeToggleBtn}>
      <input
        type='checkbox'
        id='theme-toggle'
        checked={themeToggle}
        onChange={handleThemeModeToggleBtn}
      />
      <label htmlFor='theme-toggle'>
        <span className='checkmark' />
      </label>
    </Container>
  );
}
