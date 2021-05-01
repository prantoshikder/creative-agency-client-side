import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <footer className="contact-part mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
                        <div className="footer-content">
                            <h2 className="font-weight-bold">Let us handle your <br /> project professionally.</h2>
                            <p className="mt-3">With well written codes, we build amazing apps for all <br /> platforms, mobile and web app general.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="contact-form">
                            <form action="">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="name" className="form-control" autocomplete="off" placeholder="Name *" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" autocomplete="off" placeholder="Email Address *" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="number" className="form-control" autocomplete="off" placeholder="Phone Number *" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="date" className="form-control" placeholder="Date *" data-type="datepicker" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <textarea type="text" className="form-control" rows="4" placeholder="Your Note *" style={{position: 'relative !important', zIndex: 'auto !important'}}></textarea>
                                    </div>
                                </div>
                                <div className="contact-btn">
                                    <button type="submit">Book A Table</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;