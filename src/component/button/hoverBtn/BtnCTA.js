import styled from "styled-components";
import Button from "./Button";

const ButtonCTA = styled(Button)`
    background-color: ${props => props.theme.mainTextColor};
    color:${props => props.theme.btnBGColor};
    border: none;

    width: 160px;
    height: 44px;
    padding: 8px;
    margin: 12px 0;

    &:hover{
        box-shadow: ${props => props.theme.shadowS}
    }

`;

export default ButtonCTA;



