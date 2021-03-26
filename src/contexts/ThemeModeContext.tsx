import { createContext, ReactNode, useState } from "react";

interface ThemeModeContextData {
    toggleThemeMode?: () => void;
    theme: string;
}

interface ThemeModeProviderProps { children: ReactNode; }

export const ThemeModeContext = createContext<ThemeModeContextData>({} as ThemeModeContextData);

export function ToggleThemeModeProvider({ children }: ThemeModeProviderProps) {
    const [theme, SetTheme] = useState('');
    
    // function toggleThemeMode() { !theme ? SetTheme('lightMode') : SetTheme(''); }
    function toggleThemeMode() { SetTheme('lightMode') }
    
    return (
        <ThemeModeContext.Provider value={{ toggleThemeMode, theme }}>
            {children}
        </ThemeModeContext.Provider>
    )
}