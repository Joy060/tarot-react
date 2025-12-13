import { PickInput } from "../component/button/PickType";
import { CCenter, Width80 } from "../context/styleTheme";
import { BlankLayout } from "../layout/DefaultLayout";
import { Flex } from "./Pick1A";

const Pick2Input = ()=>{

    return(
      <BlankLayout>
        <CCenter>
          <Width80>
            <Flex>
              <PickInput />
            </Flex>      
          </Width80>
        </CCenter>
      </BlankLayout>
    );
}

export default Pick2Input;