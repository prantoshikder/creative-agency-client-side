import React from 'react';
import DeveloperProfile from '../../Home/DeveloperProfile/DeveloperProfile/DeveloperProfile';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Subscriber from '../../Shared/Subscriber/Subscriber';


const OurTeam = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <DeveloperProfile showMoreDev></DeveloperProfile>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default OurTeam;