import { createGlobalStyle } from 'styled-components'

export const themeMode = {
    /* Dark mode (Default) */
    dark: {
        background:'linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 70%, rgba(59,59,59,1) 100%)',
        text:'#f7f7f7',
        white:'#222222',
        grayLine:'#dcdde0',
        textHighlight:'#b3b9ff',
        title:'#ffbe00bf',
        red:'#e83f5b',
        green:'#4cd62b',
        blue:'#f9aa33',
        blueDark:'#4953b8',
        blueTwitter:'#2aa9e0',
        border:'#121212',
    },
    /* Light mode */
    light: {
        background:'#f2f3f5',
        text:'#666',
        white:'#fff',
        grayLine:'#dcdde0',
        textHighlight:'#b3b9ff',
        title:'#2e384d',
        red:'#e83f5b',
        green:'#4cd62b',
        blue:'#5965e0',
        blueDark:'#4953b8',
        blueTwitter:'#2aa9e0',
        border:'#f0f1f3'
    }
}

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
        --text: ${({ theme }) => theme.text};
        --white: ${({ theme }) => theme.white};
        --gray-line: ${({ theme }) => theme.grayLine};
        --text-highlight: ${({ theme }) => theme.textHighlight};
        --title: ${({ theme }) => theme.title};
        --red: ${({ theme }) => theme.red};
        --green: ${({ theme }) => theme.green};
        --blue: ${({ theme }) => theme.blue};
        --blue-dark: ${({ theme }) => theme.dark};
        --blue-twitter: ${({ theme }) => theme.twitter};
        --border: ${({ theme }) => theme.border};
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