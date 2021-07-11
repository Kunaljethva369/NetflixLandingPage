import React from 'react';
import styled from 'styled-components';
import { FooterData } from './FooterData';

const Footer = () => {
    return (
        <>
            <FooterContaier>
                <div className="container">
                    <div className="row">
                        <h6>Questions? Call <a href="#">000-800-040-1843</a></h6>
                        {
                            FooterData.map(({ id, li }) => {

                                return (
                                    <div className="col-lg-3 col-6" key={id}> 
                                        <li><a href="#">{li}</a></li>
                                    </div>
                                )
                            })
                        }
                    </div>
                        <div className="language">
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <p>Netflix India</p>
                </div>
            </FooterContaier>
        </>
    )
}

const FooterContaier = styled.div`
    border-top:10px solid gray;
    background:black;
    padding: 50px 150px;
    color:gray;
    a{
        text-decoration:none;
        color:gray;
        &:hover{
            text-decoration:underline;
        }
    }
    li{
        list-style:none;
        padding:5px 0px;
    }
    h6{
        margin-bottom:1.4rem;
    }
    .language{
            border:1px solid white;
            margin-top:2rem;
            margin-right:2rem;
            padding:0.300rem 0.500rem;
            width:max-content;
        select{
            border:none;
            background:transparent;
            color:white;
        option{
            text-align:center;
            background:gray;
        }
    }
    }
    p{
        margin-top:1.2rem;
        margin-bottom: 0rem !important;
    }
    @media (min-width:200px) and (max-width:600px){
        padding:1rem;
    }

`

export default Footer;
