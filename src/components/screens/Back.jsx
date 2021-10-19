import React from 'react'
import styled from 'styled-components'
import bg from "../images/bg_banner.jpg"


export default function Back() {
    return (
        <>
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
        </>
    )
}
const Backdiv = styled.div`
    // background:url(${bg});
    background:transparent;
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