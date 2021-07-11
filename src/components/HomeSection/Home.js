import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Hero from './Hero';

const Home = () => {
    return (
        <>
            <HomeContainer>
                <div className="container">
                    <div className="row">
                        <Navbar />
                        <Hero />
                    </div>
                </div>
            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
    background : linear-gradient(rgba(0,0,0,0.7) , rgba(0,0,0,0.4)) , url('/images/homepage.jpg');
    background-size: cover;
    height:100vh;
    width:100%;
`

export default Home;
