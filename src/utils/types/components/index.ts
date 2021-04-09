import { ReactNode } from "react";

// Global Children type
export interface ChildrenGlobalType { children?: ReactNode; }

// CountDown
export interface ButtonProps { active?: boolean; }

// ChallengeBox
export interface ChallengeButtonProps { status: string; }

// Profile
export interface ProfileFormProps { elementSection: string; }