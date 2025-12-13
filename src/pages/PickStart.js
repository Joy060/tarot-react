import styled from "styled-components";
import { useState } from "react";

import { CCenter, TitlePara, Width80 } from "../context/styleTheme";
import { BlankLayout } from "../layout/DefaultLayout";
import { DotBlackStyle, DotWordStyle, LineStyle } from "../component/div/PickStart/Schedule";
import ButtonCTA from "../component/button/hoverBtn/BtnCTA";
import { Link } from "react-router-dom";



// 資料展示
let scheDatas = [
  {state: "洗牌",
    para: "請心中默念問題並洗牌"},
  {state: "切牌",
    para: "請點擊畫面切牌"},
  {state: "抽牌",
    para: "請點擊塔羅牌，抽出指定張數"},
  {state: "展牌",
    para: "點擊按鍵查看結果"},
  {state: "結果",
    para: "-"}
];



const Flex = styled.div`
  display: flex;
  `;

// 左: 5進度框 的容器樣式
const DotDiv =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid yellow;
    width: 100%;
    position: absolute;
    `;

// 左: 圖形元件容器樣式
const DivStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 300px;
    height: 100px;
    `;

// 左/上:　圖形+字 單元件
const DotWord = ({text})=>{
  return(
    <DotWordStyle>
      <DotBlackStyle></DotBlackStyle>
      <TitlePara>{text}</TitlePara>
    </DotWordStyle>
  );
}

// 步驟次序
let step = 1;

// 左側容器樣式
const ScheduleStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid yellow; */
    height: 200px;
    width: 300px;

`;

// 左側5階段黑圈渲染
const App = () =>{
  return(
    <DivStyle>
      <LineStyle></LineStyle> 
        <DotDiv>
          {scheDatas.map((item, index)=>(
            <DotWord key={index} text={item.state} />
          ))}
        </DotDiv>
    </DivStyle>
  );
};

// 左側元件
const Schedule = ()=>{

    return(
      <ScheduleStyle id="left">
        <App />
        {scheDatas.map((item, index)=>(
            step === index+1 ? (
                <div key={index}>
                    <TitlePara id="contextA">
                      {item.para}
                    </TitlePara>
                </div>
            ):null
        ))}
      </ScheduleStyle>      
    );
}


// ------------------------------------右側設定------

// 右側大容器樣式
const RightStyle = styled.div`
  border: 1px solid yellow;
  width: 50vw;
`;

// 右側小容器樣式
const RightAStyle = styled.div`
  width: 100%;
  height: 100%;
`;


// 左+右元件匯出
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
          <RightAStyle id="A" onClick={goNext}>
            A 洗牌       
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
            <Flex>

              <Schedule />
              
              <RightStyle>
                {step === "A" &&( <A goNext={goNext}/>)}
                {step === "B" &&( <B goNext={goNext}/>)}
                {step === "C" &&( <C goNext={goNext}/>)}
                {step === "D" &&( <D goNext={goNext}/>)}
              </RightStyle>

            </Flex>
          </Width80>
        </CCenter>
      </BlankLayout>
    );
}

export default PickStart;