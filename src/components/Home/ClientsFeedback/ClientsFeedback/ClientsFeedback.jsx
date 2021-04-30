import React, { useEffect, useState } from 'react';
import ClientsFeedbackCard from '../ClientsFeedbackCard/ClientsFeedbackCard';
import './ClientsFeedback.css';



const ClientsFeedback = () => {
    const [clientList, setClientList] = useState([]);
    useEffect(() => {
        fetch('https://whispering-plains-10037.herokuapp.com/reviewlist')
        .then(res => res.json())
        .then(data => setClientList(data));
    }, []);
    return (
        <section className="clientsFeedback-part">
            <div className="container">
                <div className="common-section-title">
                    <h2>Clients <span>Feedback</span></h2>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        {
                            clientList.map(clientList => <ClientsFeedbackCard key={clientList._id} clientList={clientList}></ClientsFeedbackCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsFeedback;