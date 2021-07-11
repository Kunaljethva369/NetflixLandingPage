import React, { useState } from 'react';
import styled from 'styled-components';
import FaqData from './FaqData';
import CommonEmailInput from '../Common/CommonEmailInput';

const Faq = () => {

    const [clicked, setClicked] = useState(false);

    const toggle = id => {
        if (clicked === id) {
            return setClicked(null)
        }
        setClicked(id)
    }

    return (
        <>
            <FaqContainer>
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="text-center pb-3">Frequently Asked Questions</h1>

                        {
                            FaqData.map(({ id, title, content }) => {
                                return (
                                    <div className="accordion">
                                        <div className="acc" onClick={() => (toggle(id))} key={id}>
                                            <h4>{title}</h4>
                                            <span>{clicked === id ? <i className="fas fa-times" /> :
                                                <i className="fas fa-plus" />}</span>
                                        </div>
                                        <div className="acc-ans">
                                            {
                                                clicked === id ? <p>{content}</p> : null
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="email">
                            <CommonEmailInput />
                        </div>
                    </div>
                </div>
            </FaqContainer>
        </>
    )
}

const FaqContainer = styled.div`
    border-top:10px solid gray;
    .container-fluid{
        padding: 50px 40px;
    }
    .accordion{
        background:#303030;
        width:60%;
        cursor:pointer;
        padding: 10px 20px;
        margin: 5px auto;
        .acc{
            display:flex;
            align-items:center;
            justify-content:space-between;
            h4{
                font-weight:400;
            }
        }
        .acc-ans{
            padding: 0px 0px;
            font-size: 1.2rem;
            font-weight:400;
            p{
                width:100%;
                border-top: 2px solid black;
            }
        }
    }
    .email{
        padding-top:2rem;
    }
        @media (min-width:200px) and (max-width:600px){
            .container-fluid{
                padding:40px 30px !important;
            }
            .accordion{
                width:100% !important;
            }
            .email{
                width:100%;
                input{
                    width:100%;
                }
                button{
                    width:auto;
                    margin-top:0.500rem;
                }
            }
        }
`

export default Faq
