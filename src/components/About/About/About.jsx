import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
import AboutUs from '../../Home/AboutUs/AboutUs';
import Subscriber from '../../Shared/Subscriber/Subscriber';
import Footer from '../../Shared/Footer/Footer';
import AboutHeroArea from '../AboutHeroArea/AboutHeroArea';
import AgencyLogo from '../../Home/AgencyLogo/AgencyLogo';

const About = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <AboutHeroArea></AboutHeroArea>
            <AboutUs></AboutUs>
            <AgencyLogo></AgencyLogo>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default About;