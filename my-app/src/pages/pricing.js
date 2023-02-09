import React, { useState} from "react";
import PriceTable from "../components/priceTable";
import NavBar from "../components/navBar";

import Footer from "../components/footer";

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
            <NavBar/>
            <div className="page-section bg-light" id="priceInfo">
                <div className="container flex hstack">
                    <div className="text-center col-6 flex vstack justify-content-around">
                        <h1 className="div-heading text-uppercase m-3">Manage All Your School Skills in One Place</h1>
                        {/* <h3 className="div-subheading text-muted">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</h3> */}
                        <div className="flex">
                            {/* <h2 className="display-4">For those about to rock...</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p> */}
                            <div className='text-start m-3'>
                                <img className="inlineLogoStyle-left me-3" src="check.png" alt="check"/> 
                                <h6>Free 15-day trial</h6>
                            </div >
                            <div className='text-start m-3'>
                                <img className="inlineLogoStyle-left me-3" src="check.png" alt="check"/> 
                                <h6>Unlimited Team Members</h6>
                            </div >
                            <div className='text-start m-3'>
                                <img className="inlineLogoStyle-left me-3" src="check.png" alt="check"/> 
                                <h6>Cancel Anytime</h6>
                            </div >
                        </div>
                    </div>
                    <div className="col-6">
                        <img className="img-fluid" src="7.png" alt="priceInfoImage" />
                    </div>
                </div>
            </div>
            <PriceTable />
            <Footer/>             
        </div>
    )

};

export default Pricing;