import styled from "styled-components";
import { CardM, CardS, TitlePara, TitleSmall } from "../../context/styleTheme";
import ButtonCTA from "./hoverBtn/BtnCTA";
import { Link } from "react-router-dom";

// 單一BTN長寬
const CardBtnStyle = styled.div`
    width: 300px;
    height: 320px;
    /* border: 1px solid blue; */
    text-align: center;
    margin: 0 auto;
    `;

// 單一BTN內容CC置中
const Center =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;  /* 讓 div 高度撐滿整個視窗 */
    `;

// 單一BTN自定義內容元件
const CardBtn = ({src,title,para}) =>{
    return(
        <CardBtnStyle>
            <Center>
                <div>
                    <CardS src={src} />
                    <TitleSmall>{title}</TitleSmall>
                    <TitlePara>{para}</TitlePara>
                </div>
            </Center>
        </CardBtnStyle>
    )

};

// 單一BTN自定義入口元件
export const CardEntranceBtn = ({src,link,btn}) =>{
    return(
        <CardBtnStyle>
            <Center>
                <CardM src={src} />
            </Center>
            
            <ButtonCTA>
                <Link to={link} style={{color:"black", textDecoration:"none"}}>
                 {btn}
                </Link>               
            </ButtonCTA>
        </CardBtnStyle>
    )

};

export default CardBtn;

