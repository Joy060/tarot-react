import { useState } from "react";
import styled from "styled-components";

import { CardM, TitlePara, TitleSmall } from "../../context/styleTheme";
import { TagCategoryOff, TagCategoryOn } from "../button/TagCategory";
import { BlackDivLayout } from "../../layout/DivLayout";

// 變數資料
const TagData = [
    { id:"major",
        img:"/img/Cups07.jpg" ,
        L1:"大阿爾克那" ,
        L2:"（Major Arcana）" ,
        R1:"大阿爾克那共有 22 張，編號 0-21，" ,
        R2:"代表 人生的重要階段、關鍵課題與靈性旅程。" ,
        R3:"這些牌如「愚者」「戀人」「死神」「世界」等，" ,
        R4:"帶有深遠的象徵意義，影響力較強。" },
    { id:"minor",
        img:"/img/Cups07.jpg" ,
        L1:"小阿爾克那" ,
        L2:"（Minor Arcana）" ,
        R1:"小阿爾克那共有 56 張，似撲克牌的四種花色，代表 日常生活中的細節、行動與情緒，分為四組：" ,
        R2:"聖杯牌（Cups）-水：象徵情感、夢想與直覺，內在世界。" ,
        R3:"權杖牌（Wands）-火：代表創造力、行動與熱情，象徵成長。" ,
        R4:"金幣牌（Pentacles）-土：關聯財富、物質與現實，涵蓋穩定性。" ,
        R5:"寶劍牌（Swords）-風：涉及理性、思考與挑戰，代表決策。"  },
    { id:"court",
        img:"/img/Cups07.jpg" ,
        L1:"宮廷牌" ,
        L2:"（Court Arcana）" ,
        R1:"每個花色中都有 4 張宮廷牌，代表人物、性格類型或某種行動方式：" ,
        R2:"國王牌（King）：成熟、權威、領導能力。" ,
        R3:"皇后牌（Queen）：內在力量、情感智慧、包容性。" ,
        R4:"騎士牌（Knight）：行動、探索、前進的力量。" ,
        R5:"侍者牌（Page）：學習、新機會、初始階段。"  },
    { id:"reverse",
        img:"/img/Cups07.jpg" ,
        L1:"逆位牌" ,
        L2:"（Reversed Cards）" ,
        R1:"當牌倒立出現時，稱為 逆位牌，" ,
        R2:"可能表示延遲、內在影響、" ,
        R3:"負面能量或挑戰，也可能意味著能量的內斂或極端狀態。" ,}
];

// 橫排flex
const BTNdiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid yellow; */
    width: 100%;
    padding: 24px 0;
    `;

const DivL = styled.div`
    width: 30%;
    /* border: 1px solid blue; */
    height: 100%;
    line-height: 32px;
    `;

const DivR = styled.div`
    width: 70%;
    text-align: left;
`;

const ContextBGColor = styled.div`
    background-color: ${props => props.theme.mainBGColor};
    border-radius: ${props => props.theme.radiusS};
    margin: 0 auto;
`;

// 渲染設定
export const CardCategoryTag = ()=>{
    const [activeTab, setActiveTab] = useState("major");

    return(
        <ContextBGColor>
        {/* 上:標籤按鍵區 */}
            {/* 橫排flex  */}
            <BTNdiv>
                {TagData.map((tab)=>
                    activeTab === tab.id ?(
                        <TagCategoryOn key={tab.id} onClick={()=> setActiveTab(tab.id)}>
                            {tab.L1}
                        </TagCategoryOn>
                    ):(
                        <TagCategoryOff key={tab.id} onClick={()=> setActiveTab(tab.id)}>
                            {tab.L1}
                        </TagCategoryOff>
                    )
                )}
            </BTNdiv>

            {/* 下:圖+內文區 */}
            {/* 橫排flex */}
            {TagData.map(
                (tab)=>
                activeTab === tab.id &&(
                    <BTNdiv>
                        {/* 橫排左 */}
                        <DivL>
                            <CardM src={tab.img} />
                            <TitleSmall>{tab.L1}</TitleSmall>
                            <TitleSmall>{tab.L2}</TitleSmall>
                        </DivL>

                        {/* 橫排右 */}
                        <DivR>
                            <TitlePara>{tab.R1}</TitlePara>
                            <TitlePara>{tab.R2}</TitlePara>
                            <TitlePara>{tab.R3}</TitlePara>
                            <TitlePara>{tab.R4}</TitlePara>
                            <TitlePara>{tab.R5}</TitlePara>
                        </DivR>
                    </BTNdiv>
                )
            )}
        </ContextBGColor>
    );

};

// 輸出
const CardCategory = () =>{
    return(
        <BlackDivLayout title={"塔羅牌的種類"}>

            {/* 直排上 */}
            <TitlePara>塔羅牌共 78 張，主要分為大阿爾克那（Major Arcana） 
                和 小阿爾克那（Minor Arcana） 兩大類。</TitlePara>

            {/* 直排下 */}
            <CardCategoryTag />
        </BlackDivLayout>
    )
}

export default CardCategory;