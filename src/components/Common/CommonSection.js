import React from 'react';
import styled from 'styled-components';

const CommonSection = ({heading,context}) => {
    return (
        <>
            <CommonContainer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 header">
                            <h1>{heading}</h1>
                            <h2>{context}</h2>
                        </div>
                    </div>
                </div>
            </CommonContainer>
        </>
    )
}

const CommonContainer = styled.div`
        .header{
        h1{
            font-size:3.125rem;
            line-height:1.1;
            margin-bottom: 1.5rem;
        }  
        h2{
            font-size:1.625rem;
            font-weight:400;
        } 
        }
        @media(min-width:200px) and (max-width:600px){
            text-align:center;
            .container-fluid{
                padding: 10px !important;
            }
            h1{
                font-size: 1.625rem !important;
            }
            h2{
                font-size: 1.125rem !important;
            }
        }
        @media(min-width:601px) and (max-width:992px){
            text-align:center;
            .container-fluid{
                padding: 15px !important;
            }
            h1{
                font-size: 2.5rem !important;
            }
            h2{
                font-size: 1.25rem !important;
            }
        }
`

export default CommonSection;
