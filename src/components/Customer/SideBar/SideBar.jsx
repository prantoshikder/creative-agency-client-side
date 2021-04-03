import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faListUl, faCommentDots, faHome } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { UserContext } from '../../../App';

const SideBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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


    return (
        <div className="row">
            <div className="sidebar col-md-12" style={{ height: "89vh" }}>
                <ul className="list-unStyled">
                    {
                        isAdmin ?
                            <div>
                                <li>
                                    <Link to="/all service" className="text-dark">
                                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Service List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/add service" className="text-dark">
                                        <FontAwesomeIcon icon={faListUl} /> <span>Add Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/make admin" className="text-dark">
                                        <FontAwesomeIcon icon={faCommentDots} /> <span>Make Admin</span>
                                    </Link>
                                </li>
                                <br />
                                <br />
                                <br />
                                <br />
                                <li>
                                    <Link to="/" className="text-dark">
                                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                                    </Link>
                                </li>
                            </div>

                            :

                            <div>
                                <li>
                                    <Link to="/order" className="text-dark">
                                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/service list" className="text-dark">
                                        <FontAwesomeIcon icon={faListUl} /> <span>Service list</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/review" className="text-dark">
                                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                                    </Link>
                                </li>
                                <br />
                                <br />
                                <br />
                                <br />
                                <li>
                                    <Link to="/" className="text-dark">
                                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                                    </Link>
                                </li>
                            </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default SideBar;