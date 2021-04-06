import { useThemeMode } from '../hooks/useThemeMode';

import styles from "../styles/pages/Home.module.css";

export const ThemeButton = () => {
  const { handleThemeModeToggle } = useThemeMode();

  return (
        <button
          type="button"
          className={styles.darkModeBTN}
          onClick={handleThemeModeToggle}
        >
          <i className="material-icons">brightness_4</i>
          <i className="material-icons">brightness_5</i>
          <i className="material-icons">brightness_7</i>
        </button>
    )
}