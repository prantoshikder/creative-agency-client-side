import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
import AboutUs from '../../Home/AboutUs/AboutUs';
import Subscriber from '../../Shared/Subscriber/Subscriber';
import Footer from '../../Shared/Footer/Footer';
import AboutHeroArea from '../AboutHeroArea/AboutHeroArea';
import AgencyLogo from '../../Home/AgencyLogo/AgencyLogo';
import SampleWorks from '../../Home/SampleWorks/SampleWorks/SampleWorks'

const About = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <AboutHeroArea></AboutHeroArea>
            <AboutUs></AboutUs>
            <SampleWorks></SampleWorks>
            <AgencyLogo></AgencyLogo>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default About;