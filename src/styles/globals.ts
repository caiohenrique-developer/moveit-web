import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    /* Colors */
    :root {
        --white:#fff;
        --background:#f2f3f5;
        --gray-line:#dcdde0;
        --text:#666;
        --text-highlight:#b3b9ff;
        --title:#2e384d;
        --red:#e83f5b;
        --green:#4cd62b;
        --blue:#5965e0;
        --blue-dark:#4953b8;
        --blue-twitter:#2aa9e0;
    }

    body {
        background: var(--background);
        color: var(--text);
    }

    body, input, textarea, button {
        font: 400 16px 'Inter', sans-serif;
    }

    button { cursor: pointer; }

    a {
        color: inherit;
        text-decoration: none;
    }

    /* Responsive */
    @media(max-width: 1080px) { html { font-size: 93.75%; } }

    @media(max-width: 720px) { html { font-size: 87.5%; } }
    
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        body {  }
    }
    
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) and (max-width: 991px) {
        body {  }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    // @media only screen and (min-width: 768px) {}

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        body {  }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        body {  }
    }
`