import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Service = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('https://whispering-plains-10037.herokuapp.com/addservicelist')
            .then(res => res.json())
            .then(data => setServiceData(data));
    }, []);

    // useEffect(() => {
    //     const serviceUrl = `https://whispering-plains-10037.herokuapp.com/addservicelist`;
    //     axios(serviceUrl)
    //         .then(data => setServiceData(data.data.serviceData));
    // }, []);
    return (
        <section className="service-part">
            <div className="container">
                <div className="common-section-title">
                    <h2>Provide awesome <span>services</span></h2>
                </div>
                <div className="service-wrapper">
                    <div className="service-inner justify-content-center">
                        <div className="row pt-2 pb-4">
                            {
                                serviceData.map(serviceData => <ServiceCard key={serviceData._id} serviceData={serviceData}></ServiceCard>)
                            }
                        </div>
                        <div className="service-btn">
                            <Link className="moreServices-btn" to={`/services`}>More Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;