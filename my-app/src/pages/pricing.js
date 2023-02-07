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
            <PriceTable />
            <Footer/>             
        </div>
    )

};

export default Pricing;