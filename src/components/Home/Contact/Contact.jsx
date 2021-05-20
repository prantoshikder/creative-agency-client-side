import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_ds5ses9', e.target, 'user_ifHzwEs6SmTBgnFP6o0Yt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <footer className="contact-part mt-5 mb-5">
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
                            <form  onSubmit={sendEmail}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="first name" className="form-control" autocomplete="off" placeholder="First Name *" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" name="last name" className="form-control" autocomplete="off" placeholder="Last Name *" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" name="email" className="form-control" autocomplete="off" placeholder="Email Address *" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="number" name="number" className="form-control" autocomplete="off" placeholder="Phone Number *" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <textarea type="text" name="message" className="form-control" rows="4" placeholder="Your Note *" style={{position: 'relative !important', zIndex: 'auto !important'}}></textarea>
                                    </div>
                                </div>
                                <div className="contact-btn">
                                    <button type="submit">SEND</button>
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