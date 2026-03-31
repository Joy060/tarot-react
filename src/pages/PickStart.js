import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CardL, CardM, CCenter, Width80 } from "../context/styleTheme";

import { BlankLayout } from "../layout/DefaultLayout";

import ButtonCTA from "../component/button/hoverBtn/BtnCTA";
import ADiv  from "../component/div/PickStart/A";
// import BDiv from "../component/div/PickStart/B";
// import CDiv from "../component/div/PickStart/C";

// 容器樣式
const RightAStyle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  /* border: 1px solid white; */
`;


// 元件匯出
const PickStart = ()=>{

    // ------------------------------------紀錄流程變數------
    // 紀錄目前狀態在哪一步驟
    const [step, setStep] = useState("A");

    // 定義流程順序
    const steps = ["A","D"];

    // 紀錄抽牌結果
    const [finalCards, setFinalCards] = useState([]);
    
    // 下一步函式
    const goNext = (resultCards) =>{
      // 如果執行 goNext 時有傳入牌陣，就存起來
      if (resultCards) {
        setFinalCards(resultCards);
      }

      // 找到目前索引
      const currentIndex = steps.indexOf(step);
      if(currentIndex < steps.length -1){
        setStep(steps[currentIndex +1]);
      }
    };
    
 

    // ------------------------------------四大區塊定義------
    const A = ({ goNext })=>{
        return(
          <RightAStyle id="A">
            <ADiv goNext={goNext} />
          </RightAStyle>
        );
    }
    // const B = ({ goNext })=>{
    //     return(
    //       <RightAStyle id="B" onClick={goNext}>
    //         <BDiv />      
    //       </RightAStyle>
    //     );
    // }
    // const C = ({ goNext })=>{
    //     return(
    //       <RightAStyle id="C" onClick={goNext}>
    //         <CDiv />       
    //       </RightAStyle>
    //     );
    // }
    const D = ({data})=>{
        const publicUrl = process.env.PUBLIC_URL;

        return(
          <div id="D">
            <div>
              <h3>你抽到的牌是：</h3>
              <RightAStyle>
                {data.map((card, i) => (
                  <div>
                    <CardM className="img" src={`${publicUrl}/img/Cups07.jpg`} />
                    <p key={i}>{card.title}</p>
                  </div>
                ))}
              </RightAStyle>
            </div>

            <Link to ="/pickup/result">
                <ButtonCTA>看結果</ButtonCTA>
            </Link>
          </div>
 
        );
    }


    return(
      <BlankLayout>
        <CCenter>
          <Width80>
              {/* <A goNext={goNext}/> */}
              {step === "A" &&( <A goNext={goNext}/>)}
              {/* {step === "B" &&( <B goNext={goNext}/>)}
              {step === "C" &&( <C goNext={goNext}/>)} */}
              {step === "D" &&( <D data={finalCards}/>)}
          </Width80>
        </CCenter>
      </BlankLayout>
    );
}

export default PickStart;