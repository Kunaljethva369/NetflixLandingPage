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
                            <CommonSection heading="Enjoy on your TV."
                                context="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." />
                        </div>
                        <div className="col-lg-6">
                            <div className="img">
                                <img src="/images/tv.png" />
                                <div className="video">
                                    <video autoPlay loop muted>
                                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
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
                max-width: 73%;
                max-height: 54%;
                position: absolute;
                top: 46%;
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

