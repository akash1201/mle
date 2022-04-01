import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Homepage = () => {

    const [images, setImages] = useState(()=>['./img/founders/jay-braik.png', './img/founders/bijay-braik.png'])

          return(<>
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
                {/* <!-- <img alt="Image placeholder" src="assets/img/brand/logo.png" id="navbar-logo"> --> */}
            </a>
           
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
           
            <div className="collapse navbar-collapse" id="navbarCollapse">
               
                <ul className="navbar-nav mt-4 mt-lg-0 ml-auto">
                   {/* <li className="nav-item ">
                        <a className="nav-link" href="index.html">Overview</a>
                    </li> */}
                    {/* <li className="nav-item dropdown dropdown-animate" data-toggle="hover">
                        <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                        <div className="dropdown-menu dropdown-menu-single">
                            <a href="index.html" className="dropdown-item">Homepage</a>
                            <a href="about.html" className="dropdown-item">About us</a>
                            <a href="contact.html" className="dropdown-item">Contact</a>
                            <div className="dropdown-divider"></div>
                            <a href="login.html" className="dropdown-item">Login</a>
                        </div>
                    </li> */}
                    {/* <li className="nav-item ">
                        <a className="nav-link" href="docs/index.html">Docs</a>
                    </li>  */}
                </ul>
               
                <Link className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3" to="/login">
                    Sign In
                </Link>
              
                <div className="d-lg-none text-center">
                    <a href="#" className="btn btn-block btn-sm btn-warning">See more details</a>
                </div>
            </div>
        </div>
    </nav>

    <section className="slice py-7">
        <div className="container">
            <div className="row row-grid align-items-center">
                <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
                  
                    <figure className="w-100">


                        {/* <!-- <img alt="Image placeholder" src="assets/img/svg/illustrations/illustration-3.svg" className="img-fluid mw-md-120"> --> */}
                        {/* <img alt="Image placeholder" src={images} className="img-fluid mw-md-120" /> */}

                        <Slider 
                        dots = {true}
                        infinite = {true}
                        speed ={1000}
                        autoplay={true}
                        autoplaySpeed={3000}
                        slidesToShow = {1}
                        slidesToScroll= {1}
                        >
                            {
                                images.length != 0 &&
                                images.map((e, i)=>(
                                    <div key={i}>
                                    <img alt="Image placeholder" src={e} className="img-fluid mw-md-120" />
                                  </div>
                                ))
                            }
                        </Slider>

                    </figure>
                </div>
                <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                   
                    <h1 className="display-4 text-center text-md-left mb-3">
                        It's time to get <strong className="text-primary">everything online</strong>
                    </h1>
               
                    <p className="lead text-center text-md-left text-muted">
                        Register in our website, and get started in no time.
                    </p>
                    <div className="text-center text-md-left mt-5">
                        <Link to='/login' className="btn btn-primary btn-icon" target="_blank">
                            <span className="btn-inner--text">Sign In</span>
                            <span className="btn-inner--icon"><i data-feather="chevron-right"></i></span>
                        </Link>
                       <a href="#" className="btn btn-neutral btn-icon d-none d-lg-inline-block" target="_blank">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <section className="slice slice-lg pt-lg-6 pb-0 pb-lg-6 bg-section-secondary">
        <div className="container">
            <div className="row mb-5 justify-content-center text-center">
                <div className="col-lg-6">
                    <span className="badge badge-soft-success badge-pill badge-lg">
                        Get started
                    </span>
                    <h2 className=" mt-4">Want to increase your business reach?</h2>
                    <div className="mt-2">
                        <p className="lead lh-180">Register and use our app to do it within no time.</p>
                    </div>
                </div>
            </div>
           
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body pb-5">
                            <div className="pt-4 pb-5">
                                <img src="assets/img/svg/illustrations/illustration-5.svg" className="img-fluid img-center" style={{style : '150px'}} alt="Illustration" />
                            </div>
                            <h5 className="h4 lh-130 mb-3">Hassel free registration</h5>
                            <p className="text-muted mb-0">Just enter your basic details and upload necessary documents.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body pb-5">
                            <div className="pt-4 pb-5">
                                <img src="assets/img/svg/illustrations/illustration-6.svg" className="img-fluid img-center" style={{height : '150px'}} alt="Illustration" />
                            </div>
                            <h5 className="h4 lh-130 mb-3">Get more sales</h5>
                            <p className="text-muted mb-0">Increase your sales by being visible to more audience within your city.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body pb-5">
                            <div className="pt-4 pb-5">
                                <img src="assets/img/svg/illustrations/illustration-7.svg" className="img-fluid img-center" style={{height : '150px'}} alt="Illustration" />
                            </div>
                            <h5 className="h4 lh-130 mb-3">Get it delivered.</h5>
                            <p className="text-muted mb-0">we're responsible for picking and delivering the orders on your behalf.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="slice slice-lg">
        <div className="container">
            <div className="py-6">
                <div className="row row-grid justify-content-between align-items-center">
                    <div className="col-lg-5 order-lg-2">
                        <h5 className="h3">Need a quick admin panel for your website?</h5>
                        <p className="lead my-4">
                            With Quick you get components and examples, including tons of variables that will help you customize this theme with ease.
                        </p>
                        <ul className="list-unstyled mb-0">
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                            <i className="fas fa-file-invoice"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="h6 mb-0">Perfect for modern startups</span>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                            <i className="fas fa-store-alt"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="h6 mb-0">Ready to be customized</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="card mb-0 mr-lg-5">
                            <div className="card-body p-2">
                                <img alt="Image placeholder" src="assets/img/theme/light/screen-1-1000x800.jpg" className="img-fluid shadow rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6">
                <div className="row row-grid justify-content-between align-items-center">
                    <div className="col-lg-5">
                        <h5 className="h3">A modern project management dashboard</h5>
                        <p className="lead my-4">
                            With Quick you get components and examples, including tons of variables that will help you customize this theme with ease.
                        </p>
                        <ul className="list-unstyled mb-0">
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                            <i className="fas fa-file-invoice"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="h6 mb-0">Perfect for modern startups</span>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                            <i className="fas fa-store-alt"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="h6 mb-0">Ready to be customized</span>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                            <i className="fas fa-store-alt"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="h6 mb-0">Designed for every devices</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-0 ml-lg-5">
                            <div className="card-body p-2">
                                <img alt="Image placeholder" src="assets/img/theme/light/screen-2-1000x800.jpg" className="img-fluid shadow rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 */}

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
          </>);
}

export default Homepage;