import styled from "styled-components";
import { Attention } from "../component/div/Attention";
import { CCenter, Width80 } from "../context/styleTheme";
import { BlankLayout } from "../layout/DefaultLayout";
import { HeroSecABCL } from "../layout/HeroSecA";

export const Flex = styled.div`
  display: flex;
`;

const Pickup1A = ()=>{

    return(
      <BlankLayout>
        <CCenter>
          <Width80>
            <Flex>
              <HeroSecABCL title="問題占卜" 
              para="請靜下心來，準備好的話就可以按下開始鍵。" 
              btn="開始占卜"
              link="/Pick2Type" />
              <Attention title="占卜前提" 
                  para="結果並非注定的命 是可以改變的運" 
                  para2="只回答人生問題，不回答投機問題  ( 如彩券中獎或天氣好壞)" 
                  para3="一個問題原則上只能算一次" 
                  para4="誠實面對自己遇到的問題" />
            </Flex>
          </Width80>
        </CCenter>
      </BlankLayout>
    );
}

export default Pickup1A;