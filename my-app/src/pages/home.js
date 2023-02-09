import React, { useState} from "react";
import QuestionList from '../components/faq';
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const Home = () => {
    const socialImg = {
        width: '40px',
        height: '40px'
    }
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
        feature: 'Quick, easy assessment', 
        detail: 'Mark My Words makes it easy to assess your students\' progress with our simple, consistent assessment system. Just fill out the form and let our software do the rest.',
        images: ['feature1-1.jpg','7.png'],
    }, 
    { 
        feature: 'Student Success Dashboard', 
        detail: 'With Mark My Words, your students can access a personalised dashboard that tracks their progress and provides targeted feedback. They can interact with the dashboard to learn more and see detailed breakdowns and examples of key skills. It\'s an engaging way to help them succeed.' ,
        images: ['feature1-1.jpg','7.png'],
    }, 
    { 
        feature: 'Comprehensive Assessment Matrix', 
        detail: 'Our assessment matrix offers a birds-eye view of each students\' performance, allowing them (and you) to compare skills and identify areas for improvement. Criterion-referenced and easy to understand, it\'s a valuable tool that will help each student achieve their potential.' ,
        images: ['feature1-1.jpg','7.png'],
    },
    {
        feature: 'Customisable Feedback Sets', 
        detail: 'Create your own feedback sets, so you can tailor your feedback to your students\' needs and provide personalised guidance that truly makes a difference. With our intuitive interface, it\'s never been easier to create feedback sets that are tailored to the task and the students\' specific learning goals.' ,
        images: ['feature1-1.jpg','7.png'],
        
    },
    {
        feature: 'Share and Learn with Feedback Sets', 
        detail: 'Share and Learn with Feedback Sets" Explanation: "You can access feedback sets created by other teachers, share your own feedback sets with the community, and benefit from the collective wisdom of the teaching profession. It\'s a great way to improve your feedback practice and help your students succeed.',
        images: ['feature1-1.jpg','7.png'],
        
    },
    {
        feature: 'Teacher Dashboard: Your Personal Data Assistant', 
        detail: 'We provide a comprehensive teacher dashboard that helps you stay on top of your students\' progress and guide your teaching practice. Easily track individual student and class performance, identify strengths and weaknesses, and receive targeted recommendations for improvement. It\'s like having your own personal data-driven assistant, right at your fingertips.' ,
        images: ['feature1-1.jpg','7.png'],
        
    }   
    ]
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
            <NavBar/>
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
                        <div className="col-md-3 px-3">
                            <span className="fa-stack fa-4x">
                            <img src={'1.png'} />
                                
                            </span>
                            <h4 className="my-3">Improved feedback for students</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-3 px-3">
                            <span className="fa-stack fa-4x">
                            <img src={'2.png'} />
                            </span>
                            <h4 className="my-3">Reduced workload for teachers</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-3 px-3">
                            <span className="fa-stack fa-4x">
                            <img src={'3.png'} />
                            </span>
                            <h4 className="my-3">Data-driven insights</h4>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div className="col-md-3 px-3">
                            <span className="fa-stack fa-4x">
                            <img src={'4.png'} />
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
                        <h3 className="section-subheading text-muted mx-5">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="features-container">
                        <div className="features-list">
                            {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div
                                className="feature-header"
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
                        <div className="features-images-container">
                            <img
                            src={features[selectedFeature].images[currentImageIndex]}
                            alt={features[selectedFeature].feature}
                            />
                            <div className="arrows">
                            <button onClick={handlePrevImage}>&larr;</button>
                            <button onClick={handleNextImage}>&rarr;</button>
                            </div>
                        </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>       
            <div className="page-section" id="about">
                <div className="row aboutContent">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt.""Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt.""Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt.""Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt.""Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiuod tempor incidiunt."</p>  
                </div>
                <div className="row aboutContent">
                    <div className="col-9 aboutAuthor">
                        <p><b>&nbsp;James Smith</b></p>
                        <p>&nbsp;English Teacher (Alphington High)</p>
                    </div>
                    <div className="col-3 aboutAuthorImg">
                        <img className="mx-auto rounded-circle aboutImgStyle" src="3.jpg" alt="..." />
                    </div>                   
                </div>  
            </div>
            
            <div className="page-section bg-light" id="faq">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">FAQ</h2>
                    </div>
                    <div className="row mx-5 text-center">
                        <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>
                <QuestionList questions={questions} />
            </div>
            <Footer/>
        </div>
    );
};

export default Home;