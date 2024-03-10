import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 8 2px ${(props) => props.theme.p3};
    }

    body{
        background: ${(props) => props.theme.g10};
        color: ${(props) => props.theme.g3};
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
