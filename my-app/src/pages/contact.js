import React, { useState} from "react";
import { Link } from 'react-router-dom';
const Contact = () => {
    
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><img src="assets/img/logo.png" alt="..." /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="./index.html">Features</a></li>
                        <li class="nav-item"><a class="nav-link" href="./pricing.html">Pricing</a></li>
                        <li class="nav-item"><a class="nav-link" href="./contact.html">Contact</a></li>
                        <button type="button" class="btn btn-outline-primary">login</button>
                    </ul>
                </div>
            </div>
        </nav>
     
        <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col">
                                    {/* <a className="navbar-brand" href="#page-top">
                                        <img src="assets/img/logo.png" alt="..." style="width: 60px; height: 60px;"/></a> */}
                                </div>
                                <div className="col-8">
                                    <div><b>MarkMyWords</b></div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                {/* <a className="btn btn-dark btn-social mx-2" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-dark btn-social mx-2" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-dark btn-social mx-2" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-dark btn-social mx-2" aria-label="Instagram"><i className="fab fa-instagram"></i></a> */}
                            </div>
                            <br/>
                            <div className="row">
                                <div className="text-sm-start">Copyright &copy; MarkMyWords 2023</div>
                            </div>
                        </div>
                        <div className="col"></div>
                        <div className="col">
                            <br/><br/><br/>
                            <div><b>Pages</b></div>
                            <div>Features</div>
                            <div>Pricing</div>
                            <div>Contact</div>
                        </div>
                        <div className="col">
        
                        </div>
                        <div className="col">
                            <br/><br/><br/>
                            
                            <div><b>Contact</b></div>
                            <div><span><i className="fas fa-stack-2x text-primary"></i></span>(61) 555-5555</div>
                            <div>office@markmywords.com</div>
                            <div>25 Tree st, Richmond, VIC 3121, Australia</div>
                        </div>
                        <div className="col">
        
                        </div>
                    </div>
                    </div>
                    
            </div>        
        </div>
    )

};

export default Contact;