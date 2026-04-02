import { useState } from "react";
import { motion } from 'framer-motion';

import { cardData } from "../../../context/cardContants";
import ButtonCTA from "../../button/hoverBtn/BtnCTA";
import Card from "../Card";


const ADiv =({goNext})=>{
        // state1:剩下的牌堆
        const [deck, setDeck] = useState([]);
        // state2:抽出的牌
        const [selectedCards, setSelectedCards] = useState([]);

        // 洗牌函數
        const initGame = ()=>{
              // 有逆位的新牌組
              let newDeck = [...cardData].map(card =>({
                ...card,// 1. 保留原始牌的名稱、圖檔等
                isReversed: Math.random()>0.5,// 2. 額外幫它加上「正逆位」的狀態
              }));

              // 完全打亂，是個非常經典且高效的洗牌演算法，稱為 Fisher-Yates Shuffle（費雪-耶茨洗牌算法）:從最後一張開始，與前面隨機B互換位置
              for(let i =newDeck.length -1; i>0; i--){
                const j = Math.floor(Math.random()*(i+1));
                [newDeck[i],newDeck[j]]=[newDeck[j],newDeck[i]];
              }

              setDeck(newDeck);
              setSelectedCards([]); //清空已選牌組
        }

        // 抽牌函數
        const drawCard = () => {

            //防呆機制:「如果牌堆已經空了（沒牌了），就直接結束這段程式，什麼都不要做。
            if (deck.length === 0) {
                alert("牌已經抽完囉！請重新洗牌。"); // 加上提示
                return;
            }            
            // 1. 處理抽牌邏輯
            const card = deck[0]; 
            const newDeck = deck.filter(c => c.id !== card.id);
            const newSelected = [...selectedCards, card];

            setDeck(newDeck); //更新有逆位的牌堆
            setSelectedCards(newSelected);

            // 2. 判斷是否達成跳轉條件（假設抽滿 3 張）
            if (newSelected.length === 2) {
              // 延遲 3 秒後跳轉，並把抽到的牌 [newSelected] 帶回去給父層
              alert("下一步");
              setTimeout(() => {
                  goNext(newSelected); 
              }, 3000);
            }
        };

        // 輸出結果
        return (
          <div style={{ padding: '20px', textAlign: 'center'}}>
                <h2>塔羅抽卡測試</h2>
                <div style={{ margin: '20px',  height:"50px"}}>
                  <h3>牌堆(剩餘 {deck.length} 張)</h3>
                </div>
                
                <ButtonCTA onClick={initGame}>洗牌</ButtonCTA>
                <ButtonCTA onClick={drawCard}>抽牌</ButtonCTA>




                <div style={{ marginTop: '20px',  height:"100px" }}>
                  <h3>你抽中的牌</h3>
                  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    {selectedCards.map((card,i) => (
                      <Card 
                        key={i} 
                        id={card.id} 
                        title={card.title}
                        isSelected={true} 
                      />
                    ))}
                  </div>
                </div>
          </div>
        );
};

export default ADiv;
