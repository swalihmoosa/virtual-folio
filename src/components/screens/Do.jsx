import React from 'react'
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
            </Dosec>
        </>
    )
}
const Dosec = styled.section`
    background: #fff;
    padding-bottom: 3%;
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
const Service = styled.div`
    background: #d9e2ff;
    text-align: center;
    color: #2a60f6;
    width: 15%;
    padding: 13px 0px;
    border-radius: 35px;
    margin: 0 auto 15px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width: 25%;
    }
    @media all and (max-width: 480px){
        width: 33%;
    }
    @media all and (max-width: 360px){
        width: 50%;
    }
    @media all and (max-width: 320px){
    }`
const Sp = styled.p`
    font-weight: 700;`
const What = styled.h4`
    text-align: center;
    font-size: 33px;
    margin-bottom: 50px;
    font-weight: 500;
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
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10%;
    flex-wrap: wrap;
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
const Li = styled.li`
    width: 23%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 45%;
        &:nth-child(1){
            margin-bottom: 40px;
        }
        &:nth-child(2){
            margin-bottom: 40px;
        }
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        width: 90%;
        margin: 0 auto 40px;
    &:last-child{
        margin-bottom: 0px;
    }
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Imgdiv = styled.div`
    width: 25%;
    background: #d9e2ff;
    border-radius: 50%;
    padding: 10px;
    margin: 0 auto 20px;
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
const H5 = styled.h5`
    text-align: center;
    color: #2a60f6;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
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
const P = styled.p`
    text-align: center;
    font-size: 17px;
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