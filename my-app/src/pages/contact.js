import React, { useState} from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const Contact = () => {
    // const imgStyle = {
    //     width: '120px',
    //     height: '120px'
    // }
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
        <>
            <NavBar/>        
                <div className="bg-light page-section" >
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
                <div className="flex vstack page-section">
                    <div className="flex vstack container">
                        <h3 className="masthead-heading text-uppercase">Contact us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt.</p>
                    </div>
                    <div className="flex hstack container py-3">
                        <form className="col-8">
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
                        <div className="flex vstack container col-4 justify-content-top px-5">
                            <div><b>Office</b></div>
                            <div>25 Tree st, Richmond, VIC 3121, Australia</div>
                            <br/>
                            <div><b>For Quick Inquires</b></div>
                        <div>+61 3333330</div>
                    </div>
                    </div>
                    
                </div>

                

            <Footer/>
        </>
    )

};

export default Contact;