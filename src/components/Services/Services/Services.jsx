import React from 'react';
import ClientsFeedback from '../../Home/ClientsFeedback/ClientsFeedback/ClientsFeedback';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
import ProjectCount from '../../Home/ProjectCount/ProjectCount';
import Service from '../../Home/Service/Service/Service';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Subscriber from '../../Shared/Subscriber/Subscriber';
import ServicesHeroArea from '../ServicesHeroArea/ServicesHeroArea';

const Services = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <ServicesHeroArea></ServicesHeroArea>
            <Service></Service>
            <ProjectCount></ProjectCount>
            <ClientsFeedback></ClientsFeedback>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default Services;