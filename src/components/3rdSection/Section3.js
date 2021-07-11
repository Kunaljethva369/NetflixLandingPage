import React from 'react';
import styled from 'styled-components';
import CommonSection from '../Common/CommonSection';

const Section = () => {
    return (
        <>
            <SectionContainer>
                <div className="container-fluid">
                    <div className="row row-sections">
                        <div className="col-lg-6 commonheader">
                            <CommonSection heading="Watch everywhere."
                                context="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
                        </div>
                        <div className="col-lg-6">
                            <div className="img">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
                                <div className="video">
                                    <video autoPlay loop muted>
                                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                                            type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </>
    )
}

const SectionContainer = styled.div`
        border-top:8px solid #222;
        .img{
            position:relative;
            overflow:hidden;

            img{
                position:relative;
                z-index:2;
                max-width:100%;
                height:auto;
            }
            .video{
                width: 100%;
                height: 100%;
                max-width: 62%;
                max-height: 54%;
                position: absolute;
                top: 32%;
                left: 50%;
                transform: translate(-50%,-50%);
                video{
                    width:100%;
                    height:100%;
                }
            }
        }
        
        @media(min-width:200px) and (max-width:600px){
            .img{
                margin-top:1rem;
            }
        }
        @media(min-width:601px) and (max-width:992px){
            .img{
                margin-top:0rem;
            }
        }
`

export default Section;

