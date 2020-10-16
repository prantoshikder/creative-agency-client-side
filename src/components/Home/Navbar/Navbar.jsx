import React from 'react';
import './Navbar.css';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="main-menu">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <Link to="/">
                        <a class="navbar-brand" href="#"><img src={logo} height="50px" alt=""/></a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="/home">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item">
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