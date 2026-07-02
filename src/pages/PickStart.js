import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import cardData from "../context/cards.json"

import ButtonCTA from "../component/button/hoverBtn/BtnCTA";
import { CCenter, Width80 } from "../context/styleTheme";
import { BlankLayout } from "../layout/DefaultLayout";
import styled from "styled-components";

const CardBack = styled.img`
    width: 100px;
    height: 150px;
    margin: 40px;
    border-radius:10px ;
    border: 2px solid ${props => props.theme.shinyShadow};
    background-color:${props => props.theme.mainBGColor};
;

   
`;

const PickStartDiv = styled.div`
width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

// 元件匯出
const PickStart = ()=>{


    // 用來儲存當前抽到的卡牌數據，預設為空值
      const location = useLocation();
      const navigate = useNavigate();// 2. 初始化 navigate 函式
    
      // 1. 先接住前面累積的資料
      const { quizType, question } = location.state || {};
      
      const [drawnCard, setDrawnCard] = useState(null);


          // ... 步驟 3 的邏輯
          // 抽牌動作drawCard
          const drawCard = () => {
            // 1. 防呆：確保 JSON 裡面有資料
            if (cardData.length === 0) return;

            // 2. 隨機產生一個介於 0 到 陣列長度-1 之間的整數
            const randomIndex = Math.floor(Math.random() * cardData.length);
            
            // 3. 取得隨機卡牌
            const randomCard = cardData[randomIndex];
            
            // 4. 更新狀態
            setDrawnCard(randomCard);

            navigate('/Result', { 
            state: { 
                quizType: quizType, 
                question: question, 
                card: randomCard 
            } 
        });
          };


    return(
      <BlankLayout>
        <CCenter>
          <Width80>
 
                  <PickStartDiv style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
                    <h2>線上抽牌系統</h2>
                    <CardBack />
                    {/* 抽牌按鈕 */}
                    <ButtonCTA 
                      onClick={drawCard} 
                      style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                    >
                      {drawnCard ? '看結果' : '洗牌並抽牌'}
                    </ButtonCTA>
{/* 
                    <hr style={{ margin: '30px auto', width: '50%' }} />

                    結果顯示區域：只有當 drawnCard 不是 null 時才會顯示
                    {drawnCard ? (
                      <div style={{ 
                        border: '1px solid #ccc', 
                        padding: '20px', 
                        borderRadius: '8px', 
                        display: 'inline-block',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}>
                        <h3>🃏 你抽到了：{drawnCard.id}</h3>
                        <p>{drawnCard.title}</p>
                      </div>
                    ) : (
                      <p style={{ color: '#888' }}>請點擊上方按鈕抽取你的卡牌</p>
                    )} */}
                  </PickStartDiv>

          </Width80>
        </CCenter>
      </BlankLayout>
    );
}

export default PickStart;