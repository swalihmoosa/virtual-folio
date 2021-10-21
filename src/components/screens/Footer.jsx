import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <>
            <Footersec>
                <section className="wrapper">
                    <Head>
                        Virtual Folio
                    </Head>
                    <Ul>
                        <Li >
                            <Where>
                                Where to find me
                            </Where>
                            <Loc>
                                1600 Amphitheatre Parkway Mountain View,Pazhayannur Thrissur Kerala 
                            </Loc>
                        </Li>
                        <Li>
                            <Where>
                                Follow Me
                            </Where>
                            <Liul>
                                <Lili>
                                    Instagram
                                </Lili>
                                <Lili>
                                    Facebook
                                </Lili>
                                <Lili>
                                    Twitter
                                </Lili>
                                <Lili>
                                    Youtube
                                </Lili>
                            </Liul>
                        </Li>
                        <Li>
                            <Where>
                                Contact Me
                            </Where>
                            <Liul>
                                <Lili>
                                    info@Virtual.com
                                </Lili>
                                <Lili>
                                    +91 8129133008
                                </Lili>
                                <Lili>
                                    +80045276
                                </Lili>
                            </Liul>
                        </Li>
                    </Ul>
                    <Sub>
                        Subscribe
                    </Sub>
                    <Form>
                        <Email type="email" placeholder="Email Address" />
                        <Submit type="submit" value="Subscribe" />
                    </Form>
                    <P>
                        Copyright &copy;2020 . All right reserved | This template is made with <B>MACode ID</B>
                    </P>
                </section>
            </Footersec>
        </>
    )
}
const Footersec = styled.section`
    background: #171925;
    padding: 3% 0`
const Head = styled.h5`
    text-align: center;
    font-size: 33px;
    margin-bottom: 50px;
    font-weight: 500;
    color: #9b9ea7;
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
    padding: 0 5%;
    margin-bottom: 35px;
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
    width:30%;
    color: #9b9ea7;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 45%;
        text-align: center;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
        width: 75%;
        margin: 0 auto 25px;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Where = styled.h6`
    color: #9b9ea7;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 2px dotted;
    padding: 10px 0;
    width: 50%;
    margin-bottom: 20px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 100%;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Loc = styled.p`
    color: #9b9ea7;
    &:hover{
        cursor:pointer;
    }`
const Liul = styled.ul``
const Lili = styled.li`
    margin-bottom: 10px;
    color: #9b9ea7;
    &:last-child{
        margin-bottom:0;
    }
    &:hover{
        cursor:pointer;
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
const Sub = styled.h6`
    text-align: center;
    font-size: 30px;
    margin-bottom: 50px;
    font-weight: 500;
    color: #9b9ea7;
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
const Form = styled.form`
    margin: 0 auto 30px;
    width: 35%;
    @media all and (max-width: 1280px){
        width: 60%;
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width: 95%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Email = styled.input`
    background: #464752;
    color: #9b9ea7;
    font-weight: 900;
    padding: 15px 25px;
    width: 75%;
    border-radius: 10px 0 0 10px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){    
        width: 65%;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
        width: 100%;
        border-radius: 10px;
        margin-bottom: 15px;
    }
    @media all and (max-width: 320px){
    }`
const Submit = styled.input`
    padding: 15px 25px;
    background: #2a60f6;
    color: #fff;
    font-weight: 900;
    width: 25%;
    border-radius: 0 10px 10px 0;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 35%;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
        width: 35%;
        border-radius: 10px;
        padding: 15px;
        margin: 0 auto;
        display: block;
    }
    @media all and (max-width: 320px){
    }`
const P = styled.p`
    color: #9b9ea7;
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
        font-size: 15px;
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const B = styled.b`
    color: #2a60f6;
    font-weight: 500;`