import DefaultLayout from "../layout/DefaultLayout";
import { HeroSecABC } from "../layout/HeroSecA";
import { ButterflyCenter, CCenter, MainBGColorStyle, TitleSmall } from "../context/styleTheme";
import { CardBtnSetStyleBlack, IntranceStyle } from "../component/div/Intrance";
import CardBtn from "../component/button/CardBtn";
import News from "../component/div/News";
import Promote from "../component/div/Promote";
import styled from "styled-components";

const VisitHome = styled.div`
    padding-top:100px ;
    background-color: ${props => props.theme.mainBGColor};
    color:${props => props.theme.mainTextColor};
`;

const IntranceBlack = ()=>{
    return(
        <IntranceStyle>
            <TitleSmall>我的圖鑑</TitleSmall>
            <CardBtnSetStyleBlack>
                <CardBtn src="/img/Cups07.jpg" title="查看圖鑑" para="獲得妳的專屬箴言" />
                <CardBtn src="/img/Swords14.jpg" title="創作卡片" para="讓圖文紀錄成長點滴" />
                <CardBtn src="/img/Wands08.jpg" title="分享圖片" para="將結果存成圖片分享" />
            </CardBtnSetStyleBlack>
        </IntranceStyle>
    )
}

const Dashboard = () =>{
    return(
        <DefaultLayout>
            <VisitHome>
                <p style={{textAlign: "center", padding:"20px"}}>歡迎,佳綺!</p>


                <CCenter>
                    <HeroSecABC title="塔羅心圖" para="抽牌、創作、收藏，無數命運之語" btn="進入占卜"/>
                </CCenter>

                <MainBGColorStyle>
                    <News />
                </MainBGColorStyle>

                <Promote />
                
                <ButterflyCenter>
                    <IntranceBlack />
                </ButterflyCenter>

            </VisitHome>
        </DefaultLayout>
    )
}

export default Dashboard;