import DefaultLayout, { BlankLayout } from "../layout/DefaultLayout";
import { CardS, CCenter, TitleSmall, Width80 } from "../context/styleTheme";
import ButtonCTA from "../component/button/hoverBtn/BtnCTA";
import { Link } from "react-router-dom";
import styled from "styled-components";
 


const LineH = styled.div`
  line-height: 50px;
  text-align: center;
`;

const Result = () =>{

    const publicUrl = process.env.PUBLIC_URL;
    const choice = sessionStorage.getItem("choice");
    const text = sessionStorage.getItem("text");

    const cards = [
      {number:"0號",title:"愚人牌",src:`${publicUrl}/img/Cups07.jpg`,content:"大吉",courage:"你真是神"},
      {number:"1號",title:"戀人牌",src:`${publicUrl}/img/Cups07.jpg`,content:"中吉",courage:"還不錯拉"},
      {number:"2號",title:"月亮牌",src:`${publicUrl}/img/Cups07.jpg`,content:"小吉",courage:"要不要重測一次?"},
      {number:"3號",title:"審判牌",src:`${publicUrl}/img/Cups07.jpg`,content:"平",courage:"加油"},
      {number:"4號",title:"高塔牌",src:`${publicUrl}/img/Cups07.jpg`,content:"兇",courage:"你今天出門記得帶傘、小心地上狗屎跟坑洞"},
    ];

    
    let Ram = Math.floor(Math.random()*cards.length);
    let numberW = cards[Ram];

    return(
        <DefaultLayout>
                <BlankLayout>
                    <CCenter>
                      <Width80>
                        <LineH>
                          <h1>占卜結果</h1>
                          {choice?(
                            <>
                            <TitleSmall>問題---{text}</TitleSmall>
                            <TitleSmall>類型---{choice}</TitleSmall>
                            </>
                          ):(
                            <TitleSmall>今日運勢</TitleSmall>
                          )}
                          <h4>塔羅牌說</h4>
                              <CardS src={numberW.src} />
                              <p>{numberW.number}{numberW.title}-{numberW.content}</p>
                              <p>{numberW.courage}</p>

                        </LineH>
            
                        <Link to ="/pickup">
                            <ButtonCTA onClick={()=> sessionStorage.clear()}>再測一次</ButtonCTA>
                        </Link>

                      </Width80>
                    </CCenter>
                </BlankLayout>
        </DefaultLayout>
    )
}

export default Result;