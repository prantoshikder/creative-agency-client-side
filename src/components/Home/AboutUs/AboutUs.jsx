import React, { useState } from 'react';
import './AboutUs.css';
import aboutUsImage from '../../../images/about-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCheck } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    const [readMore, setReadMore] = useState(false);
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
                                    <h3>For the next great business</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam officia voluptatem repellat tempore placeat rerum laborum a tenetur esse molestiae.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laborum deleniti neque, pariatur iure laudantium?</p>
                                    {
                                        readMore ?
                                            <div>
                                                <ul>
                                                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Officia quaerat eaque neque</li>
                                                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Possimus aut consequuntur incidunt</li>
                                                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Lorem ipsum dolor sit amet</li>
                                                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Consectetur adipisicing elit</li>
                                                </ul>
                                            </div>
                                            : null
                                    }
                                    
                                    <div className="aboutUs-btn">
                                        <button onClick={() => setReadMore(!readMore)}>Read More<FontAwesomeIcon className="icon" icon={faAngleDoubleRight} /></button>
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