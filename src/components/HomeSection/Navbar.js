import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <div className="menu">
                    <div className="logo">
                        <span>Netflix</span>
                    </div>
                    <div className="rightside">
                        <div className="language">
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <button>Sign In</button>
                    </div>
                </div>
            </NavbarContainer>
        </>
    )
}

const NavbarContainer = styled.div`
    color:white;
    padding: 1rem 0rem;
    .menu{
        display:flex;
    }
    .logo{
        margin-right:auto;
        span{
            color: #e50914;
            font-size: 2rem;
            font-weight: 600;
            text-transform:uppercase;
        }
    }
    .rightside{
        display:flex;
        align-items:center;
        .language{
            border:1px solid white;
            margin-right:2rem;
            padding:0.300rem 0.500rem;
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
        button{
            border:none;
            background:#e50914;
            padding: 0.400rem 1rem;
            color:white;
            font-size:1.1rem;
            font-weight:400;
            &:hover{
                background:red;
            }
        }
    }
    @media(max-width:599px){
        padding: 0.200rem;
        margin-bottom: 0rem !important;
        .menu{
            display:block !important;
            .logo{
                text-align:center;
                margin-bottom: 1rem;
            }
            .rightside{
                display:flex;
                justify-content:center;
            }
        }
    }
`

export default Navbar;
