import { createContext, useContext, useState } from "react";
import { ContextFormat, ChildrenGlobalType } from '../utils/types/hooks';
import { useStylesThemeMode } from "./useStylesThemeMode";
import { ThemeProvider } from 'styled-components';

const ThemeModeContext = createContext({} as ContextFormat);

export const ThemeModeProvider = ({ children }: ChildrenGlobalType) => {
    const { themeMode } = useStylesThemeMode();

    const [theme, setTheme] = useState('dark');

    const handleThemeModeToggle = () => { theme === 'dark' ? setTheme('light') : setTheme('dark'); }

    return (
        <ThemeModeContext.Provider value={{ theme, handleThemeModeToggle }}>
            <ThemeProvider theme={ theme === 'dark' ? themeMode.dark : themeMode.light }>
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )
}

export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);

    return context;
}