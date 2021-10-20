import React from 'react'
import styled from "styled-components"

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
    width: 45%;`
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
`