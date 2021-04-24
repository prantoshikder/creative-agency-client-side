import React from 'react';
import './Footer.css';
import FooterBox1 from './FooterBox1/FooterBox1';
import FooterBox2 from './FooterBox2/FooterBox2';
import FooterBox3 from './FooterBox3/FooterBox3';
import FooterBox4 from './FooterBox4/FooterBox4';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-box-wrapper">
                    <div className="footer-box-inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12"><FooterBox1></FooterBox1></div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12"><FooterBox2></FooterBox2></div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12"><FooterBox3></FooterBox3></div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12"><FooterBox4></FooterBox4></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-container">
                <div className="container">
                    <div className="copy-right-content">
                        <div className="copy-right-text text-center">
                            <p>Copyright &copy;2021 All rights reserved | Developed by <span><a href="#!">Pranto Shikder</a></span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;