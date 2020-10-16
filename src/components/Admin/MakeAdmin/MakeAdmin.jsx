import React from 'react';
import { useForm } from "react-hook-form";
import HeaderMenu from '../../Customer/HeaderMenu/HeaderMenu';
import SideBar from '../../Customer/SideBar/SideBar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addadmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                console.log(success);
                alert('Appointment created successfully');
            })
    };
    return (
        <div className="admin-part" style={{ overflow: 'hidden', background: '#E5E5E5' }}>
            <HeaderMenu></HeaderMenu>
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-6 offset-md-3" style={{height:'300px', width:'550px', borderRadius: '10px', background:'#fff'}}>
                            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="text" ref={register({ required: true })} autoComplete="off" name="email" placeholder="@gmail.com" className="form-control" required />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <button className="brand-btn font-weight-bold" type="submit">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;