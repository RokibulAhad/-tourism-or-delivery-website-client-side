import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [service, setService] = useState([])

    useEffect(() =>{
        fetch("https://gruesome-labyrinth-21556.herokuapp.com/services")
        .then(res => res.json())
        .then(data =>setService(data))
    })


    return (
        <div className="container my-5">

            {service.length===0?
            <div style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>:
            <div>
            <h2 className="my-3">Our Travel Destination</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    service.map(service=><Service
                    key={service.key}
                    service={service}
                    
                    ></Service>)
                }
            </div>
            </div>}

         
           
            
        </div>
    );
};

export default Services;