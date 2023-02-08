import React from "react";
import '../css/styles.css';

import { Link } from "react-router-dom";

const navBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <img className="navImgStyle" src="logo.png" alt="..."/>
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
                            <button type="button" class="btn btn-outline-primary"><Link to='/signin'>login</Link></button>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default navBar;