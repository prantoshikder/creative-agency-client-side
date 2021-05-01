import React from 'react';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
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
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default Services;