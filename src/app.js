import Router from "./router/Router";
import GlobalStyle from "./GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
// 樣式Data
import theme from "./context/styleTheme";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Bg = styled.div`
    background-color: ${props => props.theme.backgroundColor};
    
`;

const App = () =>{
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Bg>
                <Router />
            </Bg>
        </ThemeProvider>
    );
};

export default App;