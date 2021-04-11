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