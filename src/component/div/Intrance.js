import styled from "styled-components";

import CardBtn from "../button/CardBtn";
import { TitlePara } from "../../context/styleTheme";

// btn組 樣式
export const CardBtnSetStyle = styled.div`
    display: flex;
    margin: 24px auto;
`;

// btn組 黑底樣式
export const CardBtnSetStyleBlack = styled(CardBtnSetStyle)`
    background-color: ${props => props.theme.opacityBlackColor};
    border-radius: ${props => props.theme.radiusS};
`;

// div樣式
export const IntranceStyle = styled.div`
    text-align: center;
    padding: 120px 40px;
    /* border: 1px solid yellow; */

`;

const Intrance = ()=>{

    const publicUrl = process.env.PUBLIC_URL;

    return(
        <IntranceStyle>
            <TitlePara>你對今日有何看法?你可以</TitlePara>
            <CardBtnSetStyle>
                <CardBtn src={`${publicUrl}/img/Cups07.jpg`} title="開始占卜" para="獲得妳的專屬箴言" />
                <CardBtn src={`${publicUrl}/img/Swords14.jpg`} title="創作專屬卡牌" para="讓卡牌紀錄心路歷程" />
                <CardBtn src={`${publicUrl}/img/Wands08.jpg`} title="分享圖片" para="將結果存成圖片分享" />
            </CardBtnSetStyle>
        </IntranceStyle>
    )
}

export default Intrance;