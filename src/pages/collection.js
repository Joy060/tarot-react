import { useRef,useEffect } from "react";
import styled from "styled-components";

import "aos/dist/aos.css";

import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


import cardData from "../context/cards.json"

import { TitleBig, TitlePara,CCenter, CardS } from "../context/styleTheme";
import DefaultLayout from "../layout/DefaultLayout";
import BtnTOP from "../component/button/hoverBtn/BtnTOP";
// 引入套件工具、動畫工具、json資料、樣式管理


// 區塊樣式

const HeroStyle = styled.div`
    text-align: center;
    width: 100%;
    margin-top:100px ;
    line-height: ${props => props.theme.paddingL};
    padding: ${props => props.theme.paddingXL} 0;
    `;

const SearchDiv = styled.input`
    background-color: ${props => props.theme.opacityBlackColor};
    border:1px solid black;
    width: 80%;
    padding: 12px;
    height: 30px;
`;

const AllCardsDiv = styled.div`
    background-color: black;
    color: white;
    /* border: 1px solid white; */
    text-align: center;
    padding: 40px 00 100px 0;
`;


// 各卡區 動畫效果
// 1. 最外層的網格容器（一排三張的核心）
const CardContainer = styled.div`
  display: grid;
  /* 劃分成等寬的 3 欄 */
  grid-template-columns: repeat(7, 1fr); 
  
  /* ✨ 核心置中語法：限制最大寬度，並讓左右 margin 自動平分 */
  max-width: 1200px; 
  margin: 0 auto;
  margin-bottom: 40px ;
  gap: 12px;
  padding: 20px;
  width: 60%;
  box-sizing: border-box;

  /* 📱 響應式：當螢幕小於 768px（手機板）時，自動變回一排一張，避免擠壓 */
  @media (max-width: 768px) {
      width: 60%;
    grid-template-columns: repeat(3, 1fr); /* ✨ 關鍵：改成兩欄 */
    gap: 10px;    /* 縮小卡片之間的間距，留更多空間給圖片 */
    padding: 10px; /* 縮小兩側留白 */
  }
`;

// 2. 單張卡牌外框
const CardItem = styled.div`
  background-color: #1a1a1a; /* 搭配你網頁的暗黑色調 */
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* 滑鼠懸浮時的卡牌微浮動視覺效果 */
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
  }
`;

// 3. 圖片外殼：鎖定塔羅牌的黃金長方比例
const CardImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3.5; /* 固定長寬比，確保所有卡牌高度一致不破版 */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 確保圖片完美填滿不變形 */
  }
`;

// 4. 卡牌文字區塊
const CardInfo = styled.div`
  padding: 12px;
  text-align: center;
  color: #ffffff;

  h4 {
    margin: 0 0 4px 0;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  span {
    font-size: 0.8rem;
    color: #888888;
  }
`;

// 進場動畫
const HeroSec = ({title,para})=>{
    const containerRef = useRef(null);
    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const tl = gsap.timeline({
              scrollTrigger:{
                trigger: containerRef.current,
                start: "top 60%",
                // markers: true,
              },
            });  

            tl.from(".titleXL",{opacity:0,y:-300,duration:0.8})
              .from(".titlePara",{y:50,opacity:0,duration:0.8},"+=0.2")
        },containerRef);

        return () => ctx.revert();
  },[]);


    return(
        <HeroStyle ref={containerRef}>  
            <TitleBig className="titleXL">{title}</TitleBig>
            <TitlePara className="titlePara">{para}</TitlePara>
            <SearchDiv placeholder="請輸入關鍵字"></SearchDiv>
        </HeroStyle>
    )
};


// page最後輸出 
  const Collection = () => {
    const publicUrl = process.env.PUBLIC_URL;

    return (
      <DefaultLayout>
      <CCenter>
         <HeroSec title="塔羅圖鑑" para="認識獨一無二的專屬卡牌" />
      </CCenter>
      <BtnTOP />

      <AllCardsDiv>
          <div>
              <h3>大阿爾克那</h3>
                  <CardContainer className="card-list">
                          {cardData
                            .filter(card => card.id && card.id.includes('big'))
                            .map(card => (
                              <CardItem key={card.id}>
                                      <CardImgWrapper>
                                        <CardS src={`${publicUrl}${card.img}`} alt={card.title} />

                                      </CardImgWrapper>

                                      <CardInfo>
                                        <h4>{card.title}</h4>
                                      </CardInfo>
                                    </CardItem>
                            ))}
                        </CardContainer>
              <h3>小阿爾克那</h3>
              <h5>權杖系列</h5>
                    <CardContainer className="card-list">
                          {cardData
                            .filter(card => card.id && card.id.includes('wa'))
                            .map(card => (
                              <CardItem key={card.id}>
                                      <CardImgWrapper>
                                        <CardS src={`${publicUrl}${card.img}`} alt={card.title} />

                                      </CardImgWrapper>

                                      <CardInfo>
                                        <h4>{card.title}</h4>
                                      </CardInfo>
                                    </CardItem>
                            ))}
                        </CardContainer>
              <h5>寶劍系列</h5>
                    <CardContainer className="card-list">
                          {cardData
                            .filter(card => card.id && card.id.includes('sw'))
                            .map(card => (
                              <CardItem key={card.id}>
                                      <CardImgWrapper>
                                        <CardS src={`${publicUrl}${card.img}`} alt={card.title} />

                                      </CardImgWrapper>

                                      <CardInfo>
                                        <h4>{card.title}</h4>
                                      </CardInfo>
                                    </CardItem>
                            ))}
                        </CardContainer>
              <h5>聖杯系列</h5>
                    <CardContainer className="card-list">
                          {cardData
                            .filter(card => card.id && card.id.includes('cu'))
                            .map(card => (
                              <CardItem key={card.id}>
                                      <CardImgWrapper>
                                        <CardS src={`${publicUrl}${card.img}`} alt={card.title} />

                                      </CardImgWrapper>

                                      <CardInfo>
                                        <h4>{card.title}</h4>
                                      </CardInfo>
                                    </CardItem>
                            ))}
                        </CardContainer>
              <h5>金幣系列</h5>
                    <CardContainer className="card-list">
                          {cardData
                            .filter(card => card.id && card.id.includes('pe'))
                            .map(card => (
                              <CardItem key={card.id}>
                                      <CardImgWrapper>
                                        <CardS src={`${publicUrl}${card.img}`} alt={card.title} />

                                      </CardImgWrapper>

                                      <CardInfo>
                                        <h4>{card.title}</h4>
                                      </CardInfo>
                                    </CardItem>
                            ))}
                        </CardContainer>

          </div>
      </AllCardsDiv>
    </DefaultLayout>
  );
};

export default Collection
