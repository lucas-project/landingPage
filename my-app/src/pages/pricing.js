import React, { useState} from "react";
import { Link } from "react-router-dom";
import PriceTable from "../components/priceTable";


const Pricing = () => {
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
            <br/>
            
            <PriceTable />
            
     
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col">
                                    <a className="navbar-brand" href="#page-top">
                                        <img src="logo.png" alt="..." style={imgStyle}/></a>
                                </div>
                                <div className="col-8">
                                    <div><b>MarkMyWords</b></div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <a className="btn btn-social mx-2"><img src='fb.png' alt='social media logos' style={socialImg}/></a>
                                <a className="btn btn-social mx-2"><img src='ins.png' alt='social media logos' style={socialImg}/></a>
                                <a className="btn btn-social mx-2"><img src='twt.png' alt='social media logos' style={socialImg}/></a>
                                <a className="btn btn-social mx-2"><img src='you.png' alt='social media logos' style={socialImg}/></a>
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
            <div>
                
            </div>  
             
        </div>
    )

};

export default Pricing;