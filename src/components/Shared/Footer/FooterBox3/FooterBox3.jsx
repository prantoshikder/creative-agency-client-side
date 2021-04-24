import React from 'react';
import './FooterBox3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const FooterBox3 = () => {
    return (
        <div className="footer-single-box3">
            <div className="footer-title">
                <h4>USEFULL LINKS</h4>
            </div>
            <div className="footer-menu">
                <ul>
                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faAngleRight} />Home</a></li>
                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faAngleRight} />About Us</a></li>
                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faAngleRight} />Portfolio</a></li>
                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faAngleRight} />Service</a></li>
                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faAngleRight} />Our Team</a></li>
                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faAngleRight} />Blogs</a></li>
                </ul>
            </div>
        </div>
    );
};

export default FooterBox3;