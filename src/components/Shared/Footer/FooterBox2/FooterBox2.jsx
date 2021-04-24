import React from 'react';
import './FooterBox2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterBox2 = () => {
    return (
        <div className="footer-single-box2"> 
            <div className="footer-title">
                <h4>CONTACT US</h4>
            </div>
            <div className="contacts d-flex">
                <div className="contact-icon"><FontAwesomeIcon className="icon" icon={faHome} /></div>
                <div className="contact-desc"><p>Gulshan-1, Dhaka <br/>Dhaka, Bangladesh</p></div>
            </div>
            <div className="contacts d-flex">
                <div className="contact-icon"><FontAwesomeIcon className="icon" icon={faPhone} /></div>
                <div className="contact-desc"><p>+(880) 1849 657478 <br/>+(880) 1727 24634</p></div>
            </div>
            <div className="contacts d-flex">
                <div className="contact-icon"><FontAwesomeIcon className="icon" icon={faEnvelope} /></div>
                <div className="contact-desc"><p>prantoshikder24@gmail.com <br/>prantoshikder25@gmail.com</p></div>
            </div>
        </div>
    );
};

export default FooterBox2;