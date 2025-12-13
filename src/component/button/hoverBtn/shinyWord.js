import styled from "styled-components";

export const ShinyWord=styled.span`
    &:hover{
        text-shadow: 0px 0px 12px  ${props => props.theme.mainTextColor}
    }
`;