import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import './Order.css';
import { UserContext } from '../../../App';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://whispering-plains-10037.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                alert('Appointment created successfully');
            })
    };

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://whispering-plains-10037.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);

    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('https://whispering-plains-10037.herokuapp.com/allorderlist')
            .then(res => res.json())
            .then(data => setServiceList(data));
    });

    return (
        <div className="order-part" style={{ overflow: 'hidden', background: '#E5E5E5' }}>
            <HeaderMenu></HeaderMenu>
            <div className="row">
                <div className="col-lg-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-lg-10">
                    <div className="order-form">
                        <div className="row">
                            {
                                isAdmin ?
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
                                    :
                                    <div className="col-md-6 offset-md-3">
                                        <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <input type="text" ref={register({ required: true })} autoComplete="off" name="name" value={loggedInUser.name} placeholder="Your Name company's name" className="form-control" required />
                                                {errors.name && <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <input type="text" ref={register({ required: true })} autoComplete="off" name="email" value={loggedInUser.email} placeholder="Your email address" className="form-control" />
                                                {errors.email && <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <input type="text" ref={register({ required: true })} autoComplete="off" name="courseName" placeholder="Course name" className="form-control" />
                                                {errors.courseName && <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <input type="text" ref={register({ required: true })} autoComplete="off" name="description" placeholder="Project details" className="form-control" />
                                                {errors.description && <span className="text-danger">This field is required</span>}
                                            </div>
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-auto mr-auto">
                                                        <input type="price" ref={register({ required: true })} placeholder="Price" name="price" autocomplete="off" className="form-control" />
                                                        {errors.price && <span className="text-danger">This field is required</span>}
                                                    </div>
                                                    {/* <div className="col-auto">
                                        <input type="price" class="form-control" placeholder="Price" autocomplete="off" />
                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button className="brand-btn font-weight-bold" type="submit">SEND</button>
                                            </div>
                                        </form>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;


