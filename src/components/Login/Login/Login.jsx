import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import './Login.css';
import google from '../../../images/google.png';
import facebook from '../../../images/fb.png';
import { UserContext } from "../../../App";
import agencyLogo from '../../../images/logo.png';
import HeaderTop from '../../Home/HeaderTop/HeaderTop';
import Navbar from '../../Shared/Navbar/Navbar';
import Subscriber from '../../Shared/Subscriber/Subscriber';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          sessionStorage.setItem('token', idToken)
        }).catch(function(error) {
          // Handle error
        });
        
    }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // Google SignIn
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email } = result.user;
            const googleSignInUser = { name: displayName, email };
            setLoggedInUser(googleSignInUser);
            history.replace(from);

            setUserToken();
        })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    // Facebook SignIn
    const handleFacebookSignIn = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            const {displayName, email} = result.user;
            const facebookSignIn = {name: displayName, email}
            setLoggedInUser(facebookSignIn);
            history.replace(from);
            console.log(facebookSignIn);
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(error);
          });
    }


    // Create SingUp and Signal
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false, 
        newUser : false,       
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: '',
        success: false         
    })

    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === "email"){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === "password"){
            const isPasswordValid = e.target.value.length >6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log(res);
            })
            .catch( error=> {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);

              });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log(res);
            })
            .catch( error=> {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);

              });
        }
        e.preventDefault();
    }

    return (
        <div className="login-part">
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 offset-lg-3 offset-md-2">
                        <div className="login-area">
                            <h3 className="font-weight-bold">{newUser ? 'Create An Account' : 'Login'}</h3>
                            <form action="" onSubmit={handleSubmit}>
                                {newUser && <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="First Name" autoComplete="off" required/>}<br/>
                                {newUser && <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="Last Name" autoComplete="off" required/>}<br/>
                                <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="Email" autoComplete="off" required/><br/>
                                <input type="password" name="password" className="form-control" onBlur={handleBlur} placeholder="Password" autoComplete="off" required/><br/>
                                <input className="loginButton form-control" type="submit" value={newUser ? "Create an account" : 'Login'}/>
                                <p className="text-center">Don’t have an account? 
                                    <span onClick={() => setNewUser(!newUser) } className="createAccount"> {newUser ? 'Login' : 'Create An Account' }</span>
                                </p>
                            </form>
                            <span style={{color: 'red'}}>{user.error}</span>
                        {
                            user.success && <span style={{color:'green',fontSize:'20px',textAlign:'center',marginTop:'20px'}}>User{newUser ? 'created' : 'Logged in'} successfully</span>
                        }

                        <div className="or text-center font-weight-bold">
                            <p>OR</p>
                        </div>

                        <div className="brand-signIn-option">
                            <div className="fireAuth d-flex" onClick={handleGoogleSignIn}>
                                <div className="authLogo"><img src={google} alt="" width="30" /></div>
                                <div className="authTitle"><h5>Continue with Google</h5></div>
                            </div>
                            <div className="fireAuth d-flex" onClick={handleFacebookSignIn}>
                                <div className="authLogo"><img src={facebook} alt="" width="30" /></div>
                                <div className="authTitle"><h5>Continue with Facebook</h5></div>
                            </div>
                        </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </div>
    );
};

export default Login;