import React from 'react';
import useAuth from '../hooks/useAuth';
import './Login.css';
import img from '../../images/travel.jpg'
import img1 from '../../images/logo.png'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    console.log('came form', location.state?.from);


    const GoogleLoginRedirect = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)

            })

    }

    return (
        <div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6"> 
                       <h2>Please Login</h2>
                       <img src={img1} alt="" /><br />                  
                        <button onClick={GoogleLoginRedirect} className="mt-5 g-button">sign in with google</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>

                </div>
            </div>


           
            
        </div>
    );
};

export default Login;