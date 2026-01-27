import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../context/loginContext";
import { Width80 } from "../context/styleTheme";

// BTN清單一排
const NavList = styled.ul`
    display: flex;
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

// 主要4大入口按紐(橫式)
export const NAVbar = () =>{
    return(
        <NavList>
            <li><Link to='/pickup' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', marginLeft: '12px' }}>塔羅占卜</Link></li>
            {/* <li><Link to='/about' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', marginLeft: '12px' }}>本站介紹</Link></li>
            <li><Link to='/learn' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', marginLeft: '12px' }}>學習塔羅</Link></li> */}
            <li><Link to='/collection' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', marginLeft: '12px' }}>塔羅圖鑑</Link></li>
            {/* <Attention para="想擁有專屬牌卡?"
                        para2="成為會員即可獲得更多福利" btn="免費體驗"/> */}

        </NavList>
    );
}

// 直式
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
            <div style={{width:"120px"}}>
                {!isLoggedIn ? (
                    <StyledLink to="/">TAROT PIC</StyledLink>
                ):(
                    <>
                    <Link to='/dashboard' style={{ cursor: 'pointer', fontSize: '20px', textDecoration: 'none', color: 'inherit'}}>member</Link>
                    </>
                )}
            </div>

            {/* 右邊:BTN區 */}
            <Flex style={{width:"100%", justifyContent:'flex-end',alignItems:"baseline"}}>
                
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