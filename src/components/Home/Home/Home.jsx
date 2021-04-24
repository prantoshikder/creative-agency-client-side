import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Subscriber from '../../Shared/Subscriber/Subscriber';
import AgencyLogo from '../AgencyLogo/AgencyLogo';
import Blogs from '../Blogs/Blogs';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Contact from '../Contact/Contact';
import HeroArea from '../HeroArea/HeroArea';
import Service from '../Service/Service';
import SampleWorks from '../SampleWorks/SampleWorks/SampleWorks';
import AboutUs from '../AboutUs/AboutUs';
import HeaderTop from '../HeaderTop/HeaderTop';
import WorkingStudies from '../WorkingStudies/WorkingStudies/WorkingStudies';

const Home = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <HeroArea></HeroArea>
            <AboutUs></AboutUs>
            <AgencyLogo></AgencyLogo>
            <Service></Service>
            <SampleWorks></SampleWorks>
            <WorkingStudies></WorkingStudies>
            <ClientsFeedback></ClientsFeedback>
            <Contact></Contact>
            <Blogs></Blogs>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default Home;