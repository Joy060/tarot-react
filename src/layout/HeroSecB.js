import styled from "styled-components";

import { HeroSecAB, HeroSecABC, HeroSecABCL, HeroSecABL } from "./HeroSecA";
import { HeroTag } from "./HeroTag";
import { CCenter } from "../context/styleTheme";

import { FormLogin } from "../component/form/FormLogin";
import { FormSignup } from "../component/form/FormSignup";



// (左右區塊) HeroSecA + HeroTag區塊

// HERO版面B:左右型區塊樣式
const HeroAAStyle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-top:100px ;
    margin: 0 10%;
    /* border: 1px solid red; */

    `;

//HeroSec (本站介紹、學習塔羅、塔羅占卜、塔羅圖鑑)
export const HeroSecBAbout = ()=>{
    return(
        <HeroAAStyle>
            <HeroSecABCL title="本站介紹" para="無數靈感的起源，時間開始流動" btn="我要贊助"/>
            <HeroTag 
                tags={[
                    {label: "網站理念", target: "1"},
                    {label: "網站對象", target: "2"},
                    {label: "作者介紹", target: "3"},
                    {label: "UIUX設計摘要", target: "4"},
            ]}/>
        </HeroAAStyle>
    )
};

export const HeroSecBLearn = ()=>{
    return(
        <HeroAAStyle>
            <HeroSecABL title="學習塔羅" para="解讀塔羅，發掘自我命運交織秘密" />
            <HeroTag 
                tags={[
                    {label: "塔羅歷史", target: "01"},
                    {label: "塔羅牌的種類", target: "02"},
                    {label: "塔羅辭典", target: "03"},
            ]}/>
        </HeroAAStyle>
    )
};

export const HeroSecBCollection = ()=>{
    return(
         <CCenter>
            <HeroSecABC title="塔羅圖鑑" para="認識獨一無二的專屬卡牌" btn="查詢卡牌"/>
        </CCenter>
    )
};

// FormSec(登入、註冊)
export const FormSecLogin = ()=>{
    return(
        <HeroAAStyle>
            <HeroSecAB title="會員登入" para="歡迎回來，繼續你的塔羅旅程"/>
            <FormLogin />
        </HeroAAStyle>
    );
};

export const FormSecSignup = ()=>{
    return(
        <HeroAAStyle>
            <FormSignup />
            <HeroSecAB title="會員註冊" para="創建帳號，探索神秘占卜世界"/>
        </HeroAAStyle>
    );
};





