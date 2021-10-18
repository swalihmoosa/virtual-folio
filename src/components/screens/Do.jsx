import React from 'react'
import bg from "../images/bg_banner.jpg"
import web from "../images/logo/palette-solid.svg"
import seo from "../images/logo/search-solid.svg"
import pencil from "../images/logo/pencil-ruler-solid.svg"
import webd from "../images/logo/tv-solid.svg"
import styled from 'styled-components'


export default function Do() {
    return (
        <>
            <Dosec>
                <section className="wrapper">
                    <Service>
                        <Sp>
                            Service
                        </Sp>
                    </Service>
                    <What>
                        What can i do?
                    </What>
                    <Ul>
                        <Li>
                            <Imgdiv>
                                <img src={web} alt="Web" />
                            </Imgdiv>
                            <H5>
                                Web Design
                            </H5>
                            <P>
                                There are many variations of passages of Lorem Ipsum available. 
                            </P>
                        </Li>
                        <Li>
                            <Imgdiv>
                                <img src={seo} alt="Web" />
                            </Imgdiv>
                            <H5>
                                SEO
                            </H5>
                            <P>
                                There are many variations of passages of Lorem Ipsum available. 
                            </P>
                        </Li>
                        <Li>
                            <Imgdiv>
                                <img src={pencil} alt="Web" />
                            </Imgdiv>
                            <H5>
                                UI / UX Design
                            </H5>
                            <P>
                                There are many variations of passages of Lorem Ipsum available. 
                            </P>
                        </Li>
                        <Li>
                            <Imgdiv>
                                <img src={webd} alt="Web" />
                            </Imgdiv>
                            <H5>
                                Web Development
                            </H5>
                            <P>
                                There are many variations of passages of Lorem Ipsum available. 
                            </P>
                        </Li>
                    </Ul>
                </section>
                <Backdiv>
                    <Backul>
                        <Backli>
                            <B>768</B>
                            <Bp>Clients</Bp>
                        </Backli>
                        <Backli>
                            <B>230</B>
                            <Bp>Project Complete</Bp>
                        </Backli>
                        <Backli>
                            <B>97</B>
                            <Bp>Project Ongoing</Bp>
                        </Backli>
                        <Backli>
                            <B>759</B>
                            <Bp>Client Satisfaction</Bp>
                        </Backli>
                    </Backul>
                </Backdiv>
            </Dosec>
        </>
    )
}
const Dosec = styled.section``
const Service = styled.div`
    background: #d9e2ff;
    text-align: center;
    color: #2a60f6;
    width: 15%;
    padding: 13px 0px;
    border-radius: 35px;
    margin: 0 auto 15px;`
const Sp = styled.p`
    font-weight: 700;`
const What = styled.h4`
    text-align: center;
    font-size: 33px;
    margin-bottom: 50px;
    font-weight: 500;`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10%;`
const Li = styled.li`
    width: 23%;`
const Imgdiv = styled.div`
    width: 25%;
    background: #d9e2ff;
    border-radius: 50%;
    padding: 10px;
    margin: 0 auto 20px;`
const H5 = styled.h5`
    text-align: center;
    color: #2a60f6;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;`
const P = styled.p`
    text-align: center;
    font-size: 17px;`
const Backdiv = styled.div`
    background:url(${bg});
    background-size: cover;
    background-position: center;
    padding: 10%;`
const Backul = styled.ul`
    display: flex;
    justify-content: space-between;`
const Backli = styled.li``
const B = styled.p`
    color: #Fff;
    font-size: 40px;
    font-weight: 900;
    text-align: center;`
const Bp = styled.p`
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-align: center;`