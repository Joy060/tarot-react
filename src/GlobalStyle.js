import { createGlobalStyle } from "styled-components";
import 'normalize.css';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${props => props.theme.mainTextColor};
        font-family:'微軟正黑體', 'sans-serif'; 
    }

    a {
       text-decoration: none;
    }
    
    ul, ol {
        list-style: none;
    }

    .input{
        height: 52px;
        width: 60%;
        padding: 0 12px;
        margin: 12px;
        border: none;

        /* color: ${props => props.theme.paraColor}; */
        background-color: ${props => props.theme.opacityBlackColor};
    }

    `;

export default GlobalStyle;