import styled from "styled-components";

const TagSwitchOn = styled.button`
    background-color: ${props => props.theme.paraColor};
    color: ${props => props.theme.footerColor};
    width: 150px;
    height: 44px;
    border: 0;
    
    &:hover{
        font-size: 20px;
    }
    `;

const TagSwitchOff =styled(TagSwitchOn)`
    background-color: ${props => props.theme.footerColor};
    color: ${props => props.theme.paraColor};
    `;

const TagSwitchStyle=styled.div`
    margin: 10px 4px;
    border-radius: ${props => props.theme.radiusS};
    width: 300px;
    height: 44px;
    
    /* hover限制 */
    display: flex;
    line-height: 44px;
    overflow: hidden;
    box-sizing: border-box;
`;

export const TagSwitch = ()=>{
    return(
        <TagSwitchStyle>
            <TagSwitchOn>作品</TagSwitchOn>
            <TagSwitchOff>圖鑑</TagSwitchOff>
        </TagSwitchStyle>
    );
};
