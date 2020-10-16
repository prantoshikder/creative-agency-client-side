import React from 'react';

const ServiceListCard = ({orderList}) => {
    return (
        <div className="col-md-4">
            <div className="service-card">
                <div className="card" style={{ border: 'none', height: '250px', padding: '15px', borderRadius: '10px', transition: 'all linear .3s', boxShadow: '0px 0px 15px #111430' }}>
                    <div className="card-img d-flex justify-content-between">
                        <img src="" alt=""/>
                        <button className="brand-btn">pending</button>
                    </div>
                    <div className="card-body">
                        <h3>{orderList.courseName}</h3>
                        <p>{orderList.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceListCard;