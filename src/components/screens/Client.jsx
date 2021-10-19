import React from 'react'
import styled from 'styled-components'
import testone from "../images/testimonials/testimonials_1.jpg"
import testtwo from "../images/testimonials/testimonials_2.jpg"
import Slider from "react-slick";

export default function Client() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <Clientsec>
                <section className="wrapper">
                    <What>
                        What Clients are Saying
                    </What>
                    <Slider {...settings}>
                        <Des>
                            <Photo>
                                <Img src={testone} alt="Test" />
                            </Photo>
                            <Desc>
                                <P>
                                    There are so many variations of passages of Lorem Ipsum available,but the majority have suffered
                                </P>
                                <Id>
                                    <Round>
                                    </Round>
                                    <Name>
                                        <Nam>
                                            Satria Nugraha
                                        </Nam>
                                        <Ceo>
                                            CEO Nutshell
                                        </Ceo>
                                    </Name>
                                </Id>
                            </Desc>
                        </Des>
                        <Des>
                            <Photo>
                                <Img src={testtwo} alt="Test" />
                            </Photo>
                            <Desc>
                                <P>
                                    There are so many variations of passages of Lorem Ipsum available,but the majority have suffered
                                </P>
                                <Id>
                                    <Roundtwo>
                                    </Roundtwo>
                                    <Name>
                                        <Nam>
                                            Kust Asumothe
                                        </Nam>
                                        <Ceo>
                                            CEO Deltro
                                        </Ceo>
                                    </Name>
                                </Id>
                            </Desc>
                        </Des>
                    </Slider>
                </section>
            </Clientsec>
        </>
    )
}
const Clientsec = styled.section``
const What = styled.h6`
    text-align: center;
    font-size: 33px;
    margin-bottom: 50px;
    font-weight: 500;`
const Des = styled.div`
    display: flex !important;
    justify-content: space-between !important;
    width: 75% !important;
    margin: 0 auto !important;
    align-items: center !important;`
const Photo = styled.div`
    width: 30% !important;
    border-radius: 10px !important;`
const Img = styled.img`
    border-radius: 10px !important;`
const Desc = styled.div`
    width: 64% !important;`
const P = styled.p`
    font-size: 18px !important;
    color: #7e7b7b !important;
    font-weight: 500 !important;
    margin-bottom: 35px !important;`
const Id = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    align-items: center;
    padding: 0 20px;`
const Round = styled.div`
    background:url(${testone});
    width: 150px;
    height: 150px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;`
const Roundtwo = styled.div`
    background:url(${testtwo});
    width: 150px;
    height: 150px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;`
const Name = styled.div``
const Nam = styled.h5`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;`
const Ceo = styled.p`
    font-size: 17px;
    color: #7e7b7b;
    font-weight: 700;`