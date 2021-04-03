import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AgencyLogo from '../AgencyLogo/AgencyLogo';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Contact from '../Contact/Contact';
import HeroArea from '../HeroArea/HeroArea';
import Service from '../Service/Service';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroArea></HeroArea>
            <AgencyLogo></AgencyLogo>
            <Service></Service>
            <Works></Works>
            <ClientsFeedback></ClientsFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;