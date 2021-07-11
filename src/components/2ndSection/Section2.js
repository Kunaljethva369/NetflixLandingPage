import React from 'react';
import styled from 'styled-components';
import CommonSection from '../Common/CommonSection';

const Section = () => {
    return (
        <>
            <SectionContainer>
                <div className="container-fluid">
                    <div className="row row-sections">

                        <div className="col-lg-6 order-lg-2 order-1 commonheader">
                            <CommonSection heading="Download your shows to watch offline."
                                context="Save your favourites easily and always have something to watch." />
                        </div>

                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="img">
                                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                                <div className="downloader">
                                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                                    <div className="downloader-content">
                                        <h4>Stranger</h4>
                                        <span>Downloading...</span>
                                    </div>
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
            .downloader{
                border: 2px solid #222;
                display:flex;
                justify-content:right;
                border-radius: .75rem;
                position:absolute;
                left:50%;
                bottom:0px;
                margin-bottom:3rem;
                width:max-content;
                background:black;
                padding:1rem;
                transform:translate(-50%);
                z-index:2;
                img{
                    height:80px;
                }
                span{
                    color:blue;
                }
                .downloader-content{
                    padding-left:2rem;
                }
                ${'' /* .downloader-content::after{
                    height:20vh;
                    content:"";
                    display:block;
                    background:url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif") no-repeat;
                    width:100%;
                } */}
            }
            img{
                position:relative;
                z-index:2;
                max-width:100%;
                height:auto;
            }
            }
        }
        
        @media(min-width:200px) and (max-width:600px){
            text-align:center;
            .img{
                margin-top:1rem;
            }
        }
        @media(min-width:601px) and (max-width:992px){
            text-align:center;
            .img{
                margin-top:0rem;
            }
        }
`

export default Section;

