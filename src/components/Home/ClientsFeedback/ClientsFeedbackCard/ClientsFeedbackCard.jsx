import React from 'react';
import './ClientsFeedbackCard.css';

const ClientsFeedbackCard = ({ clientList }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-3">
            <div className="clientFeedback-card">
                <div className="card" style={{ borderRadius: '10px', boxShadow: '0px 0px 10px #111430', height: '250px' }}>
                    <div className="card-body">
                        <div className="client-profile d-flex">
                            <a href="#!" className="card-link">
                                {
                                    clientList.image ? <img style={{ height: '60px',marginRight: '20px' }} className="img-fluid" src={`data:image/png;base64,${clientList.image.img}`} />
                                        :
                                        <img style={{ height: '50px' }} src={`https://whispering-plains-10037.herokuapp.com/${clientList.image}`} className="img-fluid"></img>
                                }
                            </a>
                            {/* <img src={`https://whispering-plains-10037.herokuapp.com/${clientList.image}`} style={{marginRight: '20px'}} height="50px" alt=""/> */}
                            <div className="text">
                                <h5>{clientList.name}</h5>
                                <p>{clientList.company}</p>
                            </div>
                        </div>
                        <div className="client-content">
                            <p className="">{clientList.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsFeedbackCard;