import React from "react";
// import sharePic from "../../img/piece.png";
const home = () => {
    function toggleAnswer(element) {
        element.nextElementSibling.style.display =
          element.nextElementSibling.style.display === "block" ? "none" : "block";
        element.children[0].style.display =
          element.nextElementSibling.style.display === "block" ? "none" : "inline";
        element.children[1].style.display =
          element.nextElementSibling.style.display === "block" ? "inline" : "none";
      }
  return (
   
      <div className='App'>
          <br/><br/><br/><br/><br/><br/><br/>
        <header class="masthead">
            <div class="container">
                <div class="masthead-heading text-uppercase">Say Goodbye to Excessive Workloads and Hello to Improved Student Outcome</div>
                <div>Mark My Words is a revolutionary new software that helps teachers provide effective, data-driven feedback to their students.</div>
                <div>Learn more +</div>
            </div>
        </header>

      <main>
      {/* Services */}
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Say Goodbye to Spreadsheets and post-it notes</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-3">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-list fa-stack-2x text-primary"></i>
                            
                        </span>
                        <h4 class="my-3">Improved feedback for students</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-3">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-sort-amount-desc  fa-stack-2x text-primary"></i>
                            
                        </span>
                        <h4 class="my-3">Reduced workload for teachers</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-3">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-pie-chart fa-stack-2x text-primary"></i>
                            
                        </span>
                        <h4 class="my-3">Data-driven insights</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-3">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-line-chart fa-stack-2x text-primary"></i>
                            
                        </span>
                        <h4 class="my-3">Enhance student outcomes</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* Portfolio Grid */}
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Spreadsheets and post-it notes</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <section id="scroll">
                    <div class="container px-5">
                        <div class="row gx-5 align-items-center">
                            <div class="col-lg-5 order-lg-2">
                                <div class="p-5">
                                    {/* <img class="img-fluid" src="assets/img/6.jpg" alt="..." /> */}
                                </div>
                            </div>
                            <div class="col-lg-7 order-lg-1">
                                <div class="p-5">
                                    <h2 class="display-4">For those about to rock...</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        {/* About */}
        <section class="page-section" id="about">
            <div class="container">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt."  
            </div>
            <br/><br/>
            
            <div class="row">
                <div class="col-6"></div>
                <div class="col-3">
                    <div><b>James Smith</b></div>
                    <div>English Teacher (Alphington High)</div>
                </div>
                <div class="col-3">
                    {/* <img class="mx-auto rounded-circle" src="assets/img/faq/2.jpg" alt="..." style="width: 60px;height: 60px;"/> */}
                </div>
            </div>
        </section>
        {/* FAQ */}
        <section class="page-section bg-light" id="faq">
            <div class="container">
                <div class="text-center">
                    <h2 class="text-uppercase">FAQ</h2>
                    {/* <h3 class="text-muted"></h3> */}
                </div>
                
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        <div class="faq_section">
            <div class="accordion">
                <div class="card">
                  <div class="card-header question-answer" onclick={toggleAnswer(this)}>
                    <i class="fa fa-plus"></i>
                    <i class="fa fa-minus minus-icon"></i>
                    Question 1
                  </div>
                  <div class="answer">
                    Answer 1
                  </div>
                </div>
    
                <div class="card">
                  <div class="card-header question-answer" onclick={toggleAnswer(this)}>
                    <i class="fa fa-plus"></i>
                    <i class="fa fa-minus minus-icon"></i>
                    Question 2
                  </div>
                  <div class="answer">
                    Answer 2
                  </div>
                </div>
    
                <div class="card">
                    <div class="card-header question-answer" onclick={toggleAnswer(this)}>
                        <i class="fa fa-plus"></i>
                        <i class="fa fa-minus minus-icon"></i>
                        Question 3
                    </div>
                    <div class="answer">
                        Answer 3
                    </div>
                </div>
    
                <div class="card">
                    <div class="card-header question-answer" onclick={toggleAnswer(this)}>
                        <i class="fa fa-plus"></i>
                        <i class="fa fa-minus minus-icon"></i>
                        Question 4
                    </div>
                    <div class="answer">
                        Answer 4
                    </div>
                </div>
    
                 {/* Add more questions and answers here */}
            </div>
        </div>


      </main>

          {/* <br/>
          <div className="sharethis-inline-share-buttons" data-url="https://www.facebook.com/coreliaproject/" data-title="Corelia project" data-image={sharePic} data-description="Corelia project aims to build a centralised database for female composers" data-message="Hey look what I found, this website is awesome, check it out!" data-email-subject="I wanna share this with you"></div>
          <br/> */}
      <footer>

      <section class="bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="row">
                            <div class="col">
                                <a class="navbar-brand" href="#page-top">
                                    {/* <img src="assets/img/logo.png" alt="..." style="width: 60px; height: 60px;"/> */}
                                </a>
                            </div>
                            <div class="col-8">
                                <div><b>MarkMyWords</b></div>
                            </div>
                            
                            
                        </div>
                        <br/>
                        <div class="row">
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="text-sm-start">Copyright &copy; MarkMyWords 2023</div>
                        </div>
                    </div>
                    <div class="col"></div>
                    <div class="col">
                        <br/><br/><br/>
                        <div><b>Pages</b></div>
                        <div>Features</div>
                        <div>Pricing</div>
                        <div>Contact</div>
                    </div>
                    <div class="col">
    
                    </div>
                    <div class="col">
                        <br/><br/><br/>
                        
                        <div><b>Contact</b></div>
                        <div><span><i class="fas fa-stack-2x text-primary"></i></span>(61) 555-5555</div>
                        <div>office@markmywords.com</div>
                        <div>25 Tree st, Richmond, VIC 3121, Australia</div>
                    </div>
                    <div class="col">
    
                    </div>
                </div>
                </div>
                
        </section>
      </footer>
    </div>
    
  );
};
export default home;
