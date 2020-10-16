import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import ServiceListCard from '../ServiceListCard/ServiceListCard';
import SideBar from '../SideBar/SideBar';
import './ServiceList.css';

const ServiceList = () => {
    const [orderList, setOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://whispering-plains-10037.herokuapp.com/serviceOrderList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderList(data));
    }, [])

    return (
        <div className="service-part" style={{ overflow: 'hidden', background: '#E5E5E5' }}>
            <HeaderMenu></HeaderMenu>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <div className="d-flex justify-content-center">
                        <div className="row w-75">
                            {
                                orderList.map(orderList => <ServiceListCard orderList={orderList}></ServiceListCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;