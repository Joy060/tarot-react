import styled from "styled-components";
import { NAvbar } from "./Navbar";
import { TitlePara } from "../context/styleTheme";
import { ShinyWord } from "./button/hoverBtn/shinyWord";

// 小塊直式排版
// const FlexDirection = styled.div`
//     display: flex;
//     margin: 10px;
//     flex-direction: row;
//     color:  ${props => props.theme.paraColor};
//     `;

// 大塊上半部橫式排版
    const Flex = styled.div`
        width: 80%;
        margin: 0 auto;
        text-align: center;
        justify-content: space-between;
        `;

// 大塊底色、置中
const Div4 = styled.div`
    background-color: ${props => props.theme.footerColor};
    color:#F6F3F6;
    text-align: center;
    line-height: 50px;
    padding: 32px 0;
    `;


const Footer = () =>{

    return(
        <Div4>
            <Flex>
                <NAvbar /> 
                <div>
                    <ShinyWord>[ 隱私條款 ]</ShinyWord>
                </div>
                <ShinyWord>[ 聯繫方式 ]</ShinyWord>
                <div>
                    <ShinyWord>fooeee778@gmail.com</ShinyWord>
                </div>
                  
            </Flex>
            <TitlePara>2025 - copyright @ TarotPIC</TitlePara>
        </Div4>
    )}

export default Footer;