import React from 'react';

import { useThemeMode } from '@hooks/useThemeMode';

export const ThemeButton = (): JSX.Element => {
  const { handleThemeModeToggle } = useThemeMode();

  return (
    <button type='button' onClick={handleThemeModeToggle}>
      <i className='material-icons'>brightness_4</i>
      <i className='material-icons'>brightness_5</i>
      <i className='material-icons'>brightness_7</i>
    </button>
  );
};
