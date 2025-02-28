import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
html{
    font-size:62.5%;
}
body{
    font-family: 'Cabin', sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
    background: white;
    color: #063D61;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}



html, body,
#root {
    height: 100%;
}

html{
    scroll-behavior: smooth;
    @media (prefers-reduced-motion: reduce) {
        scroll-behavior:auto;
    }
}`;

export default GlobalStyles;