// 樣式匯入
import styled from "styled-components";

// input樣式
const InputStyle = styled.input`
    border: none;
    background-color: ${props => props.theme.opacityWhiteColor};
    color: ${props => props.theme.opacityBlackColor};
    padding: 4px;
`;

//DIV樣式
const InputDivStyle = styled.div`
    border: 1px yellow solid;
    text-align: left;
`;
// 匯出表單單欄元件
export const Input = ()=>{

    return(
        <InputDivStyle>
            <p>暱稱</p>
            <InputStyle></InputStyle>
            <p>請輸入3個字以上</p>
        </InputDivStyle>
    );
};
