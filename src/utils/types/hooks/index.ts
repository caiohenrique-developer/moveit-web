import { ReactNode } from "react";

// Global Children type
export interface ChildrenGlobalType { children?: ReactNode; }

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

// StyleThemeMode
export interface StylesThemeModeProps {
    /* Dark mode (Default) */
    themeMode?: {
        dark?: {
            // background?: string;
            // [propName: string]: any;
        },
        /* Light mode */
        light?: {
            background?: string;
            boxShadow?: string;
            inputProfileColor?: string;
            text?: string;
            white?: string;
            grayLine?: string;
            textHighlight?: string;
            title?: string;
            buttonTitle?: string;
            red?: string;
            green?: string;
            blue?: string;
            blueDark?: string;
            blueTwitter?: string;
            border?: string;
            invert?: string;
            revert?: string;
        }
    }
}