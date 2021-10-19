import React from 'react'
import styled from 'styled-components'

export default function Education() {
    return (
        <>
            <Educationsec>
                <section className="wrapper">
                    <Educations>
                        <Experience>
                            <H3>Education</H3>
                            <Ul>
                            <Li className="one">
                                    <Head>
                                        <Border>
                                            <Color>
                                            </Color>
                                        </Border>
                                    </Head>
                                    <Description>
                                        <Year>
                                            <P>
                                                2011
                                            </P>
                                        </Year>
                                        <Des>
                                            <H4>
                                                Specialise of Course
                                            </H4>
                                            <H5>
                                                University of Study
                                            </H5>
                                            <Dp>
                                                Threre are many variations of passages of Lorem ipsum available,but the majority have suffered. 
                                            </Dp>
                                        </Des>
                                    </Description>
                                </Li>
                                <Li className="two">
                                    <Head>
                                        <Border>
                                            <Color>
                                            </Color>
                                        </Border>
                                    </Head>
                                    <Description>
                                        <Year>
                                            <P>
                                                2011
                                            </P>
                                        </Year>
                                        <Des>
                                            <H4>
                                                Specialise of Course
                                            </H4>
                                            <H5>
                                                University of Study
                                            </H5>
                                            <Dp>
                                                Threre are many variations of passages of Lorem ipsum available,but the majority have suffered. 
                                            </Dp>
                                        </Des>
                                    </Description>
                                </Li>
                                <Li className="three">
                                    <Head>
                                        <Border>
                                            <Color>
                                            </Color>
                                        </Border>
                                    </Head>
                                    <Description>
                                        <Year>
                                            <P>
                                                2011
                                            </P>
                                        </Year>
                                        <Des>
                                            <H4>
                                                Specialise of Course
                                            </H4>
                                            <H5>
                                                University of Study
                                            </H5>
                                            <Dp>
                                                Threre are many variations of passages of Lorem ipsum available,but the majority have suffered. 
                                            </Dp>
                                        </Des>
                                    </Description>
                                </Li>
                            </Ul>
                        </Experience>
                        <Experience>
                        <H3>Experience</H3>
                            <Ul>
                            <Li className="one">
                                    <Head>
                                        <Border>
                                            <Color>
                                            </Color>
                                        </Border>
                                    </Head>
                                    <Description>
                                        <Year>
                                            <P>
                                                2011
                                            </P>
                                        </Year>
                                        <Des>
                                            <H4>
                                                Specialise of Course
                                            </H4>
                                            <H5>
                                                University of Study
                                            </H5>
                                            <Dp>
                                                Threre are many variations of passages of Lorem ipsum available,but the majority have suffered. 
                                            </Dp>
                                        </Des>
                                    </Description>
                                </Li>
                                <Li className="two">
                                    <Head>
                                        <Border>
                                            <Color>
                                            </Color>
                                        </Border>
                                    </Head>
                                    <Description>
                                        <Year>
                                            <P>
                                                2011
                                            </P>
                                        </Year>
                                        <Des>
                                            <H4>
                                                Specialise of Course
                                            </H4>
                                            <H5>
                                                University of Study
                                            </H5>
                                            <Dp>
                                                Threre are many variations of passages of Lorem ipsum available,but the majority have suffered. 
                                            </Dp>
                                        </Des>
                                    </Description>
                                </Li>
                                <Li className="three">
                                    <Head>
                                        <Border>
                                            <Color>
                                            </Color>
                                        </Border>
                                    </Head>
                                    <Description>
                                        <Year>
                                            <P>
                                                2011
                                            </P>
                                        </Year>
                                        <Des>
                                            <H4>
                                                Specialise of Course
                                            </H4>
                                            <H5>
                                                University of Study
                                            </H5>
                                            <Dp>
                                                Threre are many variations of passages of Lorem ipsum available,but the majority have suffered. 
                                            </Dp>
                                        </Des>
                                    </Description>
                                </Li>
                            </Ul>
                        </Experience>
                    </Educations>
                </section>
            </Educationsec>
        </>
    )
}
const Educationsec = styled.section`
    padding: 10% 0;
    background: #fff;`
const Educations = styled.div`
    display: flex;
    justify-content: space-between;`
const Experience = styled.div`
    width: 47%;`
const H3 = styled.h3`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 25px;`
const Ul = styled.ul`
    border-left: 2px dotted;
    position: relative;
    height: 666px;`
const Li = styled.li`
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: -13px;
    &.one{
    }
    &.two{
        top: 36%;
    }
    &.three{
        top: 72%;
    }
`
const Head = styled.div``
const Border = styled.div`
    border: 2px solid #2a60f6;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 3px;
    background:#fff;`
const Color = styled.div`
    background: #2a60f6;
    width: 15px;
    height: 15px;
    border-radius: 50%;`
const Year = styled.div`
    background: #2a60f6;
    width: 75%;
    padding: 6px 0px 6px 15px;
    color: #fff;
    font-weight: 900;
    border-radius: 20px 0px 35px 20px;
    margin-bottom: 25px;
`
const P = styled.p``
const Description = styled.div`
    width: 93%;`
const Des = styled.div`
    background: #dbdbdb;
    padding: 15px;
    border-radius: 5px`
const H4 = styled.h4`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;`
const H5 = styled.h5`
    font-size: 17px;
    color: #2a60f6;
    font-weight: 700;
    margin-bottom: 15px;`
const Dp = styled.p``
