import { ChildrenGlobalType } from "../GlobalTypes";

// useChallenges
export interface ChallengesProviderProps extends ChildrenGlobalType {
    level: number;
    currentExperience: number;
    challengesComplited: number;
}

export interface ChallengesContextData extends ChallengesProviderProps {
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;
    resetChallenge: () => void;
    startNewChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

export interface Challenge {
    type: 'body' | 'eye';
    title: string;
    description: string;
    amount: number;
}

// useCountDown
export interface CountDownContextData {
    isActive: boolean;
    hasFinished: boolean;
    minutes: number;
    seconds: number;
    startCountDown: () => void;
    resetCountDown: () => void;
}

// // useThemeMode
export interface ContextFormat {
    theme: string;
    handleThemeModeToggle(): void;
}

// useStylesThemeMode
export interface StylesThemeModeProps {
    // themeMode: {
    //     dark: { /* Dark mode (Default) */
    //         [propName: string]: any;
    //     },
    //     light: { /* Light mode */
    //         background?: string;
    //         boxShadow?: string;
    //         inputProfileColor?: string;
    //         text?: string;
    //         white?: string;
    //         grayLine?: string;
    //         textHighlight?: string;
    //         title?: string;
    //         buttonTitle?: string;
    //         red?: string;
    //         green?: string;
    //         blue?: string;
    //         blueDark?: string;
    //         blueTwitter?: string;
    //         border?: string;
    //         invert?: string;
    //         revert?: string;
    //     }
    // }
}