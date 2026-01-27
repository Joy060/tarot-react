import { useRef,useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


import styled from "styled-components";

import { CardM, TitleEng, TitlePara } from "../../context/styleTheme";
import DivLayout from "../../layout/DivLayout";

gsap.registerPlugin(ScrollTrigger);



const PromoteStyle = styled.div`
    background-color: ${props => props.theme.mainBGColor};
    /* border: 1px solid yellow; */
`;

const Promote = () =>{

    const containerRef = useRef(null);

    const publicUrl = process.env.PUBLIC_URL;


    useEffect(()=>{
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
              scrollTrigger:{
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 1,
                // markers: true,
              },
            });  

            tl.from(".img",{opacity:0}) 
              .from(".opa0",{opacity:0})
              .from(".img",{scale:2})
              .from(".title",{y:100,opacity:0})
              .from(".eng",{opacity:0})
              .from(".chi",{opacity:0})
        },containerRef);

        return () => ctx.revert();
    },[]);



    return(
        <PromoteStyle>
            <DivLayout title="本日推薦" ref={containerRef} divClass="opa0">
                    <CardM className="img" src={`${publicUrl}/img/Cups07.jpg`} />
                    <TitlePara className="title" >寶劍國王</TitlePara>
                    <TitleEng className="eng">Don't judge someone's past, 
                                when you haven't walked their journey!</TitleEng>
                    <TitlePara className="chi">如果你沒有經歷過別人所經歷的事情，就不要去評判一個人的過去！</TitlePara>
            </DivLayout>
        </PromoteStyle>
    )
}

export default Promote;
