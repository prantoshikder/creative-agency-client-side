import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ serviceData }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 pt-3">
            <Link to={`/order`}>
                <div className="card" style={{ border: 'none', height: '300px', padding: '15px', borderRadius: '10px', transition: 'all linear .3s' }}>
                    <div className="card-body text-center">
                        {/* <a href="#CardLink" className="card-link"> */}
                            {
                                serviceData.image ? <img style={{ height: '65px' }} className="img-fluid" src={`data:image/png;base64,${serviceData.image.img}`} />
                                    :
                                    <img style={{ height: '65px' }} className="img-fluid" src={`https://whispering-plains-10037.herokuapp.com/${serviceData.image}`} />
                            }
                        {/* </a> */}
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