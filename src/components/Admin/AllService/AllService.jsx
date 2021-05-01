import React, { useEffect, useState } from 'react';
import HeaderMenu from '../../Customer/HeaderMenu/HeaderMenu';
import SideBar from '../../Customer/SideBar/SideBar';
import './AllService.css';

const AllService = () => {
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('https://whispering-plains-10037.herokuapp.com/allorderlist')
            .then(res => res.json())
            .then(data => setServiceList(data));
    })

    return (
        <div className="serviceList-part">
            <HeaderMenu></HeaderMenu>
            <div className="row">
                <div className="col-lg-2 col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-10 col-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-content">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email Id</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Product Details</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <br/>
                                    <tbody>
                                        {
                                            serviceList.map(serviceList =>
                                                <tr>
                                                    <td scope="row">{serviceList.name}</td>
                                                    <td>{serviceList.email}</td>
                                                    <td>{serviceList.courseName}</td>
                                                    <td>{serviceList.description}</td>
                                                    <td><button className="brand-btn">Pending</button></td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllService;