import React from 'react'
import styled from 'styled-components'
import person from "../images/IMG_6597.jpg"

export default function Stephen() {
    return (
        <>
            <Stephensec>
                <Secwrap className="wrapper">
                    <Left>
                        <Imgborder>
                            <Img src={person} alt="Stephen" />
                        </Imgborder>
                    </Left>
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
    background: #fff;`
const Secwrap = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 10% 0;`
const Left = styled.div`
    width: 26%;
    border: 6px solid #2a60f6;
    position:relative;
    margin-left:50px;
    height: 450px;`
const Imgborder = styled.div`
    position:absolute;
    width:100%;
    right: 35px;
    top: 35px;`
const Img = styled.img`
    border-radius:10px;`
const Right = styled.div`
    width: 55%;`
const Name = styled.h3`
    font-size: 30px;
    margin-bottom: 5px;`
const Position = styled.h5`
    margin-bottom: 25px;
    color: #2a60f6;
    font-size: 16px;
    font-weight: 700;`
const Description = styled.p`
    margin-bottom:25px;`
const Ul = styled.ul`
    margin-bottom: 45px;
    padding: 0 25px;
    border-left: 2px dotted;
    width: 40%;
    height: 40%;
    position:relative;`
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
    }`
const Round = styled.div`
    width: 15px;
    height: 15px;
    border: 3px solid #2a60f6;
    border-radius: 50%;
    background:#fff;`
const P = styled.p`
    margin-left: 20px;`
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
    font-weight: 700;`
