import { createContext, ReactNode, useState } from "react";
import { themeMode } from '../styles/globals';
import { ThemeProvider } from 'styled-components';

interface ChildrenProps { children: ReactNode }

interface ContextFormat {
    theme: string;
    handleThemeModeToggle(): void;
}

export const ThemeModeContext = createContext({} as ContextFormat);

export const ThemeModeProvider = ({ children }: ChildrenProps) => {
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