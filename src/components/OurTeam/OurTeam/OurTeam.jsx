import React from 'react';
import DeveloperProfile from '../../Home/DeveloperProfile/DeveloperProfile/DeveloperProfile';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
import ProjectCount from '../../Home/ProjectCount/ProjectCount';
import WorkingStudies from '../../Home/WorkingStudies/WorkingStudies/WorkingStudies';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Subscriber from '../../Shared/Subscriber/Subscriber';
import OurTeamHeroArea from '../OurTeamHeroArea/OurTeamHeroArea';


const OurTeam = () => {
    return (
        <>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <OurTeamHeroArea></OurTeamHeroArea>
            <DeveloperProfile showMoreDev></DeveloperProfile>
            <ProjectCount></ProjectCount>
            <WorkingStudies></WorkingStudies>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </>
    );
};

export default OurTeam;