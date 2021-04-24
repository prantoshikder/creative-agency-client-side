import React, { useState } from 'react';
import WorkingStudiesFakeData from '../../../FakeData/WorkingStudiesFakeData';
import WorkingStudiesCard from '../WorkingStudiesCard/WorkingStudiesCard';
import "./WorkingStudies.css";

const WorkingStudies = () => {
    const [teamStudies, setTeamStudies] = useState(WorkingStudiesFakeData);
    return (
        <section className="working-studies-section">
            <div className="container">
                <div className="common-section-title">
                    <h2>CASE <span>STUDIES</span></h2>
                    <p className="text-center">We Take Every Case Studies Very Seriously</p>
                </div>
                <div className="working-studies-wrapper">
                    <div className="working-studies-inner">
                        <div className="working-studies-team">
                            <div className="row">
                                {
                                    teamStudies.map(teamStudies => <WorkingStudiesCard key={teamStudies.id} teamStudies={teamStudies}></WorkingStudiesCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkingStudies;