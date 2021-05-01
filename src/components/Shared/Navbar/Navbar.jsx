import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 90){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        <div className="main-menu"className={navbar ? "main-menu active fixed-top" : "main-menu"}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/"><img src={logo} className="header-logo" height="50px" alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" smooth to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/about`}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/services`}>Services</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={`/ourPortfolio`}>Portfolio</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to={`/outTeam`}>Our Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/blogs`}>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/contactUs`}>Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/order`}>
                                    <button className="brand-btn">Login</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;