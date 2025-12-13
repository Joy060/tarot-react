import styled from "styled-components";
import { BtnScrollTo } from "../component/button/hoverBtn/BtnScrollTo";


const HeroTagStyle = styled.div`
    width: 30%;
    padding: auto;
`;


export const HeroTag = ({tags = []})=>{

    const handleScroll = (id) =>{
        const targetElement = document.getElementById(id);
        if(targetElement){
            targetElement.scrollIntoView({behavior:"smooth"});
        }
    }

    return(
        <HeroTagStyle>
            {tags.map((tag,index)=>(
                <BtnScrollTo key={index} onClick={() => handleScroll(tag.target)}>
                    {tag.label}
                </BtnScrollTo>
            ))}
        </HeroTagStyle>
    );
};

