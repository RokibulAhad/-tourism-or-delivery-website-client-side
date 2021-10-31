import React from 'react';
import './AboutUs.css';
import img from '../../images/about.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="container about ">
                <div className="row my-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h2>About Us</h2>
                        <p>The World Travel Guide (WTG) is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers.</p>
                        <p>It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.</p>
                    </div>
                    <div className="col-md-6 ">
                        <img src={img} alt="" />
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default AboutUs;