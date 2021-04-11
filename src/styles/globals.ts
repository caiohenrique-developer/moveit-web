import { createGlobalStyle } from 'styled-components';
import { StylesThemeProps } from "../utils/types/styles/GlobalStylesTypes";

export default createGlobalStyle<StylesThemeProps>`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        outline: none;
    }

    /* Root variables */
    :root {
        --background: ${({ theme }) => theme.background};
        --boxShadow: ${({ theme }) => theme.boxShadow};
        --inputProfileColor: ${({ theme }) => theme.inputProfileColor};
        --text: ${({ theme }) => theme.text};
        --white: ${({ theme }) => theme.white};
        --grayLine: ${({ theme }) => theme.grayLine};
        --textHighlight: ${({ theme }) => theme.textHighlight};
        --title: ${({ theme }) => theme.title};
        --buttonTitle: ${({ theme }) => theme.buttonTitle};
        --red: ${({ theme }) => theme.red};
        --green: ${({ theme }) => theme.green};
        --blue: ${({ theme }) => theme.blue};
        --blueDark: ${({ theme }) => theme.blueDark};
        --blueTwitter: ${({ theme }) => theme.blueTwitter};
        --border: ${({ theme }) => theme.border};
        --invert: ${({ theme }) => theme.invert};
        --revert: ${({ theme }) => theme.revert};
    }

    body {
        background: var(--background);
        color: var(--text);
    }

    body, input, textarea, button { font: 400 16px 'Inter', sans-serif; }

    button { cursor: pointer; }

    a {
        color: inherit;
        text-decoration: none;
    }

    /* Responsive */
    @media(max-width: 1080px) { html { font-size: 93.75%; } }

    @media(max-width: 720px) { html { font-size: 87.5%; } }
    
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) { body {} }
    
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) and (max-width: 991px) { body {} }

    /* Medium devices (landscape tablets, 768px and up) */
    // @media only screen and (min-width: 768px) {}

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) { body {} }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) { body {} }
`