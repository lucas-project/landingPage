import React, { useState} from "react";
import QuestionList from '../components/faq';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
// import { faSortAmountDesc } from '@fortawesome/free-solid-svg-icons';
// import { faLineChart } from '@fortawesome/free-solid-svg-icons';
// import { faPieChart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const questions = [ 
        { 
            question: 'What is ReactJS?', 
            answer: 'ReactJS is a JavaScript library for building user interfaces.' 
        }, 
        { 
            question: 'What is a React component?', 
            answer: 'A React component is a piece of UI that can be reused and combined to build a complete user interface.' 
        }, 
        { 
            question: 'What is the Virtual DOM?', 
            answer: 'The Virtual DOM is a lightweight in-memory representation of the actual DOM in a React application.' 
        } 
    ];
    const features = [        { 
        feature: 'What is feature 1?', 
        detail: 'ReactJS is a JavaScript library for building user interfaces.',
        images: ['feature1-1.png','feature1-2.png'],
    }, 
    { 
        feature: 'What is a React component?', 
        detail: 'A React component is a piece of UI that can be reused and combined to build a complete user interface.' 
    }, 
    { 
        feature: 'What is the Virtual DOM?', 
        detail: 'The Virtual DOM is a lightweight in-memory representation of the actual DOM in a React application.' 
    } ]
    const [selectedFeature, setSelectedFeature] = useState(-1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleFeatureClick = (index) => {
        setSelectedFeature(selectedFeature === index ? -1 : index)
        setCurrentImageIndex(0);
      };
      
      const handlePrevImage = () => {
        setCurrentImageIndex((currentImageIndex + features[selectedFeature].images.length - 1) % features[selectedFeature].images.length);
      };
      
      const handleNextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % features[selectedFeature].images.length);
      };
      
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="#page-top"><img src="logo.png" alt="..." /></a>
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
            <header class="masthead">
                <div class="container">
                    <div class="masthead-heading text-uppercase">Say Goodbye to Excessive Workloads and Hello to Improved Student Outcome</div>
                    <div>Mark My Words is a revolutionary new software that helps teachers provide effective, data-driven feedback to their students.</div>
                    <div>Learn more +</div>
                </div>
            </header>
            <div className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Say Goodbye to Spreadsheets and post-it notes</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                            {/* <FontAwesomeIcon icon={solid('faList')} /> */}
                                
                            </span>
                            <h4 className="my-3">Improved feedback for students</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                            {/* <FontAwesomeIcon icon={faSortAmountDesc} /> */}
                                
                            </span>
                            <h4 className="my-3">Reduced workload for teachers</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                            {/* <FontAwesomeIcon icon={faPieChart} /> */}
                                
                            </span>
                            <h4 className="my-3">Data-driven insights</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-3">
                            <span className="fa-stack fa-4x">
                            {/* <FontAwesomeIcon icon={faLineChart} /> */}
                                
                            </span>
                            <h4 className="my-3">Enhance student outcomes</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section bg-light" id="features">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Spreadsheets and post-it notes</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="features-container">
                        <div className="features-list">
                            {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div
                                className="feature-header"
                                //onClick={() => setSelectedFeature(index)}
                                onClick={() => handleFeatureClick(index)}
                                >
                                <p>{feature.feature}</p>
                                </div>
                                <div
                                className={`feature-detail ${
                                    selectedFeature === index ? 'show' : 'hide'
                                }`}
                                >
                                {feature.detail}
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="features-images">
                        {selectedFeature !== -1 && (
                        <>
                            <img
                            src={features[selectedFeature].images[currentImageIndex]}
                            alt={features[selectedFeature].feature}
                            />
                            <div className="arrows">
                            <button onClick={handlePrevImage}>&larr;</button>
                            <button onClick={handleNextImage}>&rarr;</button>
                            </div>
                        </>
                        )}
                        </div>
                    </div>
                </div>
            </div>       
            <div className="page-section" id="about">
                <div className="container">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt."  
                </div>
                <br/><br/>
                
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-3">
                        <div><b>James Smith</b></div>
                        <div>English Teacher (Alphington High)</div>
                    </div>
                    <div className="col-3">
                        {/* <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." style="width: 60px;height: 60px;"/> */}
                    </div>
                </div>
            </div>
            
            <div className="page-section bg-light" id="faq">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">FAQ</h2>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
                <QuestionList questions={questions} />
            </div>
            {/* footer */}
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
    );
};

export default Home;