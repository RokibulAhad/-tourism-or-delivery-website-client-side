import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {_id,name,img,description} = props.service
    
    return (
        <div >
            <div className="">
                <div className="col">
                    <div className="card service shadow">
                        <img className="p-3 card-img-top" src={img}  alt="..."/>
                        <div className="card-body">
                            <h5> {name}</h5>
                            <p className="card-text">{description}</p>
                            <Link to={`/details/${_id}`}><button className="info_btn3">Book Now</button></Link>
                            
                        </div>                        
                    </div>
                </div> 
            </div>                     
        </div>
    );
};

export default Service;