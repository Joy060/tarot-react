import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.theme.opacityWhiteColor};
    color:${props => props.theme.btnTextColor};
    font-size: ${props => props.theme.titleS};
    border: 1px solid ${props => props.theme.mainTextColor};
    border-radius: ${props => props.theme.radiusS};
    
    width: 110px;
    height: 44px;

    margin: 4px 8px;

    &:hover{
        background-color: ${props => props.theme.mainTextColor};
        color:${props => props.theme.btnBGColor};    
        }
    `;

export default Button;



