import DefaultLayout from "../layout/DefaultLayout";
import { ButterflyCenter, CCenter, MainBGColorStyle } from "../context/styleTheme";
import { HeroSecBPickup, PickUpDiv } from "../layout/HeroSecB";
import { HeroSecABC } from "../layout/HeroSecA";
import { useAuth } from "../context/loginContext";
import QA from "../component/div/QA";
import CardCategory from "../component/div/CardCategory";
import { BlackDivLayout } from "../layout/DivLayout";

const Pickup = () =>{

    const {isLoggedIn} = useAuth();

    return(
        <DefaultLayout>
            <CCenter>
                <HeroSecBPickup />
            </CCenter>

            <BlackDivLayout>
                <PickUpDiv />
            </BlackDivLayout>


            <MainBGColorStyle>
                <QA />
            </MainBGColorStyle>

            <MainBGColorStyle>
                <CardCategory />
            </MainBGColorStyle>

            {!isLoggedIn &&(
                <ButterflyCenter>
                    <HeroSecABC title="想主宰自己的人生 ?" para="從抽牌到專屬卡片，打造你的專屬塔羅旅程" btn="註冊會員"/>
                </ButterflyCenter>
            )}
        </DefaultLayout>
    )
}

export default Pickup;