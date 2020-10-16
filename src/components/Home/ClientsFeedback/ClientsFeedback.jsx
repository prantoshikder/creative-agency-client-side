import React, { useEffect, useState } from 'react';
import ClientsFeedbackCard from '../ClientsFeedbackCard/ClientsFeedbackCard';
import './ClientsFeedback';



const ClientsFeedback = () => {
    const [clientList, setClientList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviewlist')
        .then(res => res.json())
        .then(data => setClientList(data));
    })
    return (
        <section className="clientsFeedback-part pb-5">
            <div className="container">
                <div className="clients-heading text-center pt-2 pb-5">
                    <h2 className="font-weight-bold">Clients <span style={{color: '#7AB259'}}>Feedback</span></h2>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            clientList.map(list => <ClientsFeedbackCard list={list}></ClientsFeedbackCard>)
                        }
                    </div>
                </div>
        </section>
    );
};

export default ClientsFeedback;