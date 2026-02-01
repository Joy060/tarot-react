import { CCenter } from "../context/styleTheme";
import { BlankLayout } from "../layout/DefaultLayout";
import { HeroSecABC } from "../layout/HeroSecA";

const Pickup1A = ()=>{

    return(
      <BlankLayout>
        <CCenter>
              <HeroSecABC title="今日占卜" 
              para="請靜下心來，為你的今日祝福與祈禱，準備好的話就可以按下開始鍵" 
              btn="開始占卜"
              link="/PickStart" />
        </CCenter>
      </BlankLayout>
    );
}

export default Pickup1A;