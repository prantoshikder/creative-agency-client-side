import React from 'react';
import SampleWorksCarousel from '../SampleWorksCarousel/SampleWorksCarousel';
import './SampleWorks.css';

const Works = () => {
    return (
        <section className="works-part mb-5">
            <div className="container">
                <div className="common-section-title pb-5">
                    <h2 className="text-white">Here are some of <span>our works</span></h2>
                </div>
                <SampleWorksCarousel></SampleWorksCarousel>
            </div>
        </section>
    );
};

export default Works;