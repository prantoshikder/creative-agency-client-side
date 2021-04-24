import React from 'react';
import './FooterBox4.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUser } from '@fortawesome/free-solid-svg-icons';

const FooterBox4 = () => {
    return (
        <div className="footer-single-box4">
            <div className="footer-title">
                <h4>CONTACT US</h4>
            </div>
            <div className="footer-recent-post d-flex">
                <div className="recent-post-data">
                    <span>24</span><br/>
                    <span>APRIL</span><br/>
                    <span>2019</span>
                </div>
                <div className="recent-post-title">
                    <h3><a href="#!">WHERE WE'RE STANDING RIGHT NOW</a></h3>
                    <ul>
                        <li><FontAwesomeIcon className="icon" icon={faUser} />By Admin</li>
                        <li><FontAwesomeIcon className="icon" icon={faComments} />28</li>
                    </ul>
                </div>
            </div>
            <div className="footer-recent-post d-flex">
                <div className="recent-post-data">
                    <span>24</span><br/>
                    <span>APRIL</span><br/>
                    <span>2019</span>
                </div>
                <div className="recent-post-title">
                    <h3><a href="#!">WHERE WE'RE STANDING RIGHT NOW</a></h3>
                    <ul>
                        <li><FontAwesomeIcon className="icon" icon={faUser} />By Admin</li>
                        <li><FontAwesomeIcon className="icon" icon={faComments} />28</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterBox4;