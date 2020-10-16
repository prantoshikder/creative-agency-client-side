import React from 'react';
import './ClientsFeedbackCard.css';

const ClientsFeedbackCard = ({ list }) => {
    return (
        <div className="col-md-4 mt-3">
            <div className="clientFeedback-card">
                <div className="card" style={{ borderRadius: '10px', boxShadow: '0px 0px 10px #111430', height: '250px' }}>
                    <div className="card-body">
                        <div className="client-profile d-flex">
                            <a href="#" className="card-link">
                                {
                                    list.image ? <img style={{ height: '60px',marginRight: '20px' }} className="img-fluid" src={`data:image/png;base64,${list.image.img}`} />
                                        :
                                        <img style={{ height: '50px' }} src={`http://localhost:5000/${list.image}`} className="img-fluid"></img>
                                }
                            </a>
                            {/* <img src={`http://localhost:5000/${list.image}`} style={{marginRight: '20px'}} height="50px" alt=""/> */}
                            <div className="text">
                                <h5>{list.name}</h5>
                                <p>{list.company}</p>
                            </div>
                        </div>
                        <div className="client-content">
                            <p className="">{list.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsFeedbackCard;