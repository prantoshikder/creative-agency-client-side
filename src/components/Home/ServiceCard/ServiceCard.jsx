import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ serviceData }) => {
    return (
        <div className="col-md-4 pt-3">
            <Link to={`/order`}>
                <div className="card" style={{ border: 'none', height: '300px', padding: '15px', borderRadius: '10px', transition: 'all linear .3s' }}>
                    <div className="card-body text-center">
                        <a href="#" className="card-link">
                            {
                                serviceData.image ? <img style={{ height: '65px' }} className="img-fluid" src={`data:image/png;base64,${serviceData.image.img}`} />
                                    :
                                    <img style={{ height: '65px' }} src={`http://localhost:5000/${serviceData.image}`} className="img-fluid"></img>
                            }
                        </a>
                        {/* <img src={serviceData.image} height="65px" alt="" /> */}
                        <div className="card-content pt-2">
                            <h4 className="font-weight-bold">{serviceData.title}</h4>
                            <p>{serviceData.description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceCard;