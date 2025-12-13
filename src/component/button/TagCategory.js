import styled from "styled-components";

export const TagCategoryOn = styled.button`
    background-color: ${props => props.theme.paraColor};
    color: ${props => props.theme.footerColor};
    border-radius: ${props => props.theme.radiusS};
    width: 120px;
    max-width: 185px;
    height: 44px;
    margin: 0 4px;
    border: 0;
    `;

export const TagCategoryOff =styled(TagCategoryOn)`
    background-color: ${props => props.theme.opacityWhiteColor};
    color:${props => props.theme.btnTextColor};
    border: 1px solid ${props => props.theme.mainTextColor};
    
    &:hover{
        background-color: ${props => props.theme.btnTextColor};
        color:${props => props.theme.btnBGColor};    
        }
    `;
