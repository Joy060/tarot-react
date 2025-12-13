import DefaultLayout from "../layout/DefaultLayout";
import { CCenter } from "../context/styleTheme";
import { FormSecSignup } from "../layout/HeroSecB";


const Signup = () =>{
    return(
        <DefaultLayout>
            <CCenter>
                <FormSecSignup />
            </CCenter>
        </DefaultLayout>
    )
}

export default Signup;