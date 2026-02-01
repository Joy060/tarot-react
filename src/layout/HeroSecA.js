import { Link } from "react-router-dom";
import { useRef,useEffect } from "react";

import "aos/dist/aos.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled from "styled-components";
import ButtonCTA from "../component/button/hoverBtn/BtnCTA";
import {TitleBig, TitlePara, TitleSmall, Width80 } from "../context/styleTheme";

gsap.registerPlugin(ScrollTrigger);


// HERO版面A:單片區塊樣式(置中)
const HeroStyle = styled.div`
    text-align: center;
    width: 100%;
    margin-top:100px ;
    line-height: ${props => props.theme.paddingL};
    padding: ${props => props.theme.paddingXL} 0;
    `;

// HERO版面A:單片區塊樣式(靠左)
const HeroStyleAA = styled(HeroStyle)`
    text-align: left;
    `;

// HERO版面A(置中):三行物件匯出
export const HeroSecABC = ({title,para,btn,link})=>{
    const containerRef = useRef(null);

    // 處理捲動邏輯
    const handleNavigation = (e) => {
        // 檢查 link 是否為錨點 (以 # 開頭)
        if (link && link.startsWith("#")) {
        const targetId = link.substring(1); // 取得 id 名稱
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault(); // 阻止 react-router 跳轉路徑
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        }
        // 如果不是 # 開頭，就不會觸發 e.preventDefault()，Link 會正常執行頁面跳轉
    };


    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const tl = gsap.timeline({
              scrollTrigger:{
                trigger: containerRef.current,
                start: "top 60%",
                // markers: true,
              },
            });  

            tl.from(".titleXL",{opacity:0,y:-300,duration:0.8})
              .from(".titlePara",{y:50,opacity:0,duration:0.8},"+=0.2")
              .from(".btnCTA",{opacity:0,duration:1})
        },containerRef);

        return () => ctx.revert();
  },[]);


    return(
        <HeroStyle ref={containerRef}>  
            <TitleBig className="titleXL">{title}</TitleBig>
            <TitlePara className="titlePara">{para}</TitlePara>
            <Link to ={link} onClick={handleNavigation}>
                <ButtonCTA className="btnCTA">{btn}</ButtonCTA>
            </Link>
        </HeroStyle>
    )
};
// HERO版面A(置中):兩行物件匯出
export const HeroSecAB = ({title,para})=>{
    return(
        <HeroStyle>
            <TitleBig>{title}</TitleBig>
            <TitlePara>{para}</TitlePara>
        </HeroStyle>
    )
};

// HERO版面A(靠左):三行物件匯出
export const HeroSecABCL = ({title,para,btn,link})=>{
    return(
        <HeroStyleAA>
            <TitleBig>{title}</TitleBig>
            <TitlePara>{para}</TitlePara>
            <Link to ={link}>
                <ButtonCTA>{btn}</ButtonCTA>
            </Link>        
        </HeroStyleAA>
    )
};

// HERO版面A(靠左):兩行物件匯出
export const HeroSecABL = ({title,para})=>{
    return(
        <HeroStyleAA>
            <TitleBig>{title}</TitleBig>
            <TitlePara>{para}</TitlePara>
        </HeroStyleAA>
    )
};

// 固定標題+內文
export const DivPara = ({title,para1,para2,para3})=>{
    return(
        <Width80>
            <HeroStyle>
                <TitleSmall>{title}</TitleSmall>
                <TitlePara>{para1}</TitlePara>
                <TitlePara>{para2}</TitlePara>
                <TitlePara>{para3}</TitlePara>
            </HeroStyle>
        </Width80>
    )
};

