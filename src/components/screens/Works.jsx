import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components'
import one from "../images/work/work-1.jpg"
import two from "../images/work/work-2.jpg"
import three from "../images/work/work-3.jpg"
import four from "../images/work/work-4.jpg"
import five from "../images/work/work-5.jpg"
import six from "../images/work/work-6.jpg"

export default function Works() {
    return (
        <>
            <Worksec>
                <section className="wrapper">
                    <Port>
                        <Pp>
                            Portfolio
                        </Pp>
                    </Port>
                    <See>
                        See my work
                    </See>
                    <Tabs>
                        <TabList>
                            <Tab>
                                <Lip>
                                    All
                                </Lip>
                            </Tab>
                            <Tab>
                                <Lip>
                                    Apps
                                </Lip>
                            </Tab>
                            <Tab>
                                <Lip>
                                    Template
                                </Lip>
                            </Tab>
                            <Tab>
                                <Lip>
                                    IOS
                                </Lip>
                            </Tab>
                            <Tab>
                                <Lip>
                                    UI / UX
                                </Lip>
                            </Tab>
                            <Tab >
                                <Lip>
                                    Graphic
                                </Lip>
                            </Tab>
                            <Tab >
                                <Lip>
                                    Wireframes
                                </Lip>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <Bli>
                                <Btop>
                                    <Img src={one} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Mobile Travel App
                                    </Mobile>
                                    <Travel>
                                        - Travel,Discovery
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={two} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Music App
                                    </Mobile>
                                    <Travel>
                                        - Musics
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={three} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Gaming Dashboard
                                    </Mobile>
                                    <Travel>
                                        - Games,Streaming
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={four} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Drugs Delivery App
                                    </Mobile>
                                    <Travel>
                                        - Health,Drugs
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={five} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Musics Discover
                                    </Mobile>
                                    <Travel>
                                        Musics,Dashboard
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={six} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Game Streaming
                                    </Mobile>
                                    <Travel>
                                        - Games,Streaming
                                    </Travel>
                                </Bbottom>
                            </Bli>
                        </TabPanel>
                        <TabPanel>
                            <Bli>
                                <Btop>
                                    <Img src={one} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Mobile Travel App
                                    </Mobile>
                                    <Travel>
                                        - Travel,Discovery
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={two} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Music App
                                    </Mobile>
                                    <Travel>
                                        - Musics
                                    </Travel>
                                </Bbottom>
                            </Bli>
                        </TabPanel>
                        <TabPanel>
                            <Bli>
                                <Btop>
                                    <Img src={one} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Mobile Travel App
                                    </Mobile>
                                    <Travel>
                                        - Travel,Discovery
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={six} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Game Streaming
                                    </Mobile>
                                    <Travel>
                                        - Games,Streaming
                                    </Travel>
                                </Bbottom>
                            </Bli>
                        </TabPanel>
                        <TabPanel>
                            <Bli>
                                <Btop>
                                    <Img src={six} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Game Streaming
                                    </Mobile>
                                    <Travel>
                                        - Games,Streaming
                                    </Travel>
                                </Bbottom>
                            </Bli>
                        </TabPanel>
                        <TabPanel>
                            <Bli>
                                <Btop>
                                    <Img src={one} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Mobile Travel App
                                    </Mobile>
                                    <Travel>
                                        - Travel,Discovery
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={two} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Music App
                                    </Mobile>
                                    <Travel>
                                        - Musics
                                    </Travel>
                                </Bbottom>
                            </Bli>
                        </TabPanel>
                        <TabPanel>
                        <Bli>
                                <Btop>
                                    <Img src={one} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Mobile Travel App
                                    </Mobile>
                                    <Travel>
                                        - Travel,Discovery
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={two} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Music App
                                    </Mobile>
                                    <Travel>
                                        - Musics
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={six} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Game Streaming
                                    </Mobile>
                                    <Travel>
                                        - Games,Streaming
                                    </Travel>
                                </Bbottom>
                            </Bli>
                        </TabPanel>
                        <TabPanel>
                            <Bli>
                                <Btop>
                                    <Img src={one} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Mobile Travel App
                                    </Mobile>
                                    <Travel>
                                        - Travel,Discovery
                                    </Travel>
                                </Bbottom>
                            </Bli>
                            <Bli>
                                <Btop>
                                    <Img src={two} alt="Work" />
                                </Btop>
                                <Bbottom>
                                    <Mobile>
                                        Music App
                                    </Mobile>
                                    <Travel>
                                        - Musics
                                    </Travel>
                                </Bbottom>
                            </Bli>
                        </TabPanel>

                    </Tabs>
                    <Load>
                        Load More
                    </Load>
                </section>
            </Worksec>
        </>
    )
}
const Worksec = styled.section`
    padding: 10% 0;
    background: #fff;`
const Port = styled.div`
    background: #d9e2ff;
    text-align: center;
    color: #2a60f6;
    width: 15%;
    padding: 13px 0px;
    border-radius: 35px;
    margin: 0 auto 15px;
    @media all and (max-width: 1280px){
    }
    @media all and (max-width: 980px){
    }
    @media all and (max-width: 768px){
        width: 25%;
    }
    @media all and (max-width: 640px){
        width: 50%;
    }
    @media all and (max-width: 480px){
    }
    @media all and (max-width: 360px){
    }
    @media all and (max-width: 320px){
    }`
const Pp = styled.p`
    font-weight: 700;`
const See = styled.h6`
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
const Lip = styled.p`
    border-radius: 25px;
    color: #2a60f6;
    padding: 8px 25px;
    font-weight: 700;
    &:hover{
        background: #2a60f6;
        color: #fff;
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
const Bli = styled.div`
    width: 30%;
    margin-bottom: 3%;
    &:hover{
        transform: scale(1.1);
        cursor:pointer;
    }
    &:nth-child(4){
        margin-bottom: 0;
    }
    &:nth-child(5){
        margin-bottom: 0;
    }
    &:nth-child(6){
        margin-bottom: 0;
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
const Btop = styled.div`
    border-radius: 10px 10px 0 0;`
const Img = styled.img`
    border-radius: 10px 10px 0 0;`
const Bbottom = styled.div`
    background: #323131;
    padding: 15px 30px;
    border-radius: 0 0 10px 10px;
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
const Mobile = styled.h6`
    color: #2a60f6;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
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
const Travel = styled.p`
    color: #fff;
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
const Load = styled.button`
    background: #2a60f6;
    border:2px solid #2a60f6;
    padding: 15px 25px;
    color: #fff;
    font-weight: 900;
    border-radius: 12px;
    margin: 0 auto;
    display: block;
    &:hover{
        cursor:pointer;
        background: #fff;
        color:#2a60f6;
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