import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="main-menu">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/">
                        <img src={logo} className="header-logo" height="50px" alt=""/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" smooth to="/home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Our Team</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/blogs`}>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/order">
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