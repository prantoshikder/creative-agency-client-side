import React, { useEffect, useState } from 'react';
import HeaderMenu from '../../Customer/HeaderMenu/HeaderMenu';
import SideBar from '../../Customer/SideBar/SideBar';

const AllService = () => {
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allorderlist')
            .then(res => res.json())
            .then(data => setServiceList(data));
    })

    return (
        <div className="serviceList-part" style={{ overflow: 'hidden', background: '#E5E5E5' }}>
            <HeaderMenu></HeaderMenu>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12" style={{ padding:'10px'}}>
                            <div>
                                <table className="table" style={{ background:'#fff', marginTop:'20px',padding:'10px'}}>
                                    <thead style={{height: '30px', background:'#F5F6FA', color:'#000', padding:'10px'}}>
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