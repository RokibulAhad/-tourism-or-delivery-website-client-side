import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import img from '../../images/paris1.jpg';
import img1 from '../../images/taj.jpg';
import img2 from '../../images/pyramid.jpg';
import img3 from '../../images/rome.jpg';
import img4 from '../../images/patay.jpg';
import img5 from '../../images/statu.jpg';
import img6 from '../../images/south.jpg';
import img7 from '../../images/falls.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            
            <div>          
                <Banner></Banner>
                <div className="container py-5 ">
                    
                    <h2 className="my-5">Tell Us About Your Destination</h2>
                    <div className="align-items-center d-flex justify-content-center">
                        <form className="row gy-2 gx-3  ">
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="text" className="form-control" id="autoSizingInput" placeholder="Jane Doe"/>
                        </div>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInputGroup">Username</label>
                            <div className="input-group">
                            
                            <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                            <select className="form-select" id="autoSizingSelect">
                            <option selected>Choose...</option>
                            <option value="1">Paris</option>
                            <option value="2">Rome</option>
                            <option value="3">Taj Mahal</option>
                            <option value="3">Piramid</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                            <label className="form-check-label" for="autoSizingCheck">
                                Remember me
                            </label>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="info_btn3">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
                <Services></Services>
                <div className="container" >
                    <h2 className="my-5">Our Gallery</h2>
                    <div class="row row-cols-1 row-cols-md-4 g-1">
                        <div class="col">
                            <div class="card gallery">
                            <img src={img} class="card-img-top" alt="..."/>                            
                            </div>
                        </div>  
                        <div class="col">
                            <div class="card gallery">
                            <img src={img1} class="card-img-top" alt="..."/>                            
                            </div>
                        </div>  
                        <div class="col">
                            <div class="card gallery">
                            <img src={img2} class="card-img-top" alt="..."/>                            
                            </div>
                        </div>  
                        <div class="col">
                            <div class="card gallery">
                            <img src={img3} class="card-img-top" alt="..."/>                            
                            </div>
                        </div>  
                        <div class="col">
                            <div class="card gallery">
                            <img src={img4} class="card-img-top" alt="..."/>                            
                            </div>
                        </div>  
                        <div class="col">
                            <div class="card gallery">
                            <img src={img5} class="card-img-top" alt="..."/>                            
                            </div>
                        </div>  
                        <div class="col">
                            <div class="card gallery">
                            <img src={img6} class="card-img-top" alt="..."/>                            
                            </div>
                        </div>  
                        <div class="col">
                            <div class="card gallery">
                            <img src={img7} class="card-img-top" alt="..."/>                            
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;