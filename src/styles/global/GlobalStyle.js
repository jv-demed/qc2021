import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-image: url(${({ theme }) => theme.backgrounds.home});
        background-size: cover;
        font-family: 'Roboto', sans-serif;
        height: 100vh;
    }

    .rb{
        border: 1px solid red;
    }
    
`

export default GlobalStyle;