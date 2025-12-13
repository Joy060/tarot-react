import styled from "styled-components";
import { TitlePara, TitleSmall } from "../../context/styleTheme";

const CC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AttentionStyle =styled.div`
    border-radius:${props => props.theme.radiusS};; 
    background-color:${props => props.theme.opacityBlackColor} ;
    text-align: center;
    line-height: 40px;
    padding: 20px 8px;
    position: static;
    right: 20%;
    top: 20%;
    box-sizing: border-box;
`;

export const Attention = ({title,para,para2,para3,para4})=>{
    return(
        <CC>
            <AttentionStyle>
                <TitleSmall>{title}</TitleSmall>
                <TitlePara>{para}</TitlePara>
                <TitlePara>{para2}</TitlePara>
                <TitlePara>{para3}</TitlePara>
                <TitlePara>{para4}</TitlePara>
            </AttentionStyle>
        </CC>

    );
}
