import styled from "styled-components";
import Navbar, { NavbarBlank } from "./Navbar";

// 半透明底色
const Div3 = styled.div`
    background-color: ${props => props.theme.opacityBlackColor};
    color:#F6F3F6;
    line-height: 100px;
    position: fixed;
    /* border: 1px solid blue; */
    width: 100%;
    box-shadow:${props => props.theme.shadowBlackS};

`;


const Header = () =>{

    return(
        <Div3>
            <Navbar />
        </Div3>
    )
}

export const HeaderBlank = () =>{

    return(
        <Div3>
            <NavbarBlank />
        </Div3>
    )
}

export default Header;