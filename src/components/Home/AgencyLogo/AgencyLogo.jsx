import React from 'react';
import slack from '../../.././images/logos/slack.png';
import google from '../../.././images/logos/google.png';
import uber from '../../.././images/logos/uber.png';
import netflix from '../../.././images/logos/netflix.png';
import airbnb from '../../.././images/logos/airbnb.png';
import './AgencyLogo.css';

const AgencyLogo = () => {
    return (
        <section className="agencyLogo-part pt-5 pb-5">
            <div className="container justify-content-center align-items-center">
                <ul className="d-flex agencyLogo">
                    <li><img src={slack} height="45px" alt="slack"/></li>
                    <li><img src={google} height="50px" alt="google"/></li>
                    <li><img src={uber} height="60px" alt="uber"/></li>
                    <li><img src={netflix} height="75px" alt="netflix"/></li>
                    <li><img src={airbnb} height="60px" alt="airbnb"/></li>
                </ul>
            </div>
        </section>
    );
};

export default AgencyLogo;