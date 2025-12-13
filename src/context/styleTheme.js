import styled from "styled-components";

// 發光色變數
const shinyShadow = "#F5F3F6";
const blackShadow = "rgba(0, 0, 0, 0.4)";

// 主色背景樣式
export const MainBGColorStyle = styled.div`
    background-color: ${props => props.theme.mainBGColor};
`;

export const FooterColorStyle = styled.div`
    background-color: ${props => props.theme.footerColor};
`;

// 內文縮排8成
export const Width80 = styled.div`
    margin: 0 10%;
    position: relative;
    /* border: 1px solid blue; */
`;

const theme = {
    // 顏色(主文字3、按鈕文字2、內文1、主背景色0、按鈕背景-1、底色-2、透明黑白、發光色)
    mainTextColor: "#F5F3F6",
    btnTextColor: "#C9C2CF",
    paraColor: "#B9A7C7",
    mainBGColor: "#280741",
    btnBGColor: "#180429",
    footerColor: "#0E0218",
    opacityBlackColor: "rgba(0, 0, 0, 0.4)",
    opacityWhiteColor: "rgba(255, 255, 255, 0.2)",
    shinyColor: "#EA9FED",

    // 文字大小
    titleL: "64px",
    titleM: "28px",
    titleS: "16px",
    titleE: "22px",

    // 段落間距
    paddingXL: "120px",
    paddingL: "60px",
    paddingM: "48px",
    paddingS: "24px",
    paddingSS: "12px",

    // 圓角樣式
    radiusS:"12px",

    // 發光樣式
    shadowS: `0px 0px 9px ${shinyShadow}`,
    shadowM: `0px 0px 16px ${shinyShadow}`,
    shadowL: `0px 0px 25px ${shinyShadow}`,
    shadowBlackS: `0px 0px 9px ${blackShadow}`,
    shadowBlackM: `0px 0px 16px ${blackShadow}`,
    shadowBlackL: `0px 0px 25px ${blackShadow}`,

};

export default theme;

// 固定風格文字
export const TitleBig =styled.h2`
    font-size: ${props => props.theme.titleL};
    color: ${props => props.theme.mainTextColor};
`;
export const TitleSmall =styled.h4`
    font-size: ${props => props.theme.titleM};
    margin: ${props => props.theme.paddingSS};
`;
export const TitlePara =styled.p`
    font-size: ${props => props.theme.titleS};
    color: ${props => props.theme.paraColor};
    margin:4px 12px;

`;
export const TitleEng =styled.h3`
    font-size: ${props => props.theme.titleE};
`;

/* 星空圖 + 對齊至中心 */
export const CCenter =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 800px;

    background-image: 
        linear-gradient(
            ${props => props.theme.opacityBlackColor}, 
            ${props => props.theme.opacityBlackColor}
            ),
        url("/img/brightNight.jpg");
    background-size: cover;
    `;

export const CenterDiv =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const ButterflyCenter =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 700px;

    background-image: 
        linear-gradient(
            ${props => props.theme.opacityBlackColor}, 
            ${props => props.theme.opacityBlackColor}
            ),
        url("/img/butterfly.jpg");
    background-size: cover;
    `;

// 不同卡片大小XL、L、M、S
export const CardXL = styled.img`
    width: 300px;

    &:hover{
        box-shadow: 0px 0px 12px  ${props => props.theme.mainTextColor}
    }
`;
export const CardL = styled(CardXL)`
    width: 150px;
`;
export const CardM = styled(CardXL)`
    width: 100px;
`;
export const CardS = styled(CardXL)`
    width: 76px;
`;

