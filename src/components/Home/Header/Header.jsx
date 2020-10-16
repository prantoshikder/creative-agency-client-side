import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import HeaderContent from '../HeaderContent/HeaderContent';

const Header = () => {
    return (
        <section className="header-part">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
        </section>
    );
};

export default Header;