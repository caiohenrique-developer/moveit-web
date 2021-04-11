import styled, { css } from 'styled-components';
import { ButtonProps } from "../../utils/types/components";

export const Container = styled.div`
    > div {
        display: flex;
        align-items: center;

        font-family: Rajdhani;
        font-weight: 600;
        color: var(--title);

        > div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            background: var(--white);
            box-shadow: 0 0 60px rgba(0,0,0,0.05);
            border-radius: 5px;
            font-size: 8.5rem;
            text-align: center;

            span {
                flex: 1;

                &:first-child { border-right: 1px solid var(--border); }
                &:last-child { border-left: 1px solid var(--border); }
            }
        }
        > span {
            font-size: 6.25rem;
            margin: 0 0.5rem;
        }
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        > div > span,
        > div > div { font-size: 5.5rem; }
    }
`

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    border: 0;
    border-radius: 5px;
    background: ${ ({ active }) => active ? css`var(--white)` : css`var(--blue)` };
    color: ${ ({ active }) => active ? css`var(--buttonTitle)` : css`var(--white)` };
    font-size: 1.25rem;
    font-weight: 600;
    transition: 0.2s;

    img { margin: 0 5px; }
    
    &:not(:disabled) {
        img { filter: var(--invert); }

        &:hover { background: var(--blueDark); }
    }
    &:disabled {
        color: var(--text);
        cursor: not-allowed;
        background: var(--white);
        border-bottom: 4px solid var(--green);

        img { margin: 0 8px; }
    }
    ${ ({ active }) => active && css`
        img { margin: 0 8px; }

        &:not(:disabled):hover {
            background: var(--red);
            color: var(--white);
        }
        &:not(:hover) {
            > img { filter: var(--revert); }
        }
    `};
`