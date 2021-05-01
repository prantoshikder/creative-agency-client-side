import React from 'react';
import Contact from '../../Home/Contact/Contact';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Subscriber from '../../Shared/Subscriber/Subscriber';
import ContactUsHeroArea from '../ContactUsHeroArea/ContactUsHeroArea';

const ContactUs = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <ContactUsHeroArea></ContactUsHeroArea>
            <Contact></Contact>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default ContactUs;