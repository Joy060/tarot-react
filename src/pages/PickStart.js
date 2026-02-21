import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CCenter, Width80 } from "../context/styleTheme";

import { BlankLayout } from "../layout/DefaultLayout";

import ButtonCTA from "../component/button/hoverBtn/BtnCTA";
import  ADiv  from "../component/div/PickStart/A";

// 容器樣式
const RightAStyle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  border: 1px solid red;
`;


// 元件匯出
const PickStart = ()=>{

    // ------------------------------------紀錄流程變數------
    // 紀錄目前狀態在哪一步驟
    const [step, setStep] = useState("A");

    // 定義流程順序
    const steps = ["A","B","C","D"];

    // 找到目前索引
    const currentIndex = steps.indexOf(step);

    // 下一步函式
    const goNext = () =>{
      if(currentIndex < steps.length -1){
        setStep(steps[currentIndex +1]);
      }
    };
    
 

    // ------------------------------------四大區塊定義------
    const A = ({ goNext })=>{
        return(
          <RightAStyle id="A" >
            <ADiv />
          </RightAStyle>
        );
    }
    const B = ({ goNext })=>{
        return(
          <RightAStyle id="B" onClick={goNext}>
            B 切牌       
          </RightAStyle>
        );
    }
    const C = ({ goNext })=>{
        return(
          <RightAStyle id="C" onClick={goNext}>
            C 抽牌       
          </RightAStyle>
        );
    }
    const D = ()=>{
        return(
          <RightAStyle id="D">
            D 展牌    

            <Link to ="/pickup/result">
                <ButtonCTA>看結果</ButtonCTA>
            </Link>
 
          </RightAStyle>
        );
    }


    return(
      <BlankLayout>
        <CCenter>
          <Width80>
              <A goNext={goNext}/>
              {/* {step === "A" &&( <A goNext={goNext}/>)}
              {step === "B" &&( <B goNext={goNext}/>)}
              {step === "C" &&( <C goNext={goNext}/>)}
              {step === "D" &&( <D goNext={goNext}/>)} */}
          </Width80>
        </CCenter>
      </BlankLayout>
    );
}

export default PickStart;