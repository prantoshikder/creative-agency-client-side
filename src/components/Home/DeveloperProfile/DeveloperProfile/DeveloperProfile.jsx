import React, { useState } from 'react';
import DevProfileFakeData from '../../../FakeData/DevProfileFakeData';
import DeveloperProfileCard from '../DeveloperProfileCard/DeveloperProfileCard';
import './DeveloperProfile.css';
import {Link} from 'react-router-dom';

const DeveloperProfile = ({ showMoreDev }) => {
    const allDevProfile = showMoreDev ? DevProfileFakeData : DevProfileFakeData.slice(0, 3);
    const [devProfile, setDevProfile] = useState(allDevProfile);
    return (
        <section className="developer-profile-section">
            <div className="container">
                <div className="common-section-title">
                    <h2>Our <span>Developer</span></h2>
                </div>
                <div className="devProfile-wrapper">
                    <div className="devProfile-inner">
                        <div className="row">
                            {
                                devProfile.map(devProfile => <DeveloperProfileCard key={devProfile.id} devProfile={devProfile}></DeveloperProfileCard>)
                            }
                        </div>
                    </div>
                    {
                        !showMoreDev && (
                            <div className="vevProfile-btn">
                                <Link className="moreDev-btn" to={`/outTeam`}>More Developer</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default DeveloperProfile;