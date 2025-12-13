import styled from "styled-components";


// 淺色牌style
const Square1 = styled.div`
    position: absolute;
    width: 52px;
    height: 80px;
    rotate: 30deg;
    background-color: ${props => props.theme.mainBGColor};
    
    `;
    
// 深色牌style
const Square2 = styled(Square1)`
    rotate: 12deg;
    background-color: ${props => props.theme.btnBGColor};
    box-shadow: ${props => props.theme.shadowM};    
    
    `;

// TOP文字style
const TOP = styled.span`
    position: absolute;
    `;

// TOP按鍵style
const TopStyle = styled.div`
    position: relative;
    width: 52px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    
    &:hover{
        box-shadow: ${props => props.theme.shadowL};    
        background-color: ${props => props.theme.footerColor};
    } 
    `;



// ---------------------
// TOP按鍵物件:生成並匯出
const BtnTOP = ()=>{

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <span>
            <TopStyle onClick={scrollToTop}>
                <Square2></Square2>
                <Square1></Square1>
                <TOP>TOP</TOP>
            </TopStyle>
        </span>
    )
}

export default BtnTOP;
