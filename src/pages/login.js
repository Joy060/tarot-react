import DefaultLayout from "../layout/DefaultLayout";
import { CCenter } from "../context/styleTheme";
import { FormSecLogin } from "../layout/HeroSecB";


const Login = () =>{

    return(
        <DefaultLayout>
            <CCenter>
                <FormSecLogin />
            </CCenter>
        </DefaultLayout>
    )
}

export default Login;