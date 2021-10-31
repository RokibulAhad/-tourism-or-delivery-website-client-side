import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import img from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className="container ">
                <div className="row  py-5 ">
                    <div className="col-md-4">
                    <img src={img} alt="" />
                    <p className="mt-2">We believe in Simple, Clean & Modern Health Support. Browse the amazing work of our Clinic.</p>
                    <div className="contact-info">
                        <address>
                            <h4>Headquarters:</h4>
                            <p>221 Jockey Hollow, Suite 600
                                Smithtown, NY 11787</p>
                        </address>
                        <div className="phn_fax">
                            <p><b>Phone:</b> (91) 8974 56984</p>
                            <p><b>Fax:</b>  (91) 66 8754 8978</p>
                            <p><b>Email:</b>  info@familydoctor.com</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 form_style" >
                    <h3>Contact us</h3>
                    <form action="" >
                        <input type="text" name="name" className="form-control" placeholder="Full Name"/>
                        <input type="email" name="name" className="form-control" placeholder="Email address"/>
                        <textarea name="" id="" cols="30" rows="4" className="form-control" placeholder="Message..."></textarea>
                        <button className="info_btn2">send</button>
                    </form>
                    </div>
                    <div className="col-md-4 footer_menu">
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link>Service</Link></li>
                            <li><Link to="/privacy">Privacy & Policy</Link></li>
                        </ul>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Footer;