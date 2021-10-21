import React from 'react'
import styled from 'styled-components'

export default function Back() {
    return (
        <>
            <Backdiv id="backdiv">
                    <Backul>
                        <Backli>
                            <B id="client"></B>
                            <Bp>Clients</Bp>
                        </Backli>
                        <Backli>
                            <B id="project"></B>
                            <Bp>Project Complete</Bp>
                        </Backli>
                        <Backli>
                            <B id="ongo"></B>
                            <Bp>Project Ongoing</Bp>
                        </Backli>
                        <Backli>
                            <B id="sat"></B>
                            <Bp>Client Satisfaction</Bp>
                        </Backli>
                    </Backul>
                </Backdiv>
        </>
    )
}
const Backdiv = styled.div`
    background:transparent;
    background-size: cover;
    background-position: center;
    padding: 10%;
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
const Backul = styled.ul`
    display: flex;
    justify-content: space-between;
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
const Backli = styled.li`
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
        width: 45%;
        &:nth-child(1){
            margin-bottom: 5%;
        }
        &:nth-child(2){
            margin-bottom: 5%;
        }
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width: 75%;
        margin: 0 auto 5%;
        &:last-child{
            margin-bottom:0;
        }
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const B = styled.p`
    color: #Fff;
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        font-size: 25px;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Bp = styled.p`
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        font-size: 20px;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`



document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', typefunction);
    var bar = document.getElementById("backdiv");
    var sticky = bar.offsetTop - 500;

    function typefunction(){
        if (window.pageYOffset >= sticky){
            type();
        }
    }
})
    let i = 0;
    let client = 768;
    let project = 230;
    let ongo = 97;
    let sat = 699;
    let speed = 200;


function type() {
    if (i < client) {
        document.getElementById("client").innerHTML = i + 1;
        i++;
        setTimeout(type, speed);
    }
    if (i < project) {
        document.getElementById("project").innerHTML = i + 1;
        i++;
        setTimeout(type, speed);
    }
    if (i < ongo) {
        document.getElementById("ongo").innerHTML = i + 1;
        i++;
        setTimeout(type, speed);
    }
    if (i < sat) {
        document.getElementById("sat").innerHTML = i + 1;
        i++;
        setTimeout(type, speed);
    }
}

