import React from 'react';
import './ProjectCount.css';

const ProjectCount = () => {
    return (
        <section className="project-count-section">
            <div className="project-bgOverlay">
                <div className="container">
                    <div className="project-count-wrapper">
                        <div className="project-count-inner">
                            <div className="project-count">
                                <div>
                                    <h1>2,000</h1>
                                    <h4>Done Work</h4>
                                </div>
                                <div>
                                    <h1>500</h1>
                                    <h4>Happy Client</h4>
                                </div>
                                <div>
                                    <h1>100</h1>
                                    <h4>Coffee</h4>
                                </div>
                                <div>
                                    <h1>1,000</h1>
                                    <h4>Work Hours</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCount;