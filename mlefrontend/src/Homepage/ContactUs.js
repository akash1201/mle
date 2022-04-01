import React from 'react';
import {Link} from 'react-router-dom';

const ContactUs = () => {

          return (
                    <>
           <div className="modal fade" tabIndex="-1" role="dialog" id="modal-cookies" data-backdrop="false" aria-labelledby="modal-cookies" aria-hidden="true">
        <div className="modal-dialog modal-dialog-aside left-4 right-4 bottom-4">
            <div className="modal-content bg-dark-dark">
                <div className="modal-body">
  
                    <p className="text-sm text-white mb-3">
                        We use cookies so that our themes work for you. By using our website, you agree to our use of cookies.
                    </p>
                   
                    <a href="pages/utility/terms.html" className="btn btn-sm btn-white" target="_blank">Learn more</a>
                    <button type="button" className="btn btn-sm btn-primary mr-2" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
   
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">

            <a className="navbar-brand" href="/">
                <span><h3><span style={{color : '#7ac81e'}}>JLE </span>Megamart</h3></span>
            </a>
           
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mt-4 mt-lg-0 ml-auto"></ul>
               
                <Link className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3" to="/login">
                    Sign In
                </Link>
              
                <div className="d-lg-none text-center">
                    <a href="#" className="btn btn-block btn-sm btn-warning">See more details</a>
                </div>
            </div>
        </div>
    </nav>
    <section class="slice slice-lg">
        <div class="container">
            <div class="row row-grid justify-content-between align-items-center">
                <div class="col-lg-5">
                    <h3>Matelli<br />Jalpaiguri, W.B., 735223</h3>
                    <p class="lead my-4">
                        E: <a href="#">jlemegamart@gmail.com</a><br />
                        T: +91-8724019454
                    </p>
                    <p>
                        Want to share any feedback with us, report a technical issue or just ask us a question? Fill free to contact us and we will get back to you shortly.
                    </p>
                </div>
                <div class="col-lg-6">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830872278!2d-74.1197639579598!3d40.69766374873451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sro!4v1580299124407!5m2!1sen!2sro" width="100%" height="600" frameborder="0" style="border:0;" allowfullscreen="" class="rounded"></iframe> */}
                </div>
            </div>
        </div>
    </section>

    <footer className="position-relative" id="footer-main">
        <div className="footer pt-lg-7 footer-dark bg-dark">
         
            <div className="shape-container shape-line shape-position-top shape-orientation-inverse">
                <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100"  className="fill-section-secondary">
                    <polygon points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
          
            <div className="container pt-4">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                      
                        <a href="index.html">
                            {/* <!-- <img alt="Image placeholder" src="assets/img/brand/logo.png" id="footer-logo"> --> */}
                            <span><h3 style={{color : 'white'}}><span style={{color : '#7ac81e'}}>JLE </span>Megamart</h3></span>
                        </a>
                       
                        <p className="mt-4 text-sm opacity-8 pr-lg-4">
                            JLE is an attempt to give tier 2 city the feel of e-commerce with a MLM benefits.

                        </p>
                      
                        <ul className="nav mt-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                       
                    </div>
                    <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">

                    </div>
                    <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                              
                    </div>
                </div>
                <hr className="divider divider-fade divider-dark my-4" />
                <div className="row align-items-center justify-content-md-between pb-4">
                    <div className="col-md-6">
                        <div className="copyright text-sm font-weight-bold text-center text-md-left">
                            &copy; 2022 <a href="#" className="font-weight-bold" target="_blank">JLE Megamart</a>. All rights reserved
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                            <li className="nav-item">
                            <Link className="nav-link" to='/terms-and-conditions'>
                                    Terms
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/privacy-policy">
                                    Privacy
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/refund">
                                    Refund
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
                    </>
          )
}

export default ContactUs;