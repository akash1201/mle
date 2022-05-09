import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "./landingpage.css";

const Homepage = () => {
  const [images, setImages] = useState(() => [
    "./img/founders/jay-braik.png",
    "./img/founders/bijay-braik.png",
  ]);

  return (
    <div>
      <div className="container-fluid">
        <div className="headerLanding">
          <a href="#default" className="logo">
            <img
              className="main-logo"
              src="img/logo/logo.png"
              alt=""
              style={{ width: "5rem", height: "5rem" }}
            />
          </a>
          <div className="headerLanding-right">
            <Link
              className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
              to="/login"
            >
              Sign In
            </Link>
            <Link
              className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
              to="/"
            >
              Register
            </Link>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">
                About<span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#">
                Download
              </a>
              <a className="nav-item nav-link" href="#">
                Startup Business
              </a>
            </div>
          </div>
        </nav>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: "30rem" }}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1591586116988-62fe65164f8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
                alt="First slide"
              />
            </div>
            <div className="carousel-item" style={{ height: "30rem" }}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1546209705-a7eba4e8da21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item" style={{ height: "30rem" }}>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <section className="pt-5 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">Our Products</h3>
            </div>
            <div className="col-6 text-right">
              <a
                className="btn btn-primary mb-3 mr-1"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-arrow-left"></i>
              </a>
              <a
                className="btn btn-primary mb-3"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-12">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Special title treatment
                            </h4>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Special title treatment
                            </h4>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Special title treatment
                            </h4>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Special title treatment
                            </h4>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Special title treatment
                            </h4>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Special title treatment
                            </h4>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="100%x280"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Special title treatment
                            </h4>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1546209705-a7eba4e8da21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Special title treatment
                            </h4>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Special title treatment
                            </h4>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="py-5">
          <h3 className="text-center">About Us</h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 ">
              <img
                src="https://images.unsplash.com/photo-1635341083777-5f93a755e916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                className="img-fluid aboutimg"
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12 ">
              <h3>
                JLE is an attempt to give tier 2 city the feel of e-commerce. !
              </h3>
              <p className="py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <a href="about.php" className="btn btn-primary">
                Check More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="position-relative" id="footer-main">
          <div className="footer pt-lg-7 footer-primary">
            <div className="container pt-3">
              <div className="row">
                <div className="col-lg-6 mb-6 mb-lg-0">
                  <span>
                    <h3 style="color: white">
                      <span style="color: #ffffff">Gravity</span>Bites
                    </h3>
                  </span>
                </div>

                <div className="col-lg-3 col-6 col-sm-4 mb-5 mb-lg-0">
                  <h6 className="heading mb-3">
                    <b>Company</b>
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Term and Condition</a>
                    </li>
                    <li>
                      <a href="#">Newslatter</a>
                    </li>
                    <li>
                      <a href="#">Cookies</a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                  <h6 className="heading mb-3">
                    <b>Social Media</b>
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">YouTube</a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="divider divider-fade divider-dark my-4" />
              <div className="row align-items-center justify-content-md-between pb-4">
                <div className="col-md-6">
                  <div className="copyright text-sm font-weight-bold text-center text-md-left">
                    &copy; 2022{" "}
                    <a href="#" target="_blank">
                      GravityBites
                    </a>
                    . All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      <Footer />
    </div>
  );
};

export default Homepage;
