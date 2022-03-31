import React from 'react';
import {Link} from 'react-router-dom';

const Refund = () => {

          return (<>
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

            <a className="navbar-brand" href="index.html">
                <span><h3><span style={{color : '#7ac81e'}}>JLE </span>Megamart</h3></span>
            </a>
           
            <div className="collapse navbar-collapse" id="navbarCollapse">
               
                <Link className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3" to="/login">
                    Sign In
                </Link>
              
                <div className="d-lg-none text-center">
                    <a href="#" className="btn btn-block btn-sm btn-warning">See more details</a>
                </div>
            </div>
        </div>
    </nav>
    <h1>Refund</h1>
<p>Last updated: March 20, 2022</p>
<p>There is a 30 days refund policy</p>
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
                                <a className="nav-link" href="https://www.instagram.com/webpxs" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.facebook.com/webpixels" target="_blank">
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
                            &copy; 2022 <a href="https://webpixels.io" className="font-weight-bold" target="_blank">JLE Megamart</a>. All rights reserved
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
               </>)
}

export default Refund;