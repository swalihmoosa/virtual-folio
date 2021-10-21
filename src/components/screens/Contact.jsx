import React from 'react'
import styled from 'styled-components'

export default function Contact() {
    return (
        <>
            <Contactsec>
                <section className="wrapper">
                    <Contactn>
                        Contact
                    </Contactn>
                    <Get>
                        Get in Touch
                    </Get>
                    <Sec>
                        <Left>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7965520680414!2d76.32300081487901!3d10.033640692828104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d16217f419f%3A0xa010a0f07a2d5edc!2sTalrop!5e0!3m2!1sen!2sin!4v1634636721168!5m2!1sen!2sin"  title="location" width="100%" height="100%" allowfullscreen="" loading="lazy">

                        </iframe>
                        </Left>
                        <Right>
                            <Inputw type="text" placeholder="Enter Your Name"/>
                            <Inpute type="email" placeholder="Your Email"/>
                            <Input type="text" placeholder="Subject"/>
                            <Textarea placeholder="Enter Message Here" rows="7"/>
                            <Submit type="submit" value="Send Message" />
                        </Right>
                    </Sec>
                </section>
            </Contactsec>
        </>
    )
}
const Contactsec = styled.section`
    padding-bottom: 10%;
    background: #fff;`
const Contactn = styled.h6`
    background: #d9e2ff;
    text-align: center;
    color: #2a60f6;
    width: 15%;
    padding: 13px 0px;
    border-radius: 35px;
    margin: 0 auto 15px;
    font-weight: 700;
    font-size: 16px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 30%;
    }
    @media all and (max-width: 640px){
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
        width: 60%;
    }
    @media all and (max-width: 320px){
    }`
const Get = styled.p`
    text-align: center;
    font-size: 33px;
    margin-bottom: 50px;
    font-weight: 500;
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
const Sec = styled.div`
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
const Left = styled.div`
    width:50%;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        margin: 0 auto 25px;
        width: 85%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
        width:90%;
    }
    @media all and (max-width: 320px){
    }`
const Right = styled.form`
    width:45%;
    padding: 5% 0;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        width: 80%;
        margin: 0 auto;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
        width:90%;
    }
    @media all and (max-width: 320px){
    }`
const Inputw = styled.input`
    width:100%;
    border:2px solid #000;
    padding: 15px 25px;
    border-radius: 10px;
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
const Inpute = styled.input`
    border:2px solid #000;
    padding: 15px 25px;
    border-radius: 10px;
    width:47%;
    margin-right:6%;
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
const Input = styled.input`
    border:2px solid #000;
    padding: 15px 25px;
    border-radius: 10px;
    width:47%;
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
const Textarea = styled.textarea`
    width:100%;
    border:2px solid #000;
    padding: 15px 25px;
    border-radius: 10px;
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
const Submit = styled.input`
    background: #2a60f6;
    border: 2px solid #2a60f6;
    padding: 15px 25px;
    color: #fff;
    font-weight: 900;
    border-radius: 12px;
    display: block;
    &:hover{
        background: #fff;
        color: #2a60f6;
        cursor: pointer;
    }
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
    }
    @media all and (max-width: 640px){
        margin: 0 auto;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`