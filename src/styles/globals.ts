import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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

        /* Night/Day theme mode */
        --toggle-size: 10rem;
        --switch-w: 0.4em;
        --switch-h: 0.2em;
        --switch-handle-scale: 0.65;
        --switch-off-handle-x: -0.02em;
        --switch-on-handle-x: calc(100% - 0.02em);
        --switch-transition-duration: 0.4s ease-in-out;
    }

    body {
      height: 100vh;
      color: var(--text);
      background: var(--background);

        button { cursor: pointer; }

        a {
            color: inherit;
            text-decoration: none;
        }

        .modalOverlay {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            background: rgba(242,243,245,0.8);

            .modalContent {
                position: relative;

                width: 100%;
                max-width: 400px;
                padding: 2rem 3rem;
                border-radius: 5px;
                text-align: center;
                background: var(--white);
                box-shadow: 0 0 60px rgba(0,0,0,0.05);
            }
        }
    }

    body, input, textarea, button { font: 400 16px 'Inter', sans-serif; }

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
`;
