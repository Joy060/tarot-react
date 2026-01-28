import styled from "styled-components";
import { TitleSmall, Width80 } from "../context/styleTheme";
import { forwardRef } from "react";


// 主題區 樣式設定(標題+內文)
const DivStyle = styled.div`
    text-align: center;
    padding: ${props => props.theme.paddingXL} 0;
    line-height: ${props => props.theme.paddingL};
`;

const BlackDivStyle = styled(DivStyle)`
        background-color: ${props => props.theme.footerColor};
    `;

export const BlackDivLayout = ({children,title}) =>{
    return(
        <BlackDivStyle>
            <Width80>
                <TitleSmall>{title}</TitleSmall>
                {children}
            </Width80>
        </BlackDivStyle>
    )
};

// 主題區 附樣式、變數之元件
const DivLayout = forwardRef(({children,title,className,divClass },ref) =>{
    return(
            <DivStyle ref={ref} className={className}>
                <TitleSmall className={divClass}>{title}</TitleSmall>
                {children}
            </DivStyle>
    );
});

export default DivLayout;
