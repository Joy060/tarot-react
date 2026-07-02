import { useRef,useEffect, useState } from "react";
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
  margin-top: 20px ;
  gap: 12px;
  padding: 20px;
  width: 60%;
  box-sizing: border-box;
  /* border: 1px solid yellow; */

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


// const CCardItem = styled.div`
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   padding: 10px;
//   cursor: pointer;
//   background: #fff;
//   transition: transform 0.2s;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 5px 15px rgba(0,0,0,0.1);
//   }

//   img {
//     width: 100%;
//     border-radius: 4px;
//   }
// `;



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
        </HeroStyle>
    )
};

// --- 搜尋結果的Styled Components ---
const SearchContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  /* border:1px solid yellow; */
  width: 80%;
  `;

const SearchInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.opacityBlackColor};
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${props => props.theme.pointColor};
  }
`;

const SearchResult = styled.div`
  margin: 40px;
`;



// --- 單張牌彈跳視窗Styled-components
const AppContainer = styled.div`
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 20px auto;
`;



/* 彈窗背後的遮罩 (Overlay) */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* 半透明黑背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

/* 彈窗視窗主體 (Content) */
const ModalContent = styled.div`
  background: ${props => props.theme.footerColor};
  padding: 30px;
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadowS};
  position: relative;
  max-width: 500px;
  width: 90%;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;

const ModalBody = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  img {
    width: 150px;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ModalInfo = styled.div`
  flex: 1;
  h2 {
    margin-top: 0;
    color: ${props => props.theme.pointColor};
  }
  h5 {
    margin-top: 0;
    color: ${props => props.theme.mainTextColor};
    margin: 12px 0;
  }
  p {
    color: ${props => props.theme.btnTextColor};
    line-height: 1.6;
  }
`;














// page最後輸出 
  const Collection = () => {
    const publicUrl = process.env.PUBLIC_URL;

    const [searchTerm, setSearchTerm] = useState('');

    // 搜尋篩選區
    const filteredCards = (cardData || []).filter((card) => {
            if (!card) return false;

            const searchLower = searchTerm.trim().toLowerCase();
            if (!searchLower) return true; // 沒輸入時顯示所有卡牌

            // 1. 檢查卡牌名稱
            const matchTitle = card.title && typeof card.title === 'string'
              ? card.title.toLowerCase().includes(searchLower)
              : false;

            // 2. 檢查正位關鍵字 (isntReserve)
            const matchIsntReserve = card.isntReserve && Array.isArray(card.isntReserve)
              ? card.isntReserve.some((keyword) => 
                  keyword && typeof keyword === 'string' && keyword.toLowerCase().includes(searchLower)
                )
              : false;

            // 3. 檢查逆位關鍵字 (Reserve)
            const matchReserve = card.Reserve && Array.isArray(card.Reserve)
              ? card.Reserve.some((keyword) => 
                  keyword && typeof keyword === 'string' && keyword.toLowerCase().includes(searchLower)
                )
              : false;

            // 三者只要有一個符合，這張卡牌就會被留下來
            return matchTitle || matchIsntReserve || matchReserve;
            });

    // 紀錄目前被點擊的卡牌資料，null 表示沒有彈窗
      const [selectedCard, setSelectedCard] = useState(null);

      const openModal = (card) => {
        setSelectedCard(card);
      };

      const closeModal = () => {
          setSelectedCard(null);
        };

    return (
      <DefaultLayout>
        <CCenter>
          <HeroSec title="塔羅圖鑑" para="認識獨一無二的專屬卡牌" />
        </CCenter>
        <BtnTOP />

        {/* 彈窗元件：當 selectedCard 有值時才渲染 */}
        {selectedCard && (
          <ModalOverlay onClick={closeModal}>
            {/* stopPropagation 防止點擊彈窗內部時也觸發關閉 */}
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <ModalBody>
                <img src={`${publicUrl}${selectedCard.img}`} alt={selectedCard.title} />
                <ModalInfo>
                  <h2>{selectedCard.title}</h2>
                  <h5>正位</h5>
                  <p>{selectedCard.isntReserve.join('、')}</p>
                  <h5>逆位</h5>
                  <p>{selectedCard.Reserve.join('、')}</p>
                </ModalInfo>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}

        <AllCardsDiv>
          {/* 1. 只保留搜尋輸入框，把原本用來重複渲染卡牌的 CardGrid 拿掉 */}
          
          <div>
          <SearchContainer>
                <SearchInput
                  type="text"
                  placeholder="搜尋卡牌關鍵字or直接點擊該牌查看內容"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  />
          </SearchContainer>

          {searchTerm.trim() && (
              <SearchResult style={{ marginTop: '10px', color: '#666', fontSize: '14px', textAlign: 'center' }}>
                {filteredCards.length > 0 ? (
                  <>
                    搜尋「<strong>{searchTerm}</strong>」，有 <strong>{filteredCards.length}</strong> 張牌慢慢出現了
                  </>
                ) : (
                  <>
                    霧氣散去... 找不到符合關鍵字「<strong>{searchTerm}</strong>」的卡牌
                  </>
                )}
              </SearchResult>
)}


            {/* --- 大阿爾克那 --- */}
            <h3>大阿爾克那</h3>
            <CardContainer className="card-list">
              {filteredCards
                .filter(card => card.id && card.id.includes('big'))
                .map(card => (
                  <CardItem key={card.id} onClick={() => openModal(card)} style={{ cursor: 'pointer' }}>
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
            
            {/* --- 權杖系列 --- */}
            <h5>權杖系列</h5>
            <CardContainer className="card-list">
              {filteredCards
                .filter(card => card.id && card.id.includes('wa'))
                .map(card => (
                  <CardItem key={card.id} onClick={() => openModal(card)} style={{ cursor: 'pointer' }}>
                    <CardImgWrapper>
                      <CardS src={`${publicUrl}${card.img}`} alt={card.title} />
                    </CardImgWrapper>
                    <CardInfo>
                      <h4>{card.title}</h4>
                    </CardInfo>
                  </CardItem>
                ))}
            </CardContainer>

            {/* --- 寶劍系列 --- */}
            <h5>寶劍系列</h5>
            <CardContainer className="card-list">
              {filteredCards
                .filter(card => card.id && card.id.includes('sw'))
                .map(card => (
                  <CardItem key={card.id} onClick={() => openModal(card)} style={{ cursor: 'pointer' }}>
                    <CardImgWrapper>
                      <CardS src={`${publicUrl}${card.img}`} alt={card.title} />
                    </CardImgWrapper>
                    <CardInfo>
                      <h4>{card.title}</h4>
                    </CardInfo>
                  </CardItem>
                ))}
            </CardContainer>

            {/* --- 聖杯系列 --- */}
            <h5>聖杯系列</h5>
            <CardContainer className="card-list">
              {filteredCards
                .filter(card => card.id && card.id.includes('cu'))
                .map(card => (
                  <CardItem key={card.id} onClick={() => openModal(card)} style={{ cursor: 'pointer' }}>
                    <CardImgWrapper>
                      <CardS src={`${publicUrl}${card.img}`} alt={card.title} />
                    </CardImgWrapper>
                    <CardInfo>
                      <h4>{card.title}</h4>
                    </CardInfo>
                  </CardItem>
                ))}
            </CardContainer>

            {/* --- 金幣系列 --- */}
            <h5>金幣系列</h5>
            <CardContainer className="card-list">
              {filteredCards
                .filter(card => card.id && card.id.includes('pe'))
                .map(card => (
                  <CardItem key={card.id} onClick={() => openModal(card)} style={{ cursor: 'pointer' }}>
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
