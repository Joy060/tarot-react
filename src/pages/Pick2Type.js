import { PickTypeALL } from "../component/button/PickType";
import { CCenter, Width80 } from "../context/styleTheme";
import { BlankLayout } from "../layout/DefaultLayout";
import { Flex } from "./Pick1A";

const Pick2Type = ()=>{

    return(
      <BlankLayout>
        <CCenter>
          <Width80>
            <Flex>
              <PickTypeALL />
            </Flex>      
          </Width80>
        </CCenter>
      </BlankLayout>
    );
}

export default Pick2Type;