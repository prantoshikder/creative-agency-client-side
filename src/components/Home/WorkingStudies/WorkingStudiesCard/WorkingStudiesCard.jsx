import React from 'react';
import './WorkingStudiesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const WorkingStudiesCard = (props) => {
    const { image, studiesTitle } = props.teamStudies;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="single-team-studies">
                <div className="team-studies-image">
                    <img src={image} className="img-fluid" alt="" />
                </div>
                <div className="team-studies-bgOverlay">
                    <div className="team-studies-content">
                        <div class="social-icon">
                            <a href="#!"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a>
                            <a href="#!"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                            <a href="#!"><FontAwesomeIcon className="icon" icon={faGoogle} /></a>
                            <a href="#!"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                            <a href="#!"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                        </div>
                        <h4>{studiesTitle}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingStudiesCard;