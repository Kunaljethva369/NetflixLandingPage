import React from 'react';
import Home from './components/HomeSection/Home.js';
import Section from './components/1stSection/Section.js';
import Section2 from './components/2ndSection/Section2.js';
import Section3 from './components/3rdSection/Section3.js';
import Section4 from './components/4thSection/Section4.js';
import Faq from './components/FAQ/Faq.js';
import Footer from './components/Footer/Footer.js';

const App = () => {
    return (
        <>
            <Home />
            <Section />
            <Section2 />
            <Section3 />
            <Section4 />
            <Faq />
            <Footer />
        </>
    )
}

export default App;
