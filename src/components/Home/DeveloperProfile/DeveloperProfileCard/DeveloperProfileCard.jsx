import React from 'react';
import './DeveloperProfileCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const DeveloperProfileCard = (props) => {
    const { image, devProfileTitle, devProfileDes, facebookProfile } = props.devProfile;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="single-devProfile">
                <div className="single-devProfile-img">
                    <img src={image} className="img-fluid" alt=""/>
                </div>
                <div className="single-devProfile-bgOverlay">
                    <div className="single-devProfile-content">
                        <h3>{devProfileTitle}</h3>
                        <p>{ devProfileDes }</p>
                        <div class="dev-social-icon">
                            <a href={facebookProfile} target="_blank"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a>
                            <a href={facebookProfile} target="_blank"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                            <a href={facebookProfile} target="_blank"><FontAwesomeIcon className="icon" icon={faGoogle} /></a>
                            <a href={facebookProfile} target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                            <a href={facebookProfile} target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperProfileCard;