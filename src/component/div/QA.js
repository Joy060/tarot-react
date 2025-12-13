import styled from "styled-components";
import { Width80 } from "../../context/styleTheme";
import DivLayout from "../../layout/DivLayout";

// 單一QA塊
const QADiv = styled.span`
    background-color: ${props => props.theme.opacityWhiteColor};
    width: 40%;
    border-radius: ${props => props.theme.radiusS};
    margin: 16px 32px;
    padding: 12px;
    line-height: 24px;
    text-align: center;
    color: ${props => props.theme.mainTextColor};
    /* border: 1px solid yellow; */
`;

// QA區塊
const QADivStyle = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

// Div元件
const QA = () =>{
    return(
        
        <Width80>
            <DivLayout title={"常問QA"}>
                <QADivStyle>
                        <QADiv>
                            <p>什麼是塔羅牌?</p>
                            <p>是一種占卜方式。</p>
                        </QADiv>
                        <QADiv>
                            <p>什麼時候可以重算?</p>
                            <p>當事情有所變化時。</p>
                        </QADiv>
                        <QADiv>
                            <p>我可以找你解牌嗎?</p>
                            <p>可以試試寄信但不一定會回。</p>
                        </QADiv>
                        <QADiv>
                            <p>為什麼占卜要選塔羅牌</p>
                            <p>方法不限，只要自己願意接受就行。</p>
                        </QADiv>

                </QADivStyle>
            </DivLayout>
        </Width80>
    )
}

export default QA;