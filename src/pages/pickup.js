import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import DefaultLayout from "../layout/DefaultLayout";
import { CCenter, MainBGColorStyle } from "../context/styleTheme";
// import { HeroSecABC } from "../layout/HeroSecA";
// import { useAuth } from "../context/loginContext";
import QA from "../component/div/QA";
// import CardCategory from "../component/div/CardCategory";
import DivLayout, { BlackDivLayout } from "../layout/DivLayout";
import { HeroSecABC } from "../layout/HeroSecA";
import { PickUpDiv } from '../component/div/Attention';

const Pickup = () =>{

    // const {isLoggedIn} = useAuth();

    const { hash } = useLocation();

    useEffect(() => {
    if (hash) {
        // 稍微延遲執行（例如 100ms），確保 GSAP 或其他組件已渲染完成
        const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }, 3000);

        return () => clearTimeout(timer);
    }
    }, [hash]); // 當 hash 改變時觸發



    return(
        <DefaultLayout>
            <CCenter>
                <HeroSecABC title="塔羅占卜" para="解讀塔羅，發掘自我命運交織秘密" btn="前往占卜" link="#pickDiv"/>
            </CCenter>

            <BlackDivLayout  id="pickDiv">
                <PickUpDiv />
            </BlackDivLayout>

            <MainBGColorStyle>
                <QA />
            </MainBGColorStyle>

            {/* <MainBGColorStyle>
                <CardCategory />
            </MainBGColorStyle> */}

            {/* {!isLoggedIn &&(
                <ButterflyCenter>
                    <HeroSecABC title="想主宰自己的人生 ?" para="從抽牌到專屬卡片，打造你的專屬塔羅旅程" btn="註冊會員"/>
                </ButterflyCenter>
            )} */}
        </DefaultLayout>
    )
}

export default Pickup;