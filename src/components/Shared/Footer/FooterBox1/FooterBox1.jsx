import React from 'react';
import './FooterBox1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterBox1 = () => {
    return (
        <div className="footer-single-box1">
            <div className="footer-title">
                <h4>ABOUT US</h4>
            </div>
            <div className="single-box-content">
                <p>Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet.</p>
					<div className="footer_social_icon">
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
    );
};

export default FooterBox1;