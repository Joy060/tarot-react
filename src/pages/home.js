import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 插入模板 樣式
import DefaultLayout from "../layout/DefaultLayout";
import styled from "styled-components";

// 插入BTN元件
// import Button from "../component/button/hoverBtn/Button";
// import ButtonCTA from "../component/button/hoverBtn/BtnCTA";
import BtnTOP from "../component/button/hoverBtn/BtnTOP";
// import { ShinyWord } from "../component/button/hoverBtn/shinyWord";
// import { BtnScrollTo } from "../component/button/hoverBtn/BtnScrollTo";
// import { TagCategoryOn, TagCategoryOff } from "../component/button/TagCategory";
// import { TagSwitch } from "../component/button/TagSwitch";


import { HeroSecABC } from "../layout/HeroSecA";
import { CCenter } from "../context/styleTheme";

// 插入元件
// import News from "../component/div/News";
import Promote from "../component/div/Promote";
// import Intrance from "../component/div/Intrance";

gsap.registerPlugin(ScrollTrigger);

const VisitHome = styled.div`
  /* padding-top:100px ; */
  background-color: ${props => props.theme.mainBGColor};
  color:${props => props.theme.mainTextColor};
`;


const Homepage = ()=> {
  
  // const h1Ref = useRef(null);

  useEffect(()=>{
      Aos.init({
        duration:1000,
        easing: "ease-out",
        mirror: true
      });
  },[])

  // useEffect(()=>{
  //   let ctx = gsap.context(() => {
  //     gsap.from(h1Ref.current,{
  //       y: 50,
  //       opacity:0,
  //       duration: 1.5,
  //       ease: "power3.out",
  //       scrollTrigger:{
  //         trigger: h1Ref.current,
  //         start: "top 80%",
  //         markers: true,
  //       }
  //     });
  //   });

  //   return () => ctx.revert();
  // },[]);

  return (
    <DefaultLayout>
      <VisitHome>

        <CCenter>
          <HeroSecABC title="塔羅心圖" para="抽牌、創作、收藏，無數命運之語" btn="前往占卜" link="/pickup#pickDiv"/>
        </CCenter>
  
      {/* <div data-aos="fade-up"
        data-aos-offset="300"
        style={{align:"center",
                display:"flex",
                justifyContent:"center"}}>
          <h1>我是AOS</h1>
      </div>
      <div
        ref={h1Ref}
        className="box"
        data-aos="none"
        >
          <h1>我是GSAP</h1>
      </div> */}
      
        {/* <News /> */}
        
        <Promote />
        <BtnTOP />

        {/* <Intrance /> */}

        {/* 展示區
        <div style={{margin:"0 20px", padding: "10%"}}>
          
         

        <h2>訪客登入頁Homepage</h2>
          
          <p>HoverBTN系列</p>
            <Button>普通按鈕</Button>
            <ButtonCTA>CTA</ButtonCTA>
            <ShinyWord>前往註冊</ShinyWord>
            <BtnScrollTo>網站理念</BtnScrollTo>
            <BtnScrollTo>網站對象</BtnScrollTo>
            <BtnScrollTo>作者介紹</BtnScrollTo>
          
          
          <p>Tag系列</p>
            <TagCategoryOn>大阿爾克納</TagCategoryOn>
            <TagCategoryOff>小阿爾克納</TagCategoryOff>
            <TagCategoryOff>逆位牌</TagCategoryOff>
            <TagCategoryOff>宮廷牌</TagCategoryOff>
            <TagSwitch />

        </div> */}

        {/* <ButterflyCenter>
          <HeroSecABC title="想主宰自己的人生 ?" para="從抽牌到專屬卡片，打造你的專屬塔羅旅程" btn="註冊會員"/>
        </ButterflyCenter> */}
        
      </VisitHome>
    </DefaultLayout>
  )
}

export default Homepage;
