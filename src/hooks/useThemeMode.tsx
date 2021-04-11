import { createContext, useContext, useState } from "react";
import { useStylesThemeMode } from "./useStylesThemeMode";
import { ContextFormat } from '../utils/types/hooks';
import { ChildrenGlobalType } from "../utils/types/GlobalTypes";
import { ThemeProvider } from 'styled-components';

const ThemeModeContext = createContext({} as ContextFormat);

export const ThemeModeProvider = ({ children }: ChildrenGlobalType) => {
    // const { styleProps } = useStylesThemeMode();

    const [theme, setTheme] = useState('dark');

    let actualTheme = {
        themeMode: {
            dark: {}, /* Dark mode (Default) */
            light: {} /* Light mode */
        }
    };

    const styleProps = {
        background:
            theme === 'dark'
            ? 'linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 70%, rgba(59,59,59,1) 100%)'
            : theme === 'light'
            ? 'linear-gradient(180deg, rgba(242,243,245,1) 0%, rgba(242,243,245,1) 70%, rgba(203,203,203,1) 100%)'
            : '',
        boxShadow: theme === 'dark' ? 'rgb(255 255 255 / 18%)' : theme === 'light' ? 'rgb(0 0 0 / 8%)' : '',
        inputProfileColor: theme === 'dark' ? '#ffffff2e' : theme === 'light' ? '#ffffff2b' : '',
        text: theme === 'dark' ? '#f7f7f7' : theme === 'light' ? '#666' : '',
        white: theme === 'dark' ? '#222222' : theme === 'light' ? '#fff' : '',
        grayLine: theme === 'dark' ? '#dcdde0' : theme === 'light' ? '#dcdde0' : '',
        textHighlight: theme === 'dark' ? '#b3b9ff' : theme === 'light' ? '#b3b9ff' : '',
        title: theme === 'dark' ? '#ffbe00bf' : theme === 'light' ? '#2e384d' : '',
        buttonTitle: theme === 'dark' ? '#dcdde0' : theme === 'light' ? '#2e384d' : '',
        red: theme === 'dark' ? '#e83f5b' : theme === 'light' ? '#e83f5b' : '',
        green: theme === 'dark' ? '#4cd62b' : theme === 'light' ? '#4cd62b' : '',
        blue: theme === 'dark' ? '#f9aa33' : theme === 'light' ? '#5965e0' : '',
        blueDark: theme === 'dark' ? '#dc8b12' : theme === 'light' ? '#4953b8' : '',
        blueTwitter: theme === 'dark' ? '#2aa9e0' : theme === 'light' ? '#2aa9e0' : '',
        border: theme === 'dark' ? '#121212' : theme === 'light' ? '#f0f1f3' : '',
        invert: theme === 'dark' ? 'invert(1)' : theme === 'light' ? 'invert(0)' : '',
        revert: theme === 'dark' ? 'invert(0)' : theme === 'light' ? 'invert(1)' : ''
    }

    actualTheme.themeMode = {
        dark: styleProps,
        light: styleProps
    }
    
    const handleThemeModeToggle = () => { theme === 'dark' ? setTheme('light') : setTheme('dark'); }

    return (
        <ThemeModeContext.Provider value={{ theme, handleThemeModeToggle }}>
            <ThemeProvider theme={ theme === 'dark' ? actualTheme.themeMode.dark : actualTheme.themeMode.light }>
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )
}

export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);

    return context;
}