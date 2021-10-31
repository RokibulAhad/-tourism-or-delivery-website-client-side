import React from 'react';
import "./NotFound.css";
import img from '../../images/404-Error.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
        <img className="mt-5" src={img} alt="" />
        <div ><Link to="/home"><button className="info_btn2 mb-5">Go Back</button ></Link></div>
        
        </div>
    );
};

export default NotFound;