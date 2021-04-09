import { createContext, useContext } from "react";
import { useThemeMode } from "./useThemeMode";
import { ChildrenGlobalType, StylesThemeModeProps } from "../utils/types/hooks";

const StyleThemeModeContext = createContext({} as StylesThemeModeProps);

export const ThemeMode = ({ children }: ChildrenGlobalType) => {
    const { theme } = useThemeMode();

    console.log(theme);

    let tst: StylesThemeModeProps = {
        themeMode: {
            dark: {}, /* Dark mode (Default) */
            light: {} /* Light mode */
        }
    };
    
    const styleProps = {
        // background: theme ? 'blue' : theme ? 'green' : ''
        background: 'red'
    }

    tst = {
        themeMode: {
            dark: styleProps,
            light: styleProps
        }
    }
    
    console.log('Dark:', tst.themeMode.dark);
    console.log('Light:', tst.themeMode.light);

    return (
        <StyleThemeModeContext.Provider value={tst.themeMode}>
            {children}
        </StyleThemeModeContext.Provider>
    );
}

export const useStylesThemeMode = () => {
    const context = useContext(StyleThemeModeContext);

    return context;
}
