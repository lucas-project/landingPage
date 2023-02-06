import React, { useState} from "react";
import { Link } from 'react-router-dom';


const Contact = () => {
    const imgStyle = {
        width: '120px',
        height: '120px'
    }
    const socialImg = {
        width: '40px',
        height: '40px'
    }

    const imgStyle_3 = {
        width: '60px',
        height: '60px'
    }

    const imgStyle_2 = {
        width: '80%'
    }

    const divStyle_1 = {
        borderStyle: 'solid',
        padding: '5%'
    }
    
    const divStyle_2 = {
        margin: 'auto',
        marginLeft: '10%'
    }

    const divStyle_3 = {
        
        marginLeft: '10%'
    }

    const divStyle_4 = {
        
        margin: 'auto'
    }
    const divStyle_5 = {
        
        marginTop: '10%'
    }

    const divStyle_6 = {
        
        margin: '5%'
    }
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand" href="#page-top"><img src="logo.png" alt="..." style={imgStyle}/></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars ms-1"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Features</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/pricing">Pricing</Link>
                                    </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">Contact</Link>
                                </li>
                                <button type="button" class="btn btn-outline-primary">login</button>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            <br /><br />
        
            <div style={divStyle_6}>
                <div className="bg-light" style = {divStyle_5}>
                    <div className="row" style={divStyle_4}>
                        <div className="col-6">
                            <img src="7.png" alt="..." style={imgStyle_2}/>
                        </div>
                        <div className="col-6"  style={divStyle_1}>
                            <div className="masthead-heading text-uppercase">Our Stories</div>
                            <div className="div-heading text-uppercase">"How we started the  company/ the idea"</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiuod tempor incidiunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt.
                            </div>
                        </div>
                    </div>

                </div>
                <br/><br/><br/>

                <div>
                    <div className="row" style={divStyle_2}>
                        
                        <div className="col">
                            <div className="masthead-heading text-uppercase">Contact us</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt.
                            </div>
                                <br/><br/><br/><br/>
                            <form>
                                <div className="row">
                                    <input type="text" className="form-control" placeholder="Your name" />
                                </div>
                                <br/>
                                <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Address" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Postcode" />
                                </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <input type="text" className="form-control" placeholder="Contact phone" />
                                </div>
                                <br/>
                                <div className="row">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                <br/>
                                <div className="row">
                                    <input type="text" className="form-control" placeholder="Tell us your problem" />
                                </div>
                                <br/>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col" style={divStyle_3}>
                            <div><b>Office</b></div>
                            <div>25 Tree st, Richmond, VIC 3121, Australia</div>
                            <br/>
                            <div><b>For Quick Inquires</b></div>
                            <div>+613333330</div>
                        </div>

                    </div>
                </div>
                    
            
                <div className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="row">
                                    <div className="col">
                                        <a className="navbar-brand" href="#page-top"><img src="logo.png" alt="..." style={imgStyle_3}/></a>
                                    </div>
                                    <div className="col-8">
                                        <div><b>MarkMyWords</b></div>
                                    </div>
                                    
                                    
                                </div>
                                <br/>
                                <div className="row">
                                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
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
        </div>
    )

};

export default Contact;