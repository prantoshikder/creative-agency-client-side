import React from 'react';
import './HeaderTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const HeaderTop = () => {
    return (
        <div className="headerTop">
            <div className="container">
                <div className="headerTop-wrapper">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="headerTop-content d-flex">
                                <div className="phone"><p><FontAwesomeIcon className="icon" icon={faPhone} />Phone: +(880) 1849 657478</p></div>
					            <div className="email"><p><FontAwesomeIcon className="icon" icon={faEnvelope} />Email: prantoshikder24@gmail.com</p></div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="social">
                                <ul className="d-flex">
                                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;