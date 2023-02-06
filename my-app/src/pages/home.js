import React, { useState, useEffect } from "react";


const Features = () => {
    

    return (
        <div>
       <div className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Say Goodbye to Spreadsheets and post-it notes</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-list fa-stack-2x text-primary"></i>
                            
                        </span>
                        <h4 className="my-3">Improved feedback for students</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-sort-amount-desc  fa-stack-2x text-primary"></i>
                            
                        </span>
                        <h4 className="my-3">Reduced workload for teachers</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-pie-chart fa-stack-2x text-primary"></i>
                            
                        </span>
                        <h4 className="my-3">Data-driven insights</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-line-chart fa-stack-2x text-primary"></i>
                            
                        </span>
                        <h4 className="my-3">Enhance student outcomes</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Spreadsheets and post-it notes</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <section id="scroll">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-5 order-lg-2">
                                <div className="p-5"><img className="img-fluid" src="assets/img/6.jpg" alt="..." /></div>
                            </div>
                            <div className="col-lg-7 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">For those about to rock...</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
        
        <div className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">FAQ</h2>
                    <h3 className="section-subheading text-muted"></h3>
                </div>
                
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </div>
        
        <div className="faq_section">
            <div className="accordion">
                <div className="card">
                  <div className="card-header question-answer" onclick="toggleAnswer(this)">
                    <i className="fa fa-plus"></i>
                    <i className="fa fa-minus minus-icon"></i>
                    Question 1
                  </div>
                  <div className="answer">
                    Answer 1
                  </div>
                </div>
    
                <div className="card">
                  <div className="card-header question-answer" onclick="toggleAnswer(this)">
                    <i className="fa fa-plus"></i>
                    <i className="fa fa-minus minus-icon"></i>
                    Question 2
                  </div>
                  <div className="answer">
                    Answer 2
                  </div>
                </div>
    
                <div className="card">
                    <div className="card-header question-answer" onclick="toggleAnswer(this)">
                        <i className="fa fa-plus"></i>
                        <i className="fa fa-minus minus-icon"></i>
                        Question 3
                    </div>
                    <div className="answer">
                        Answer 3
                    </div>
                </div>
    
                <div className="card">
                    <div className="card-header question-answer" onclick="toggleAnswer(this)">
                        <i className="fa fa-plus"></i>
                        <i className="fa fa-minus minus-icon"></i>
                        Question 4
                    </div>
                    <div className="answer">
                        Answer 4
                    </div>
                </div>
            </div>
        </div>
        
        
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
                            <a className="btn btn-dark btn-social mx-2" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-dark btn-social mx-2" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
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

export default Features;