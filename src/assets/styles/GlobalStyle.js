import { createGlobalStyle } from 'styled-components';
// import 'typeface-lato';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
    }
    html {
        height: 100%;
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    body {
        height: 100%;
        /* font-family: 'Lato', sans-serif; */
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        overflow-x: hidden;
    }
    body::-webkit-scrollbar {
        background-color: hsla(0,0%,52%, 1);
        width: 1rem;
    }
    body::-webkit-scrollbar-track {
        width: 1rem;
        background-color: hsla(0, 0%, 89%,1);
    }
    body::-webkit-scrollbar-thumb {
        background-color: hsla(0,0%,52%, 1);
        width: 1rem;
        height: 4rem;
        border-radius: 5px;
    }
`;

export default GlobalStyle;
