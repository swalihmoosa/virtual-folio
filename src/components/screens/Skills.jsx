import React from 'react'
import styled from 'styled-components'

export default function Skills() {
    return (
        <>
            <Skillsec>
                <section className="wrapper">
                    <H4>
                        My Skills
                    </H4>
                    <Skillsdiv>
                        <Skill>
                            <H5>
                                Coding Skills
                            </H5>
                            <H6>
                                Javascript
                            </H6>
                            <Border>
                                <Java>
                                    <P>86%</P>
                                </Java>
                            </Border>
                            <H6>
                                PHP
                            </H6>
                            <Border>
                                <Php>
                                    <P>86%</P>
                                </Php>
                            </Border>
                            <H6>
                                HTML + CSS
                            </H6>
                            <Border>
                                <Html>
                                    <P>100%</P>
                                </Html>
                            </Border>
                            <H6>
                                Python
                            </H6>
                            <Border>
                                <Python>
                                    <P>90%</P>
                                </Python>
                            </Border>
                        </Skill>
                        <Skill>
                            <H5>
                                Design Skills
                            </H5>
                            <H6>
                                UI / UX Dsign
                            </H6>
                            <Border>
                                <Ui>
                                    <P>92%</P>
                                </Ui>
                            </Border>
                            <H6>
                                Web Design
                            </H6>
                            <Border>
                                <Web>
                                    <P>99%</P>
                                </Web>
                            </Border>
                            <H6>
                                Logo Design
                            </H6>
                            <Border>
                                <Logo>
                                    <P>79%</P>
                                </Logo>
                            </Border>
                        </Skill>
                    </Skillsdiv>
                </section>
            </Skillsec>
        </>
    )
}
const Skillsec = styled.section`
    background: #fff;`
const H4 = styled.h4`
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 25px;
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
const Skillsdiv = styled.div`
    display: flex;
    justify-content: space-between;
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
const Skill = styled.div`
    width: 47%;
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
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 25px;
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
const H6 = styled.h6`
    font-size: 20px;
    font-weight: 500;
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
const Border = styled.div`
    border: 3px solid #2a60f6;
    border-radius: 15px;
    margin-bottom: 25px;
    padding: 2px;
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
    color: #fff;
    font-weight: 700;
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
const Java = styled.div`
    background: #2a60f6;
    border-radius: 15px;
    width: 86%;
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
const Php = styled.div`
    background: #2a60f6;
    border-radius: 15px;
    width: 86%;
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
const Html = styled.div`
    background: #2a60f6;
    border-radius: 15px;
    width: 100%;
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
const Python = styled.div`
    background: #2a60f6;
    border-radius: 15px;
    width: 90%;
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
const Ui = styled.div`
    background: #2a60f6;
    border-radius: 15px;
    width: 92%;
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
const Web = styled.div`
    background: #2a60f6;
    border-radius: 15px;
    width: 99%;
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
const Logo = styled.div`
    background: #2a60f6;
    border-radius: 15px;
    width: 79%;
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