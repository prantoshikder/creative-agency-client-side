import React from 'react';
import './HeaderContent.css';
import headerImage from '../../../images/logos/headerImage.png';

const HeaderContent = () => {
    return (
        <div className="headerContent-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6 col-12">
                        <div className="header-content">
                            <h1 className="font-weight-bold">Let's Grow Your <br />Brand To The <br />Next Level</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores minus, animi, illo deleniti aperiam voluptates culpa, mollitia assumenda dolores sunt vel. Aspernatur, molestias soluta.</p>
                            <button className="brand-btn">Hire Us</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 col-12 pt-4">
                        <img src={headerImage} className="img-fluid" height="350px" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;