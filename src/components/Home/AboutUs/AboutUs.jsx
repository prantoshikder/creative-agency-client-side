import React from 'react';
import './AboutUs.css';
import aboutUsImage from '../../../images/about-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <section className="aboutUs-section">
            <div className="container">
                <div className="common-section-title">
                    <h2>ABOUT <span>US</span></h2>
                </div>
                <div className="aboutUs-wrapper">
                    <div className="aboutUs-details">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="aboutUs-img">
                                    <img src={aboutUsImage} className="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="aboutUs-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam officia voluptatem repellat tempore placeat rerum laborum a tenetur esse molestiae.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem fuga omnis quam aliquid distinctio soluta nemo vel, a adipisci molestiae inventore aperiam. Quam, optio.</p>
                                    <div className="aboutUs-btn">
                                        <a href="#!">Read More<FontAwesomeIcon className="icon" icon={faAngleDoubleRight} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;