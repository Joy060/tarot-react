import styled from "styled-components";

import { CCenter } from "../context/styleTheme";
import { BlankLayout } from "../layout/DefaultLayout";
import { HeroSecABC } from "../layout/HeroSecA";

export const Flex = styled.div`
  display: flex;
`;

const Pickup1A = ()=>{

    return(
      <BlankLayout>
        <CCenter>
              <HeroSecABC title="問題占卜" 
              para="請靜下心來，準備好的話就可以按下開始鍵。" 
              btn="開始占卜"
              link="/Pick2Type" />
        </CCenter>
      </BlankLayout>
    );
}

export default Pickup1A;