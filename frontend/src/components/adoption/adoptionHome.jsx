import React from 'react';
import choose from "../assets/choose.svg"
import adoptBanner from "../assets/adoptionBanner.svg"
import AdoptionCard from "../listingPage/recommendation.jsx"

import {Link} from "react-router-dom"
import './adoptionHome.css'; // Import the CSS file

function Home() {
    return (
        <>
            <div className="container">
                <img src={adoptBanner} alt="Two children holding a small dog in a pet store" />
            </div>

            <div className="text1">
                <h1>Meet local pets</h1>
            </div>
            <div className="text2">
                <p>Check out nearby pets looking for forever homes.</p>
            </div>
            
            <div className="cardsContainer">
                <AdoptionCard/>
                
            </div>
            <div className="button-container">
                <button className="my-button"><Link to='/listing'>Show More Pets</Link></button>
            </div>
            <div className="tool">
                <h1>Use our tools</h1>
                <p>Learn how you can use all the tools from Adopt a Pet and our partners.</p>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-4">
                        <div className="mh-service-item">
                            <i className="fa fa-home fa-2x golden-color" style={{ color: '#ec8f03' }}></i>
                            <h3>Rehome a pet</h3>
                            <p>Need to find a new home for a pet? We're here to help them find a new family, quickly and safely.</p>
                            <a href="#" className="btns btn-primary">Learn More</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="mh-service-item">
                            <i className="fa fa-home fa-2x golden-color" style={{ color: '#ec8f03' }}></i>
                            <h3>Protect your pet</h3>
                            <p>Nationwide offers the best pet health insurance for the best pet owners. Make sure your pet is protected with pet insurance from Nationwide.</p>
                            <a href="#" className="btns btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upContainer">
                <div className="end_container">
                    <div className="content">
                        <h1>Start your rescue</h1>
                        <h1>Pet search here</h1>
                        <div className="topic"></div>
                        <form action="#">
                            <label><b>I am looking for:</b></label><br />
                            <select name="animal" id="animal" className="custom-select">
                                <option value="dogs">Dogs</option>
                                <option value="cats">Cats</option>
                                <option value="birds">Birds</option>
                                <option value="fish">Fish</option>
                            </select>
                        </form>
                        <div className="topic"></div>
                        <form action="#">
                            <label><b>Available for adoption in...</b></label><br />
                            <select name="country" id="country" className="custom-select">
                                <option value="India">India</option>
                                <option value="Albania">Pakistan</option>
                                <option value="Africa">Africa</option>
                                <option value="China">China</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Eswatini">Eswatini</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Japan">Japan</option>
                                <option value="Libya">Libya</option>
                                <option value="Maldives">Maldives</option>
                            </select>
                        </form>
                        <p>Search from 9,055 adoptable pets from<br />rescue groups, shelters, pounds, and vets<br />across the nation!</p>
                        <a href="#" className="btn btn-primary">Start your search </a>
                    </div>
                    <div className="image-container">
                        <img src={choose} alt="Image Description" />
                    </div>
                </div>
            </div>
            <div className="last">
                <div className="last_box">
                    <h1>Check out the adoption advice</h1>
                    <h6>Check out adoption advice Get the inside scoop on pet adoption<br />and bring home a furry friend.</h6>
                    <div className="container3">
                        <div className="rows text-center">
                            <div className="col-sm-4">
                                <div className="advice">
                                    <h3>Why we recommend adopting</h3>
                                    <p>
                                        There are so many reasons to adopt: meeting a unique pet,<br />spending less, doing a good deed—but let’s talk facts. Millions<br />of pets enter shelters every year. And hundreds of thousands<br />are euthanized each year. We don’t tell you that to guilt you or<br />be a downer, but that’s why adoption really matters to us. So<br />we would love it if you considered adopting. And, since you're<br />here, we’re guessing you are. Seriously, no judgment if you<br />find a pet another way (every pet parent journey is different!).<br />But we’re here to help make adoption easier, however we can.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="advice">
                                    <h3>How to find the perfect pet</h3>
                                    <p>
                                        Let’s bust a myth. The perfect pet? Doesn’t exist. Because<br />there are so many pets that can be the right fit for you. It’s<br />just about knowing what you’re looking for. So start by<br />thinking about your criteria based on your lifestyle, breed<br />preferences, living situation, (fur and human) family, etc. From<br />there, our team can help match you with the right pet. Check<br />out our New Pet Alerts too: with Alerts, we’ll email you newly<br />added adoptable pets that fit your search—so you can check<br />out matches and meet your next best friend faster.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
