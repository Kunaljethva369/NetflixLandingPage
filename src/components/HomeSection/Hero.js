import React from 'react';
import styled from 'styled-components';
import CommonEmailInput from '../Common/CommonEmailInput';

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <div className="container">
                    <div className="row">
                        <div className="middleContent">
                            <h1 className="pb-2">Unlimited movies,TV shows and more.</h1>
                            <h2 className="pb-3">Watch anywhere. Cancel anytime.</h2>
                            <CommonEmailInput/>
                        </div>
                    </div>
                </div>
            </HeroContainer>
        </>
    )
}

const HeroContainer = styled.div`
    color:white;
    text-align:center;
    width:100%;
    padding: 0px 45px;
    .middleContent{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding: 120px 0px;
    }
    h1{
        font-size:3.125rem;
        max-width:540px;
    }
    h2{
        font-size:1.625rem;
        font-weight:400;
    }
    @media(min-width:200px) and (max-width:600px){
        padding: 2rem 1rem;
        .middleContent{
            padding: 0.500rem 0rem !important;
        }
        h1{
            font-size: 1.75rem;
        }
        button{
            margin-top:0.500rem;
        }
    }
    @media(min-width:601px) and (max-width:992px){
        padding: 0px 0px;
        h1{
            font-size: 2.5rem;
        }
    }
    @media only screen and (max-height:450px){
        .middleContent{
            padding:10px;
        }
    }
`

export default Hero
