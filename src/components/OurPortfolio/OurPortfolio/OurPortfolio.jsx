import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
import Subscriber from '../../Shared/Subscriber/Subscriber';
import Footer from '../../Shared/Footer/Footer';
import PortfolioHeroArea from '../PortfolioHeroArea/PortfolioHeroArea';

const OurPortfolio = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <PortfolioHeroArea></PortfolioHeroArea>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default OurPortfolio;