import styled from "styled-components";
import { TitleEng, TitlePara } from "../../context/styleTheme";
import DivLayout from "../../layout/DivLayout";
import { ShinyWord } from "../button/hoverBtn/shinyWord";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



// 單行 {日期 + news } 樣式
const ParaColumn = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: left;
`;

const News = () =>{

    useEffect(()=>{
          Aos.init({
            duration:1000,
            easing: "ease-out",
            mirror: true
          });
      },[])

    return(
        <DivLayout title="最新消息" >
            <ParaColumn data-aos="fade-up" data-aos-delay="0">
                <TitlePara>114.04.24</TitlePara>
                <TitlePara>限時活動現正開放中!快來找尋你的命定卡牌~</TitlePara>
            </ParaColumn>
            <ParaColumn data-aos="fade-up" data-aos-delay="200">
                <TitlePara>114.03.24</TitlePara>
                <TitlePara>預計於11年04月13日08-12時進行日記系統維修，請各位及早計畫，如提早完成會及時開放，活動時間另行公告。</TitlePara>
            </ParaColumn>
            <ParaColumn data-aos="fade-up" data-aos-delay="400">
                <TitlePara>114.02.14</TitlePara>
                <TitlePara>今日限定!情人節配浪漫卡牌，還不快來收集~</TitlePara>
            </ParaColumn >
            <TitleEng data-aos="fade-up" data-aos-delay="600">
                <ShinyWord>more</ShinyWord>
            </TitleEng>
        </DivLayout>
    )
}

export default News;
