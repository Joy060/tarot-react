import styled from "styled-components";


// 一個點 樣式
export const DotStyle = styled.div`
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    `;
export const DotBlackStyle = styled.div`
    width: 24px;
    height: 24px;
    background-color: gray;
    border-radius: 50%;
    `;

// 一點+文字容器樣式
export const DotWordStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
`;

// 一條線 樣式
export const LineStyle = styled.div`
    width: 100%;
    height: 4px;
    margin: 0 20px 24px 20px;
    background-color: white;
`;



