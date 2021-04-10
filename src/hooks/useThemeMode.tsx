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
        background: theme === 'dark' ? 'blue' : theme === 'light' ? 'green' : '',
        title: theme === 'dark' ? 'red' : theme === 'light' ? 'yellow' : '',
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