import DefaultLayout from "../layout/DefaultLayout";
import { ButterflyCenter, CCenter, MainBGColorStyle, TitleSmall } from "../context/styleTheme";
import { HeroSecBLearn } from "../layout/HeroSecB";
import { DivPara, HeroSecABC } from "../layout/HeroSecA";
import { useAuth } from "../context/loginContext";
import { CardBtnSetStyle, IntranceStyle } from "../component/div/Intrance";
import CardBtn from "../component/button/CardBtn";
import CardCategory from "../component/div/CardCategory";


const Intrance = ()=>{
    return(
        <IntranceStyle>
            <TitleSmall>塔羅辭典</TitleSmall>
            <CardBtnSetStyle>
                <CardBtn src="/img/Cups07.jpg" title="牌義解釋" />
                <CardBtn src="/img/Swords14.jpg" title="牌陣解釋" />
                <CardBtn src="/img/Wands08.jpg" title="卡片圖鑑" />
            </CardBtnSetStyle>
        </IntranceStyle>
    )
}

const Learn = () =>{

    const {isLoggedIn} = useAuth();

    return(
        <DefaultLayout>
            <CCenter>
                <HeroSecBLearn />
            </CCenter>

            <MainBGColorStyle>
                <DivPara title="塔羅歷史" 
                    para1="偉特塔羅牌（Rider-Waite Tarot）
                            是現代塔羅牌中最具影響力的系統之一。"
                    para2="與傳統塔羅不同，
                            偉特塔羅最大的突破在於小阿爾克那，
                            首次採用了具象畫面而使解讀更直觀。
                            這一創新使塔羅牌的學習變得更容易，
                            並影響了後世許多塔羅牌的設計風格。"
                    para3="偉特塔羅的圖像受到西方神秘學、基督教象徵學和占星學的影響。
                            時至今日，偉特塔羅仍然是最受歡迎、影響最深遠的塔羅牌之一，
                            並成為許多塔羅學習者的入門選擇。"/>
                
                <CardCategory />
                <Intrance />
            </MainBGColorStyle>


            {/* 未登入時顯示 */}
            {!isLoggedIn && (
                <ButterflyCenter>
                    <HeroSecABC title="想主宰自己的人生 ?" para="從抽牌到專屬卡片，打造你的專屬塔羅旅程" btn="註冊會員"/>
                </ButterflyCenter>
            )}
        </DefaultLayout>
    )
}

export default Learn;