import React from 'react';
import './Subscriber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Subscriber = () => {
    return (
        <section className="subscriber-section">
            <div className="container">
                <div className="subs-boxes-wrapper">
                    <div className="subs-box-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="single-subs-box">
                                    <h4 className="subs-title">SUBSCRIBE NOW</h4>
                                    <div className="input-box">
                                        <form action="">
                                            <input type="text" placeholder="Enter your e-mail" />
                                            <button>Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4">
                                <div className="single-subs-box">
                                    <h4 className="subs-title">CONTACTS NOW</h4>
                                    <p>Call Us : +(880) 1849 657478 <br/>Email Us : Prantoshikder24@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4">
                            <div className="single-subs-box">
                                <h4 className="subs-title">FOLLOW US</h4>
                                <div className="subs-follow-icons">
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
            </div>
        </section>
    );
};

export default Subscriber;