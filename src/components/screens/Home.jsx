import React from 'react'
import styled from "styled-components"
import arrow from "../images/logo/chevron-down-solid.svg"
// import eye from "../images/logo/eye-slash-regular.svg"

export default function Home() {
    return (
        <>
            <Homesec id="home">
                <Overlay>
                    <Header>
                        <Headersec className="wrapper">
                            <Logo>
                                <a href="/">
                                    V-Folio
                                </a>
                            </Logo>
                            <Nav>
                                <Navli><a href="/">Home</a></Navli>
                                <Navli><a href="/">About</a></Navli>
                                <Navli><a href="/">Portfolio</a></Navli>
                                <Navli><a href="/">Blog</a></Navli>
                                <Navli><a href="/">Contact</a></Navli>
                            </Nav>
                            <En href="/">
                                En
                            </En>
                            <Icon id="icon" onClick={action}>
                                <Img src={arrow} alt="Arrow" />
                            </Icon>
                            <Mobnav id="nav">
                                <Navli><a href="/">Home</a></Navli>
                                <Navli><a href="/">About</a></Navli>
                                <Navli><a href="/">Portfolio</a></Navli>
                                <Navli><a href="/">Blog</a></Navli>
                                <Navli><a href="/">Contact</a></Navli>
                            </Mobnav>
                            <Moboverlay id="overlay">

                            </Moboverlay>
                        </Headersec>
                    </Header>
                    <Spotlight>
                        <P>
                            Welcome
                        </P>
                        <Name>
                            I'am <B>Swalih Moosa</B>
                        </Name>
                        <Design href="/">
                            UI/UX & Web Designer
                        </Design>
                    </Spotlight>
                </Overlay>
            </Homesec>
        </>
    )
}
const Overlay = styled.section`
    background: rgba(0,0,0,.6);`
const Homesec = styled.section`
    padding:25px 0 0 0;`
const Header = styled.header`
    background:#5e5c5c`
const Headersec = styled.section`
    display: flex;
    justify-content: space-between;
    padding:25px 0;
    align-items: center;`
const Logo = styled.h1`
    a{
        color:#fff;
        font-weight:700;
        font-size: 20px;
    }`
const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 45%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 60%;
    }
    @media all and (max-width: 640px){
        display:none;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2a60f6;
    padding: 12px;
    display:none;`
const Img = styled.img`
    filter: invert(1);`
const Mobnav = styled.ul`
    width: 90%;
    position:fixed !important;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    display:none;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Moboverlay = styled.section`
    background: rgba(0,0,0,.6);
    display:none;`
const Navli = styled.li`
    a{
        color:#fff;
        font-weight:700;
        font-size: 16px;
    }`
const En = styled.a`
    background:#2a60f6;
    border-radius: 50%;
    padding: 20px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    @media all and (max-width: 640px){
        display:none;
    }`
const Spotlight = styled.section`
    padding: 15% 10%;`
const P = styled.p`
    text-align: center;
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 3%;
    animation-duration: 1s;
    animation-name: slidep;
    @keyframes slidep {
        0% {
          margin-left: 300px;
        }
        100% {
          margin-left: 0%;
        }
    }`
const Name = styled.h3`
    text-align: center;
    color: #fff;
    font-size: 45px;
    margin-bottom: 3%;
    animation-duration: 1s;
    animation-name: slidename;
    animation-iteration-count: one;
    @keyframes slidename {
        0% {
          margin-left: -300px;
        }
        100% {
          margin-left: 0%;
        }
    }
    @media all and (max-width: 640px){
        font-size: 35px;
    }`
const B = styled.b`
    color:#2a60f6;`
const Design = styled.a`
    background: #404c70;
    display: block;
    width: 25%;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    color:#2a60f6;
    border-radius: 30px;
    padding: 20px 25px;
    @media all and (max-width: 1280px){
        width: 30%;
    }
    @media all and (max-width: 980px){
        width: 40%;
    }
    @media all and (max-width: 768px){
        width: 45%;
    }
    @media all and (max-width: 640px){
        width: 60%;
    }
    @media all and (max-width: 480px){
        width: 80%;
    }
    @media all and (max-width: 360px){
        width: 90%;
    }
    @media all and (max-width: 320px){

    }
`
// @media all and (max-width: 1280px){
// }
// @media all and (max-width: 980px){
// }
// @media all and (max-width: 768px){
// }
// @media all and (max-width: 640px){
// }
// @media all and (max-width: 480px){
// }
// @media all and (max-width: 360px){
// }
// @media all and (max-width: 320px){
// }

function action(){
    var icon = document.getElementById("icon");
    var menu = document.getElementById("nav");
    var overlay = document.getElementById("overlay");


    menu.classList.add("nav");
}
