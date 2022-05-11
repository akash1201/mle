import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import slide1 from "./JLE1.png";
import slide2 from "./JLE2.png";
import slide3 from "./JLE3.png";
import jle11 from "./jle11.png";
import jle12 from "./jle12.png";
import jle13 from "./jle13.png";
import jle14 from "./jle14.png";
import jle15 from "./jle15.png";
import jle16 from "./jle16.png";
import img1 from "./about.png";
import logo from "./logo.png";
import "./landingpage.css";

const Homepage = () => {
  const [images, setImages] = useState(() => [
    "./img/founders/jay-braik.png",
    "./img/founders/bijay-braik.png",
  ]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="container-fluid" style={{ width: "100%", padding: "0" }}>
        <div className="headerLanding">
          <a href="#default" className="logo">
            <img
              className="main-logo"
              src={logo}
              alt=""
              style={{ width: "5rem", height: "5rem" }}
            />
          </a>
          {/* <div className="headerLanding-right"> */}
          {/* <Link
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
            </Link> */}
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light headerLanding-right"
            style={{ marginBottom: "0" }}
          >
            <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
              style={{ width: "100%" }}
            >
              <div className="navbar-nav">
                <Link
                  to="/login"
                  className="nav-item nav-link "
                  href="#"
                  style={{
                    fontWeight: "900",
                    color: "navy",
                    color: "#7ac81e",
                    fontSize: "1.5rem",
                  }}
                >
                  LOGIN<span className="sr-only">(current)</span>
                </Link>
                <a
                  className="nav-item nav-link"
                  href="#"
                  style={{
                    fontWeight: "900",
                    color: "navy",
                    color: "#7ac81e",
                    fontSize: "1.5rem",
                  }}
                >
                  REGISTER
                </a>
              </div>
            </div>
          </nav>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ marginBottom: "0" }}
        >
          <button
            className="navbar-toggler hamburger-button"
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
              <a
                className="nav-item nav-link"
                href="#"
                style={{ fontWeight: "900", color: "navy" }}
              >
                ABOUT<span className="sr-only">(current)</span>
              </a>
              <a
                className="nav-item nav-link"
                href="https://drive.google.com/drive/folders/1I1bAta_WLMFjNi-dkz_nSxQ20VUJ6pgX?usp=sharing"
                style={{ fontWeight: "900", color: "navy" }}
              >
                DOWNLOAD
              </a>
              <a
                className="nav-item nav-link"
                href="#"
                style={{ fontWeight: "900", color: "navy" }}
              >
                START A BUSINESS
              </a>
            </div>
          </div>
        </nav>
        <div
          id="carouselExampleIndicators"
          className="carousel slide card-slider"
          data-ride="carousel"
          style={{ marginTop: "0" }}
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
            <div className="carousel-item active ">
              <img className="d-block w-100" src={slide1} alt="First slide" />
            </div>
            <div className="carousel-item ">
              <img className="d-block w-100" src={slide2} alt="Second slide" />
            </div>
            <div className="carousel-item ">
              <img className="d-block w-100" src={slide3} alt="Third slide" />
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

      <section className="pt-5 pb-5 our-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h2 className="mb-3" style={{ fontWeight: "900", color: "navy" }}>
                OUR PRODUCTS
              </h2>
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
                      <div className="col-md-4 mb-3 card-column">
                        <div
                          className="card"
                          style={{
                            boxShadow:
                              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                          }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={jle11}
                          />
                          <div className="card-body">
                            <h4 className="card-title">Dry Fruits & Nuts</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 card-column">
                        <div
                          className="card"
                          style={{
                            boxShadow:
                              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                          }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={jle12}
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Cold Pressed Olive Oil
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 card-column">
                        <div
                          className="card"
                          style={{
                            boxShadow:
                              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                          }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={jle13}
                          />
                          <div className="card-body">
                            <h4 className="card-title">Premium Sugar</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3 card-column">
                        <div
                          className="card"
                          style={{
                            boxShadow:
                              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                          }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={jle14}
                          />
                          <div className="card-body">
                            <h4 className="card-title">Dal & Pulses</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 card-column">
                        <div
                          className="card"
                          style={{
                            boxShadow:
                              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                          }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={jle15}
                          />
                          <div className="card-body">
                            <h4 className="card-title">Basmati Rice</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 card-column">
                        <div
                          className="card"
                          style={{
                            boxShadow:
                              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                          }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={jle16}
                          />
                          <div className="card-body">
                            <h4 className="card-title">Red Chilli Powder</h4>
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

      <section
        className="my-5 about-us"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
        }}
      >
        <div className="py-5">
          <h2
            className="text-center"
            style={{ fontWeight: "900", color: "navy" }}
          >
            ABOUT US
          </h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 ">
              <img
                src={img1}
                className="img-fluid aboutimg"
                style={{ width: "100%", height: "85%" }}
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12 ">
              <h3>
                JLE is an attempt to give tier 2 city the feel of e-commerce. !
              </h3>
              <p className="py-3">
                We give homedelivery of grocery items, where you can get
                cashbacks and exicting prizes . Get deliver everything at your
                doorstep ,also you can join us for more discounts and more
                earning opputunities.
              </p>
              <p>
                At JLE MEGA MART, we value our customers so much that we have
                engrained our customer service into our core values. Everything
                we do stems from our desire to make shopping at JLE MEGA MART
                the best shopping experience you can get anywhere. If there is
                anything we can do to better serve you, please let us know.
              </p>
              <a href="about.php" className="btn btn-primary">
                Check More
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="position-relative"
        id="footer-main"
        style={{ backgroundColor: "navy" }}
      >
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <a href="index.html">
                <span>
                  <h3 style={{ color: "white" }}>
                    <span style={{ color: "#7ac81e" }}>JLE </span>Megamart
                  </h3>
                </span>
              </a>

              <p
                className="mt-4 text-sm opacity-8 pr-lg-4"
                style={{ color: "white" }}
              >
                JLE is an attempt to give tier-2 city the feel of e-commerce.
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

            <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0"></div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0"></div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0"></div>
          </div>
          <hr className="divider divider-fade divider-dark my-4" />
          <div className="row align-items-center justify-content-md-between pb-4">
            <div className="col-md-6">
              <div
                className="copyright text-sm font-weight-bold text-center text-md-left"
                style={{ color: "white" }}
              >
                &copy; 2022{" "}
                <a
                  href="#"
                  className="font-weight-bold"
                  target="_blank"
                  style={{ color: "#7ac81e" }}
                >
                  JLE Megamart
                </a>
                . All rights reserved
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/terms-and-conditions"
                    style={{ color: "#7ac81e" }}
                  >
                    Terms
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/privacy-policy"
                    style={{ color: "#7ac81e" }}
                  >
                    Privacy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/refund"
                    style={{ color: "#7ac81e" }}
                  >
                    Refund
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about-us"
                    style={{ color: "#7ac81e" }}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
