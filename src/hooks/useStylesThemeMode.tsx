import { createContext, useContext } from "react";
import { useThemeMode } from "./useThemeMode";
import { StylesThemeModeProps } from "../utils/types/hooks";
import { ChildrenGlobalType } from "../utils/types/GlobalTypes";

const StyleThemeModeContext = createContext({} as StylesThemeModeProps);

export const StylesThemeModeProvider = ({ children }: ChildrenGlobalType) => {
    const { theme } = useThemeMode();

    // const getThemeStyles = (): StylesThemeModeProps => {
        const styleProps = {
            background: theme === 'dark' ? 'blue' : theme === 'light' ? 'green' : '',
            title: theme === 'dark' ? 'red' : theme === 'light' ? 'yellow' : '',
        }

        // return styleProps;
    // }
    
    return (
        <StyleThemeModeContext.Provider value={{ styleProps }}>
            {children}
        </StyleThemeModeContext.Provider>
    );
}

export const useStylesThemeMode = () => {
    const context = useContext(StyleThemeModeContext);

    return context;
}
