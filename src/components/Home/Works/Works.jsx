import React from 'react';
import WorksCarousel from '../WorksCarousel/WorksCarousel';
import './Works.css';

const Works = () => {
    return (
        <section className="works-part mb-5">
            <div className="container">
                <div className="works-heading text-center pt-5 pb-5">
                    <h2 className="font-weight-bold" style={{color: '#fff'}}>Here are some of <span style={{color: '#7AB259'}}>our works</span></h2>
                </div>
                <WorksCarousel></WorksCarousel>
            </div>
        </section>
    );
};

export default Works;