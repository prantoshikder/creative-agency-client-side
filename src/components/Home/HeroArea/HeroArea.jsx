import React from 'react';
import './HeroArea.css';
import headerImage from '../../../images/logos/headerImage.png';

const HeroArea = () => {
    return (
        <section className="hero-area-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="hero-area-content">
                            <h1>Let's Grow Your Brand To The Next Level</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores minus, animi, illo deleniti aperiam voluptates culpa, mollitia assumenda dolores sunt vel. Aspernatur, molestias soluta.</p>
                            <a className="brand-btn" href="#!">Hire Us</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 pt-4">
                        <img src={headerImage} className="img-fluid" height="350px" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;