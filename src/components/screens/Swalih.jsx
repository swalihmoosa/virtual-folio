import React from 'react'
import styled from 'styled-components'
import person from "../images/IMG_6597.jpg"

export default function Stephen() {
    return (
        <>
            <Stephensec>
                <Secwrap className="wrapper">
                    <Left>
                    </Left>
                    <Imgborder>
                            <Img src={person} alt="Stephen" />
                        </Imgborder>
                    <Right>
                        <Name>
                            Swalih Moosa
                        </Name>
                        <Position>
                            UI/UX & Web Designer
                        </Position>
                        <Description>
                            There are many variation sof passages of Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, 
                            unde adipisci quos cumque voluptate doloremque. Perferendis nesciunt labore, commodi illum dicta aspernatur, 
                            consequatur fugit blanditiis atque ut debitis! Provident, assumenda!
                        </Description>
                        <Ul>
                            <Li className="one">
                                <Round></Round>
                                <P><B>From:   </B>Pazhayannur,Thrissur</P>
                            </Li>
                            <Li className="two">
                                <Round></Round>
                                <P><B>Lives In:   </B>Pazhayannur,Thrissur</P>
                            </Li>
                            <Li className="three">
                                <Round></Round>
                                <P><B>Age:   </B>22</P>
                            </Li>
                            <Li className="four">
                                <Round></Round>
                                <P><B>Gender:   </B>Male</P>
                            </Li>
                        </Ul>
                        <Button href="/">
                            Download CV
                        </Button>
                    </Right>
                </Secwrap>
            </Stephensec>
        </>
    )
}
const Stephensec = styled.section`
    background: #fff;
    padding: 0 0 15% 0;`
const Secwrap = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 10% 0;
    flex-wrap: wrap;
    position:relative;`
const Left = styled.div`
    width: 26%;
    border: 6px solid #2a60f6;
    position:relative;
    margin-left:50px;
    height: 450px;
    @media all and (max-width: 1280px){
        display: none;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 560px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 410px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Imgborder = styled.div`
    position:absolute;
    width: 25%;
    left: 0;
    top: 25%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Img = styled.img`
    border-radius:10px;`
const Right = styled.div`
    width: 55%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 90%;
        margin: 0 auto;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Name = styled.h3`
    font-size: 30px;
    margin-bottom: 5px;
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
const Position = styled.h5`
    margin-bottom: 25px;
    color: #2a60f6;
    font-size: 16px;
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
const Description = styled.p`
    margin-bottom:25px;`
const Ul = styled.ul`
    margin-bottom: 45px;
    padding: 0 25px;
    border-left: 2px dotted;
    width: 40%;
    height: 40%;
    position:relative;
    @media all and (max-width: 1280px){
        width: 55%;
    }
    @media all and (max-width: 980px){
        width: 75%;
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
    display:flex;
    position:absolute;
    left: -8px;
    align-items:center;
    width:100%;
    &.one{
        top:-4px;
    }
    &.two{
        top:29.33%;
    }
    &.three{
        top:62.66%;
    }
    &.four{
        top:95.99%;
    }
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
const Round = styled.div`
    width: 15px;
    height: 15px;
    border: 3px solid #2a60f6;
    border-radius: 50%;
    background:#fff;
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
    margin-left: 20px;
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
const B = styled.b`
    font-weight: 700;`
const Button = styled.a`
    display: block;
    border: 2px solid #2a60f6;
    width: 25%;
    text-align: center;
    padding: 15px 25px;
    border-radius: 10px;
    color: #2a60f6;
    font-weight: 700;
    @media all and (max-width: 1280px){
        width: 35%;
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
