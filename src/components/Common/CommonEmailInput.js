import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

const CommonEmailInput = () => {
    return (
        <>
         <CommonContainer>
             <div className="container">
                <div className="row d-flex justify-content-center">
                    <h3 className="pb-2 text-center">Ready to watch? Enter your email to create or restart your membership.</h3>
                    <form onSubmit={(e)=>{e.preventDefault();}}>
                    <input type="text" placeholder="Email address" required/><button><span>Get Started</span> <ArrowForwardIosOutlinedIcon /> </button>
                    </form>
                </div>   
             </div>
         </CommonContainer>   
        </>
    )
}

const CommonContainer = styled.div`
    h3{
        font-size:1.2rem;
        font-weight:400;
        max-width:640px;
    }
    form{
        display:flex;
        justify-content:center;
    input{
        width: 45%;
        padding: 0.800rem 0.700rem;
        border:none;
        font-size:1.3rem;
    }
    button{
        width:auto;
        padding: 0.800rem 2rem;
        background:#e50914;
        color:white;
        font-size:1.3rem;
        border:none;
        display:flex;
        align-items:center;
        justify-content:center;
        span{
            padding-right:1rem;
        }
    }
    }
    @media (min-width:200px) and (max-width:600px){
        form{
            display:block;
            input{
                width:100%;
            }
            button{
                width:100%;
                justify-content:center;
            }
        }
    }
    @media(max-width:992px){
        input,button{
            width: auto;
        }
    }
`

export default CommonEmailInput;
