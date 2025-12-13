// Router
import { useAuth } from "../../context/loginContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// 樣式匯入
import styled from "styled-components";
import Button from "../button/hoverBtn/Button";
import { ShinyWord } from "../button/hoverBtn/shinyWord";
import { Input } from "../form/Input";

const FormLoginStyle = styled.div`
    text-align: center;
    background-color: ${props => props.theme.opacityBlackColor};
    padding: 10px;
    color: ${props => props.theme.paraColor};
    width: 40%;
    
`;

// 匯出表單元件(登入)
export const FormLogin = ()=>{
    
    const navigate = useNavigate();
    const { login } =useAuth();

    // 登入函式
    const handleLogin = ()=>{
        login();
        navigate('/dashboard');
    };

    return(
        <FormLoginStyle>

            <div>
                <Input />
                <Input />
                <Input />
            </div>

            <div>
                <Button onClick = {handleLogin}>登入</Button>
                <p><ShinyWord>忘記密碼</ShinyWord></p>
                <p>還不是會員?</p>
                <ShinyWord>
                    <Link to="/signup" >註冊</Link>
                </ShinyWord>
            </div>
        </FormLoginStyle>
    );
};
