import React from "react";

const Footer = () => {
    return (
    <div className="bg-light footer">             
    <div className="container sideMarginLarge">
        <div className="row sideMargin">
            <div className="col-4 allPadding">
                <div className="row">
                    <div className="col verMargin">
                        <img src="logo.png" alt="..." className="footerImgStyle"/>
                    </div>
                    <div className="col verMargin alignCenter">
                        <b>MarkMyWords</b>
                    </div>
                </div>
                <div className="row verMargin spaceAroundFlex">
                    <a className="btn btn-social mx-2"><img src='fb.png' alt='social media logos' className='socialImg'/></a>
                    <a className="btn btn-social mx-2"><img src='ins.png' alt='social media logos' className='socialImg'/></a>
                    <a className="btn btn-social mx-2"><img src='twt.png' alt='social media logos' className='socialImg'/></a>
                    <a className="btn btn-social mx-2"><img src='you.png' alt='social media logos' className='socialImg'/></a>
                </div>
                <br/>
                <div className="row verMargin">
                    <div className="text-sm-start">Copyright &copy; MarkMyWords 2023</div>
                </div>
            </div>
            <div className="col-4 allPadding ">
                <p><b>Pages</b></p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Contact</p>
            </div>
            <div className="col-4 allPadding">
                <p><b>Contact</b></p>
                <p><span><i className="fas fa-stack-2x text-primary"></i></span>(61) 555-5555</p>
                <p>office@markmywords.com</p>
                <p>25 Tree st, Richmond, VIC 3121, Australia</p>
            </div>

        </div>
    </div>
        
    </div>
    );
};

export default Footer;
