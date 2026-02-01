import { Link } from "react-router-dom";
import styled from "styled-components";

import { TitlePara } from "../../context/styleTheme";

import { ShinyWord } from "../button/hoverBtn/shinyWord";
import ButtonCTA from "../button/hoverBtn/BtnCTA";


const CC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AttentionStyle =styled.div`
    border-radius:${props => props.theme.radiusS};; 
    /* background-color:${props => props.theme.opacityWhiteColor} ; */
    /* text-align: center; */
    line-height: 40px;
    height: 40px;
    overflow: hidden;
    position: static;
    box-sizing: border-box;
`;

export const PickUpDiv = () =>{

    return(
        <div>
            <ButtonCTA>
                <Link to="/Pick1B" style={{color:"black", textDecoration:"none"}}>
                    本日占卜
                </Link>               
            </ButtonCTA>

            <ButtonCTA>
                <Link to="/Pick1A" style={{color:"black", textDecoration:"none"}}>
                    問題占卜
                </Link>               
            </ButtonCTA>

            <br/>

            <CC>
                <AttentionStyle>
                    <TitlePara>結果並非注定的命 是可以改變的運</TitlePara>
                    <TitlePara>只回答人生問題，不回答投機問題  ( 如彩券中獎或天氣好壞)</TitlePara>
                    <TitlePara>一個問題原則上只能算一次</TitlePara>
                    <TitlePara>如果在安靜的環境下占卜,結果會更準確</TitlePara>
                    <TitlePara>誠實面對自己遇到的問題</TitlePara>
                </AttentionStyle>
            </CC>
       
        </div>
    );
};
