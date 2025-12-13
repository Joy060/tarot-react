import DefaultLayout from "../layout/DefaultLayout";
import { ButterflyCenter, CardL, CCenter, FooterColorStyle, MainBGColorStyle, TitleSmall } from "../context/styleTheme";
import { HeroSecBAbout } from "../layout/HeroSecB";
import { DivPara, HeroSecABC } from "../layout/HeroSecA";
import { CardBtnSetStyle, IntranceStyle } from "../component/div/Intrance";
import CardBtn from "../component/button/CardBtn";
import DivLayout from "../layout/DivLayout";
import styled from "styled-components";

const Intrance = ()=>{
    return(
        <IntranceStyle>
            <TitleSmall>UIUX設計摘要</TitleSmall>
            <CardBtnSetStyle>
                <CardBtn src="/img/Cups07.jpg" title="使用者故事" />
                <CardBtn src="/img/Swords14.jpg" title="色票設定" />
                <CardBtn src="/img/Wands08.jpg" title="功能清單" />
            </CardBtnSetStyle>
        </IntranceStyle>
    )
}

const Flex = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

`;

const DivRight = styled.div`
    width: 50%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 0;
    `;
const DivLeft = styled(DivRight)`
    width: 20%;
    rotate: -4deg;
    `;

const ImgShadow = styled.div`
    box-shadow: 0px 0px 25px  ${props => props.theme.mainTextColor};
    height: 100%
    ;
`;

const About = () =>{
    return(
        <DefaultLayout>
            <MainBGColorStyle>
                <CCenter>
                    <HeroSecBAbout />
                </CCenter>

                <DivPara title="網站理念" 
                    para1="我曾經迷失自己，因為接觸塔羅讓我重拾人生希望。 "
                    para2="希望提供一個有質感的平台，供人在沉浸式環境內，
                            享受塔羅牌占卜的樂趣、療癒與指引方向；"
                    para3="並期望每次的占卜結果，
                            可以進一步透過製作、分享圖片的方式，
                            成為自己或他人生活中的助力。"/>
                
                <DivPara title="網站對象" 
                    para1="沒學過，但對塔羅牌有興趣了解的人。"
                    para2="想看今日運勢的人。"
                    para3="遇到各種人生問題，迷失方向，需要他人建議的人。"/>

                <FooterColorStyle>
                    <DivLayout title="作者介紹">
                        <Flex>
                            <DivLeft>
                                <ImgShadow>
                                    <CardL src="/img/Cups07.jpg" />
                                </ImgShadow>
                            </DivLeft>

                            <DivRight>
                                <DivPara title="JOWA(29)" 
                                para1="從6年公職職涯跳槽 - 新銳UIUX網頁程式設計師"
                                para2="資歷 : 2年(從2024年開始)"
                                para3="專長 : 前端程式、平面動畫、UIUX設計"/>
                            </DivRight>
                        </Flex>

                    </DivLayout>
                </FooterColorStyle>


                <Intrance />

            </MainBGColorStyle>

            <ButterflyCenter>
                <HeroSecABC title="投資作者" para="因為有你的支持，好的作品將與你見面 " btn="我要贊助"/>
            </ButterflyCenter>


        </DefaultLayout>
    )
}

export default About;