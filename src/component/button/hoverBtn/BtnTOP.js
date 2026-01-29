import { useEffect, useState } from "react";
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
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 52px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    z-index: 99;

    opacity:${props =>(props.$isVisible? 1 : 0)}; 
    visibility: ${props =>(props.$isVisible? 'visible':'hidden')};
    transition: opacity 0.3s ease-in-out;

    &:hover{
        box-shadow: ${props => props.theme.shadowL};    
        background-color: ${props => props.theme.footerColor};
    } 
    `;



// ---------------------
// TOP按鍵物件:生成並匯出


const BtnTOP = ()=>{
    
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(()=>{
        const toggleVisibility = ()=>{
            if(window.pageYOffset >300){
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll',toggleVisibility);
        return()=>window.removeEventListener('scroll',toggleVisibility);
    },[]);
    
    const scrollToTop = () => {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    };

    return(
        <span>
            {isVisible &&(
                <TopStyle $isVisible={isVisible} onClick={scrollToTop}>
                    <Square2></Square2>
                    <Square1></Square1>
                    <TOP>TOP</TOP>
                </TopStyle>
            )}
        </span>
    )
}

export default BtnTOP;
