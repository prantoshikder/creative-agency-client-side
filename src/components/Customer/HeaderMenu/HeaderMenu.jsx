import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png'

const HeaderMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="header-menu" style={{ background: '#fff' }}>
            {
                isAdmin ?
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <div className="menuLogo" style={{ padding: "15px" }}>
                                <Link to="/">
                                    <img src={logo} height="53px" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="loginOrder d-flex justify-content-between" style={{ padding: "15px 100px 15px 35px" }}>
                                <h2 className="font-weight-bold">Add Service</h2>
                                <h3 className="font-weight-bold">{loggedInUser.name}</h3>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <div className="menuLogo" style={{ padding: "15px" }}>
                                <Link to="/">
                                    <img src={logo} height="53px" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="loginOrder d-flex justify-content-between" style={{ padding: "15px 100px 15px 35px" }}>
                                <h2 className="font-weight-bold">Order</h2>
                                <h3 className="font-weight-bold">{loggedInUser.name}</h3>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default HeaderMenu;