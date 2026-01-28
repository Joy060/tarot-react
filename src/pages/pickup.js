import DefaultLayout from "../layout/DefaultLayout";
import { CCenter, MainBGColorStyle } from "../context/styleTheme";
import { PickUpDiv } from "../layout/HeroSecB";
// import { HeroSecABC } from "../layout/HeroSecA";
// import { useAuth } from "../context/loginContext";
import QA from "../component/div/QA";
// import CardCategory from "../component/div/CardCategory";
import { BlackDivLayout } from "../layout/DivLayout";
import { HeroSecABC } from "../layout/HeroSecA";

const Pickup = () =>{

    // const {isLoggedIn} = useAuth();

    return(
        <DefaultLayout>
            <CCenter>
                <HeroSecABC title="塔羅占卜" para="解讀塔羅，發掘自我命運交織秘密" btn="開始占卜"/>
            </CCenter>

            <BlackDivLayout>
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