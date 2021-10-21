import React from 'react'
import styled from 'styled-components'
import one from "../images/logo/company_1.svg"
import two from "../images/logo/company_2.svg"
import three from "../images/logo/company_3.svg"
import four from "../images/logo/company_4.svg"
import five from "../images/logo/company_5.svg"
import six from "../images/logo/company_6.svg"
import seven from "../images/logo/company_7.svg"
import eight from "../images/logo/company_8.svg"

export default function Company() {
    return (
        <>
            <Comapnysec>
                <Ul>
                    <Li className="one">
                        <img src={one} alt="Company" />
                    </Li>
                    <Li className="two">
                        <img src={two} alt="Company" />
                    </Li>
                    <Li className="two">
                        <img src={three} alt="Company" />
                    </Li>
                    <Li className="three">
                        <img src={four} alt="Company" />
                    </Li>
                    <Li className="four">
                        <img src={five} alt="Company" />
                    </Li>
                    <Li className="five">
                        <img src={six} alt="Company" />
                    </Li>
                    <Li className="five">
                        <img src={seven} alt="Company" />
                    </Li>
                    <Li className="six">
                        <img src={eight} alt="Company" />
                    </Li>
                </Ul>
            </Comapnysec>
        </>
    )
}
const Comapnysec = styled.section`
    background: #171925;
    padding: 10% 0;
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
    flex-wrap: wrap;
    width:90%;
    margin:0 auto;
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
    border: 2px solid #6a6a6a;
    padding: 100px;
    width:25%;
    &:hover{
        cursor:pointer;
    }
    &.one{
        border-left: 0;
        border-top: 0;
    }
    &.two{
        border-top: 0;
    }
    &.three{
        border-top: 0;
        border-right: 0;
    }
    &.four{
        border-left: 0;
        border-bottom: 0;
    }
    &.five{
        border-bottom: 0;
    }
    &.six{
        border-bottom: 0;
        border-right: 0;
    }
    @media all and (max-width: 1280px){
        padding: 60px;
    }
    @media all and (max-width: 980px){
        padding: 50px
    }
    @media all and (max-width: 768px){
        padding: 40px;
    }
    @media all and (max-width: 640px){
        padding: 25px;
    }
    @media all and (max-width: 480px){
        padding: 15px;
    }
    @media all and (max-width: 360px){
        padding: 10px
    }
    @media all and (max-width: 320px){
    }`