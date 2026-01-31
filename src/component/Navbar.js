import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "../context/loginContext";
import { Width80 } from "../context/styleTheme";



// 1. 整體導覽列容器
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1rem 2rem; */
  color: white;
`;

// 1-1. 漢堡圖示 (三條線)
const Hamburger = styled.div`
    display: none; // 電腦版隱藏
    flex-direction: column;
    cursor: pointer;
    padding: 40px;

    span {
        height: 3px;
        width: 25px;
        background: white;
        margin-bottom: 4px;
        border-radius: 5px;
        transition: all 0.3s ease; // 平滑過渡動畫
    }

    @media (max-width: 768px) {
        display: flex; // 手機版顯示
    }

    /* 動畫效果：變形成 X */
    &.open span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    &.open span:nth-child(2) {
        opacity: 0;
    }
    &.open span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
// 1-2. 選單連結清單
const Menu = styled.ul`
    display: flex;
    list-style: none;

    @media (max-width: 768px) {
    /* 手機版變為側邊欄或下拉式 */
        flex-direction: column;
        position: absolute;
        top: 100px;
        right: -20%;
        background: ${props => props.theme.footerColor};
        width: 300px;
        height: 100vh;
        transition: transform 0.3s ease-in-out;
        
        /* 根據 Props 決定是否滑入 */
        transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
  color: inherit;
  text-shadow: ${props => props.theme.shadowS};
`;

// 大塊上半部橫式排版
const Flex = styled.div`
    display: flex;
`;

// header橫式nav
export const NAVbar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <Nav>
            {/* 漢堡按鈕 */}
            <Hamburger className={isOpen ? 'open' : ''} onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>

            <Menu isOpen={isOpen}>
                <li><Link to='/pickup' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', marginLeft: '12px' }}>塔羅占卜</Link></li>
                {/* <li><Link to='/about' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', marginLeft: '12px' }}>本站介紹</Link></li>
                <li><Link to='/learn' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', marginLeft: '12px' }}>學習塔羅</Link></li> */}
                <li><Link to='/collection' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', marginLeft: '12px' }}>塔羅圖鑑</Link></li>
                {/* <Attention para="想擁有專屬牌卡?"
                            para2="成為會員即可獲得更多福利" btn="免費體驗"/> */}
            </Menu>
        </Nav>
    );
};

// footer直式nav
export const NAvbar = () =>{

    return(
        <ul>
            <li><Link to='/pickup' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', color: 'inherit', marginLeft: '12px' }}>塔羅占卜</Link></li>
            {/* <li><Link to='/about' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', color: 'inherit', marginLeft: '12px' }}>本站介紹</Link></li>
            <li><Link to='/learn' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', color: 'inherit', marginLeft: '12px' }}>學習塔羅</Link></li> */}
            <li><Link to='/collection' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', color: 'inherit', marginLeft: '12px' }}>塔羅圖鑑</Link></li>
        </ul>
    );
}

// 基本款上方導覽列元件
const Navbar = () =>{

    const {isLoggedIn} = useAuth();
    // const navigate = useNavigate();

    // const handleLogout = async () => {
    //     await logout();  // 確保 logout 做完
    //     navigate("/");
    // };

    return(
    <Width80>
        <Flex>

            {/* 左邊:LOGO圖案 */}
            <div style={{width:"40%"}}>
                {!isLoggedIn ? (
                    <StyledLink to="/">TAROT PIC</StyledLink>
                ):(
                    <>
                    <Link to='/dashboard' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', color: 'inherit'}}>member</Link>
                    </>
                )}
            </div>

            {/* 右邊:BTN區 */}
            <Flex style={{width:"60%", justifyContent:'flex-end',alignItems:"baseline"}}>
                
                <NAVbar />                
               
                {/* 登入註冊鍵
                {!isLoggedIn ? (
                    <>
                    <Link to='/login' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', color: 'inherit', marginLeft: '12px' }}>登入</Link>
                    <Link to='/signup' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', color: 'inherit', marginLeft: '12px' }}>註冊</Link>
                    </>
                ):(
                    <Button onClick={handleLogout} style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', marginLeft: '12px' }}>
                        登出
                    </Button>
                )} */}
            </Flex>
        </Flex>
    </Width80>
    )
}


// 空白導覽列
export const NavbarBlank = () =>{

    const {isLoggedIn} = useAuth();
   

    return(
    <Width80>
            {/* 左邊:LOGO圖案 */}
            <div style={{width:"120px"}}>
                {!isLoggedIn ? (
                    <StyledLink to="/">TAROT PIC</StyledLink>
                ):(
                    <>
                    <Link to='/dashboard' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', color: 'inherit'}}>member</Link>
                    </>
                )}
            </div>
    </Width80>
    )
}

export default Navbar;