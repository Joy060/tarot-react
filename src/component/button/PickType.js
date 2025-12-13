import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TitlePara, TitleSmall } from "../../context/styleTheme";
import Button from "./hoverBtn/Button";

// 變數資料
const TypeData = [
    { id:"簡答題",
        number:"1",
        des:["單張做綜合分析" , "我想知道今天的運勢"  
        ]},
    { id:"發展變化",
        number:"2",
        des:["過去、現在、未來" ,"我預計的新工作會如何發展?"
        ]},
    { id:"發展關係",
        number:"3",
        des:["當事人、對方、兩人現況、未來" ,"我想問我跟那位學長會如何發展?"
        ]},
    { id:"左右為難",
        number:"4",
        des:["心態、A選項現況、B選項現況、A選項發展、B選項發展" ,"我想問我該繼續 [A 就學] 還是 [B 就業] ?"
        ]},
    { id:"心態建議",
        number:"5",
        des:["過去、現在、未來、心態、建議" ,"我想問我在公司未來發展?"  
        ]},
];

// 小卡圖案樣式
const Squar = styled.div`
    width: 24px;
    height: 40px;
    margin: 0 -4px ; /* 為了交疊 */
    background-color:  ${props => props.theme.paraColor};
    border: 1px solid black;
`;

// 小卡容器div
const SquarContainer = styled.div`
    display: flex;
    margin-top: 12px ;
    justify-content: center;
    align-items: center;
`;

// (小卡+文字)一般容器背景樣式
const CardBackground = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 132px;
    padding: 12px;
    margin: 12px;
    text-align: center;
    /* border: 1px solid black; */
    border-radius: ${props => props.theme.radiusS};
    
    &:hover{
        background-color:  ${props => props.theme.opacityWhiteColor};
    }
    `;

// 容器focus時 styled
const CardBackgroundFocus = styled(CardBackground)`
    background-color:  ${props => props.theme.opacityWhiteColor};
    border: 2px solid white;
    `;

// 單Btn元件
const PickTypeBtn = ({title,a,onClick}) =>{
    return(
        <div onClick={onClick}>
            <SquarContainer>
                { Array.from({length:a}).map((_, i)=>(
                    <Squar key={i}></Squar>
                ))}
            </SquarContainer>
            <TitlePara>{title}</TitlePara>
        </div>
    );
}

// Btn容器樣式
const PickTypeBtnSecType = styled.div`
    display: flex;
    `;

// A內容渲染設定
const PickTypeBtnSec = ()=>{

    const [activeType, setActiveType] =useState(TypeData[0].id);

    const activeData =TypeData.find((type)=>type.id===activeType)

    const navigate = useNavigate();

    const handleChoice = () =>{
        sessionStorage.setItem("choice",activeType);
        navigate("/Pick2Input");
    };

    return(
        <div>
            <PickTypeBtnSecType>
                {TypeData.map((type)=>
                    activeType === type.id?(
                    <CardBackgroundFocus key={type.id}>
                        <PickTypeBtn title={type.id} a={type.number} onClick= {()=>setActiveType(type.id)}/>
                    </CardBackgroundFocus>
                    ):(
                    <CardBackground key={type.id}>
                        <PickTypeBtn title={type.id} a={type.number} onClick= {()=>setActiveType(type.id)}/>
                    </CardBackground>
                    )
                )}
                <p>已選擇：{activeType}</p>
            </PickTypeBtnSecType>

            <p>點擊查看類型提示</p>
            <hr/>

            <div>
                {activeData.des.map((line,i)=>(
                    <p key={i}>{line}</p>
                ))}
            </div>
            <Button onClick={handleChoice}>下一步</Button>
        </div>

    );

}

// B內容渲染設定
const PickInputSec = ()=>{

    const [text, setText] = useState("");
    const navigate = useNavigate();


    const goNext = () =>{
        sessionStorage.setItem("text",text);
        navigate("/PickStart");
    };

    return(
        <div>
            <TitleSmall>請寫下你的問題，最後只用一個問號結尾。</TitleSmall>
            <div>
                <input type="text" id="inp"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="input"  
                placeholder="請輸入問題" 
                required
                autoFocus />
            </div>
                <Button onClick={goNext}>開始抽牌</Button>
        </div>
    );
}


// 底板樣式
const PickTypeBackgroundSec = styled.div`
    background-color:  ${props => props.theme.opacityWhiteColor};
    border-radius: ${props => props.theme.radiusS};
    text-align: center;
    line-height: 40px;
    padding: 48px;
    backdrop-filter: blur(1px);
    box-shadow: ${props => props.theme.shadowBlackL};

`;

// 輸出A：選擇類型
export const PickTypeALL = ()=>{
    return(
        <PickTypeBackgroundSec>
            <PickTypeBtnSec />
        </PickTypeBackgroundSec>
    );

}
// 輸出B：輸入文字
export const PickInput = ()=>{
    return(
        <PickTypeBackgroundSec>
            <PickInputSec />
        </PickTypeBackgroundSec>
    );

}
