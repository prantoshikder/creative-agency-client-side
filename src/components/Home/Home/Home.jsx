import React from 'react';
import AgencyLogo from '../AgencyLogo/AgencyLogo';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AgencyLogo></AgencyLogo>
            <Service></Service>
            <Works></Works>
            <ClientsFeedback></ClientsFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;