import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const Service = () => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('https://whispering-plains-10037.herokuapp.com/addservicelist')
            .then(res => res.json())
            .then(data => setServiceData(data));
    });
    return (
        <section className="service-part">
            <div className="container">
                <div className="service-heading  text-center pt-5 pb-5">
                    <h2 className="font-weight-bold">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h2>
                </div>
            </div>
            <div className="d-flex justify-content-center pt-2 pb-5 mb-5">
                <div className="row w-75">
                    {
                        serviceData.map(serviceData => <ServiceCard key={serviceData._id} serviceData={serviceData}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;