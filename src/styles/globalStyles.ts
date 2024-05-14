import {createGlobalStyle} from "styled-components";
import {baseStyles} from "./baseStyles.ts";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        text-decoration: none;
    }
    
    *, *:before, *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    

    body {
        min-width: 320px;
        min-height: 100vh;
    }

    a {
        color: inherit;
    }

    li {
        list-style: none;
    }

    a:focus, a:active {
        outline: none;
    }

    nav, footer, header, aside {
        display: block;
    }

    html, body {
        line-height: 1;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }

    input, button, textarea {
        font-family: inherit;
    }

    input::-ms-clear {
        display: none;
    }

    button {
        cursor: pointer;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    a, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    img {
        vertical-align: top;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    :root {
        color-scheme: light dark;
        font-size: 16px;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        color: ${baseStyles.colors.textBlack};
        background-color: ${baseStyles.colors.bgWhite};
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`