import styled from "styled-components";

export const BtnScrollTo = styled.div`
    
    width: 144px;
    line-height: 44px;
    text-align: right;
    padding-right: 12px ;
    color: ${props => props.theme.mainTextColor};
    border-left: 5px solid ${props => props.theme.paraColor} ;
    margin: ${props => props.theme.paddingS};
    
    &:hover{
        border-left: none ;
        border-radius: ${props => props.theme.radiusS};
        background-color: ${props => props.theme.opacityBlackColor};
    }
`;