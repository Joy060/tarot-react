import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { BlankLayout } from "../layout/DefaultLayout";
import { CardS, CCenter, Width80 } from "../context/styleTheme";
import ButtonCTA from "../component/button/hoverBtn/BtnCTA";


const LineH = styled.div`
  line-height: 50px;
  text-align: center;
`;

const Result = () => {

    const publicUrl = process.env.PUBLIC_URL;
    const location = useLocation();// 2. 取得當前路由的資訊
    const navigate = useNavigate();
    // const choice = sessionStorage.getItem("choice");
    // const text = sessionStorage.getItem("text");

    console.log("當前路由所有的 location 資訊:", location);
    console.log("接收到的卡牌資料:", location.state?.card);

    const card = location.state?.card;

    // 4. 防呆機制：如果使用者不是抽牌過來的（直接打網址），提示他回去抽牌
    if (!card) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p>⚠️ 找不到抽牌紀錄，請先進行抽牌。</p>
        <button onClick={() => navigate('/PickStart')}>回首頁</button>
      </div>
    );
    }


    return(
      <BlankLayout>
          <CCenter>
            <Width80>
              <LineH>
                      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
                            <h2>抽牌結果</h2>
                            
                            <div style={{ 
                              border: '0.25px solid #f8ff28', 
                              padding: '30px', 
                              borderRadius: '12px', 
                              display: 'inline-block',
                              backgroundColor: 'rgba(19, 13, 44, 0.74)',
                              boxShadow: '0 8px 16px rgba(3, 3, 3, 0.31)'
                            }}>
                              <h1 style={{ color: '#6200ee' }}>{card.title}</h1>
                              <CardS src={`${publicUrl}${card.img}`} />
                              <hr/>
                                {card.isntReserve.map((item, index) => (
                                  <span 
                                    key={index} 
                                    style={{
                                      border: '1px solid #f2ff05',
                                      padding: '4px 12px',
                                      margin:'4px',
                                      borderRadius: '16px',
                                      fontSize: '14px',
                                      fontWeight: '500'
                                    }}
                                  >
                                    {item}
                                  </span>
                                ))}
                            </div>

                            <div style={{ marginTop: '30px' }}>
                              {/* 讓使用者可以按按鈕回到抽牌頁面 */}
                              <ButtonCTA onClick={() => navigate('/PickStart')} >
                                重新抽牌
                              </ButtonCTA>
                              <ButtonCTA onClick={() => navigate('/')} >
                                回到首頁
                              </ButtonCTA>
                            </div>
                      </div>
              </LineH>
            </Width80>
          </CCenter>
      </BlankLayout>
    )
}

export default Result;