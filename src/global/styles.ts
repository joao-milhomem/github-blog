import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.DARK_2};
        color: ${(props) => props.theme.LIGHT_3};
    }

    a{
        text-decoration: none;
    }

    body,input,button {
        font-family: "Nunito", sans-serif;
    }

    button, input {
        background: none;
        border: none;
    }
    
`
