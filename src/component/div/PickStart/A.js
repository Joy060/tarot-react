import { useState } from "react";

import { cardData } from "../../../context/cardContants";
import ButtonCTA from "../../button/hoverBtn/BtnCTA";


const ADiv =()=>{
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

            const card = deck[0]; // 取出第一張
            const newDeck = deck.slice(1); // 移除第一張
            
            setDeck(newDeck); //更新有逆位的牌堆
            setSelectedCards([...selectedCards, card]); //更新已抽出的牌堆
        };

        // 輸出結果
        return (
          <div style={{ padding: '20px', textAlign: 'center'}}>
                <h2>塔羅抽卡測試</h2>
                <ButtonCTA onClick={initGame}>開始洗牌</ButtonCTA>
                <ButtonCTA onClick={drawCard} disabled={deck.length === 0}>抽一張牌</ButtonCTA>

                <div style={{ marginTop: '20px' }}>
                  <h3>已抽出的牌：</h3>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        {selectedCards.map((card, index) => (
                          <div key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>
                              <div>{card.title} </div>
                              <div>{card.isReversed ? '(逆位)' : '(正位)'}</div>
                          </div>
                        ))}
                  </div>
                </div>
          </div>
        );
};

export default ADiv;
