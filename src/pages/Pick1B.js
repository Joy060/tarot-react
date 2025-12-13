import { Attention } from "../component/div/Attention";
import { CCenter, Width80 } from "../context/styleTheme";
import { BlankLayout } from "../layout/DefaultLayout";
import { HeroSecABCL } from "../layout/HeroSecA";
import { Flex } from "./Pick1A";

const Pickup1A = ()=>{

    return(
      <BlankLayout>
        <CCenter>
          <Width80>
            <Flex>
              <HeroSecABCL title="今日占卜" 
              para="請靜下心來，為你的今日祝福與祈禱。準備好的話就可以按下開始鍵" 
              btn="開始占卜"
              link="/PickStart" />
              <Attention title="占卜前提" para="結果並非注定的命，是可以改變的運" />
            </Flex>      
          </Width80>
        </CCenter>
      </BlankLayout>
    );
}

export default Pickup1A;