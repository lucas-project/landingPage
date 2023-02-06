import React from "react";
import '../css/styles.css';


const navBar = () => {
    const imgStyle = {
        width: '120px',
        height: '120px'
    }
    return (
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
                            <li class="nav-item"><a class="nav-link" href="./index.html">Features</a></li>
                            <li class="nav-item"><a class="nav-link" href="./pricing.html">Pricing</a></li>
                            <li class="nav-item"><a class="nav-link" href="./contact.html">Contact</a></li>                           
                            <button type="button" class="btn btn-outline-primary">login</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default navBar;