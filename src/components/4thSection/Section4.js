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
                            <CommonSection heading="Create profiles for children."
                                context="Send children on adventures with their favourite characters in a space made just for them—free with your membership." />
                        </div>

                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="img">
                                <img src="https://occ-0-1947-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" />
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

