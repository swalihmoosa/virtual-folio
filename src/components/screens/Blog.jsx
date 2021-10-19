import React from 'react'
import one from "../images/work/work-9.jpg"
import two from "../images/work/work-6.jpg"
import three from "../images/work/work-1.jpg"
import styled from 'styled-components'

export default function Blog() {
    return (
        <>
            <Blogsec>
                <section className="wrapper">
                    <Blogn>
                        Blog
                    </Blogn>
                    <Latest>
                        Latest Post
                    </Latest>
                    <Ul>
                        <Li>
                            <Top>
                                <img src={one} alt="Blog" />
                            </Top>
                            <Bottom>
                                <Tech>
                                    Technology
                                </Tech>
                                <Fund>
                                    Invision design forward fund
                                </Fund>
                                <Date>
                                    May 22 , 2018
                                </Date>
                            </Bottom>
                        </Li>
                        <Li>
                            <Top>
                                <img src={two} alt="Blog" />
                            </Top>
                            <Bottom>
                                <Tech>
                                    Business
                                </Tech>
                                <Fund>
                                    Announcing a plan for small teams
                                </Fund>
                                <Date>
                                    May 22 , 2018
                                </Date>
                            </Bottom>
                        </Li>
                        <Li>
                            <Top>
                                <img src={three} alt="Blog" />
                            </Top>
                            <Bottom>
                                <Tech>
                                    Design
                                </Tech>
                                <Fund>
                                    5 basic tips for illustrating
                                </Fund>
                                <Date>
                                    May 22 , 2018
                                </Date>
                            </Bottom>
                        </Li>
                    </Ul>
                    <See>
                        See All Posts
                    </See>
                </section>
            </Blogsec>
        </>
    )
}
const Blogsec = styled.section`
    padding: 10% 0;
    background:#fff;`
const Blogn = styled.h6`
    background: #d9e2ff;
    text-align: center;
    color: #2a60f6;
    width: 15%;
    padding: 13px 0px;
    border-radius: 35px;
    margin: 0 auto 15px;
    font-weight: 700;
    font-size: 16px;`
const Latest = styled.p`
    text-align: center;
    font-size: 33px;
    margin-bottom: 50px;
    font-weight: 500;`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;`
const Li = styled.li`
    width: 31%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover{
        transform: scale(1.1);
        cursor:pointer;
    }`
const Top = styled.div``
const Bottom = styled.div`
    padding: 25px 15px;
    background:#fff;`
const Tech = styled.h6`
    color: #2a60f6;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;`
const Fund = styled.p`
    color: #000;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;`
const Date = styled.p`
    color: #000;
    font-size: 15px;
    font-weight: 700;`
const See = styled.button`
    background: #2a60f6;
    border: 2px solid #2a60f6;
    padding: 15px 25px;
    color: #fff;
    font-weight: 900;
    border-radius: 12px;
    margin: 0 auto;
    display: block;
    &:hover{
        background:#fff;
        color:#2a60f6;
        cursor:pointer;
    }`
