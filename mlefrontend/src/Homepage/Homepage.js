import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menu from "./menu-down.svg";
import "./homepage.css";
import person from "./person.svg";
import Footer from "../components/Footer";
import slide1 from "./JLE1.png";
import slide2 from "./JLE2.png";
import slide4 from "./JLE4.png";
import slide3 from "./JLE3.png";
import jle11 from "./jle11.png";
import jle12 from "./jle12.png";
import jle13 from "./jle13.png";
import jle14 from "./jle14.png";
import jle15 from "./jle15.png";
import jle16 from "./jle16.png";
import img1 from "./about.png";
import logo from "./logo.png";
import search from "./search.svg";
import "./landingpage.css";
import facebook from "./img/facebook.png";
import linkedin from "./img/linkedin.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";
import instagram from "./img/instagram.png";
import downloadstore from "./img/downloadstore.png";
import appstore from "./img/appstore.png";
import whatsapp from "./img/whatsapp.png";
import bodyImg1 from "../assets/imgs/bodyImg1.jpeg";
import bodyImg2 from "../assets/imgs/bodyImg2.jpeg";
import bodyImg3 from "../assets/imgs/bodyImg3.jpeg";
import bodyImg4 from "../assets/imgs/bodyImg4.jpeg";
import "../assets/css/style.css";

const Homepage = () => {
  const [images, setImages] = useState(() => [
    "./img/founders/jay-braik.png",
    "./img/founders/bijay-braik.png",
  ]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        className="container-fluid top-slider-head"
        style={{ width: "100%", padding: "0" }}
      >
        <div className="headerShow navbar-fixed-top">
          <div className="logo-link">
            <nav
              className="navbar navbar-expand-lg navbar-light bg-light "
              style={{ marginBottom: "0", padding: "0" }}
            >
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ width: "100%", height: "100%" }}
              >
                {/* <img src={menu} style={{ width: "100%", height: "100%" }} /> */}
                <span className="navbar-toggler-icon bg-light"></span>
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
            <img
              className="main-logo"
              src={logo}
              alt=""
              style={{ height: "3.5rem", width: "5rem" }}
            />
          </div>
          <div className="nav-link">
            <nav
              className="navbar navbar-expand-lg navbar-light bg-navy login-nav "
              style={{
                marginBottom: "0",
                padding: "0",
              }}
            >
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup1"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ width: "40px", height: "40px", padding: 1, margin: 1 }}
              >
                <img src={person} style={{ width: "100%", height: "100%" }} />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarNavAltMarkup1"
              >
                <div className="navbar-nav">
                  <Link
                    to="/login"
                    className="nav-item nav-link"
                    href="#"
                    style={{ fontWeight: "900", color: "navy" }}
                  >
                    Login<span className="sr-only">(current)</span>
                  </Link>

                  <a
                    className="nav-item nav-link"
                    href="#"
                    style={{ fontWeight: "900", color: "navy" }}
                  >
                    Register
                  </a>
                </div>
              </div>
            </nav>
            <a
              style={{
                padding: "1",
                margin: "4px 0px ",
                width: 40,
                height: 40,
              }}
            >
              <img
                src={search}
                style={{ width: "100%", height: "100%", padding: 0, margin: 0 }}
              />
            </a>
          </div>
        </div>
        <div className="headerLanding ">
          <a href="#default" className="logo">
            <img
              className="main-logo"
              src={logo}
              alt=""
              style={{ width: "5rem", height: "5rem" }}
            />
          </a>
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light headerLanding-right nav-hide"
            style={{ marginBottom: "0" }}
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
            {/* <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
              style={{ width: "100%" }}
            >

            </div> */}
          </nav>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-dark nav-hide"
          style={{ marginBottom: "0", backgroundColor:'rgb(2, 2, 110)' }}
          aria-label="Tenth navbar example"
        >
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarsExample08"
                  aria-controls="navbarsExample08"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse justify-content-md-center"
                  id="navbarsExample08"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        Home{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
          {/* <button
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
            
          </div> */}
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
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <img className="d-block w-100" src={slide1} alt="First slide" />
            </div>
            <div className="carousel-item ">
              <img className="d-block w-100" src={slide2} alt="Second slide" />
            </div>
            <div className="carousel-item ">
              <img className="d-block w-100" src={slide4} alt="Third slide" />
            </div>
            <div className="carousel-item ">
              <img className="d-block w-100" src={slide3} alt="Fourth slide" />
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

      <div
        id="carouselExampleControls"
        class="carousel slide features-row2"
        data-ride="carousel"
        style={{ marginBottom: "2rem" }}
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="3000">
            <div className="card" style={{ width: "15rem", margin: "0 auto" }}>
              <img
                src={jle14}
                style={{ width: "5rem", height: "5rem", margin: "0 auto" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-interval="3000">
            <div className="card" style={{ width: "15rem", margin: "0 auto" }}>
              <img
                src={jle14}
                style={{ width: "5rem", height: "5rem", margin: "0 auto" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" data-interval="3000">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="card" style={{ width: "15rem", margin: "0 auto" }}>
              <img
                src={jle14}
                style={{ width: "5rem", height: "5rem", margin: "0 auto" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== Slider ================= */}
      <div className="main-section">
        <div class="img-section">
          <div class="img">
            <img src={bodyImg1} alt="img-1" />
          </div>
          <div class="img">
            <img src={bodyImg2} alt="img-1" />
          </div>
          <div class="img">
            <img src={bodyImg3} alt="img-1" />
          </div>
          <div class="img">
            <img src={bodyImg4} alt="img-1" />
          </div>
        </div>
      </div>
      {/* <section
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
      </section> */}

      <footer
        className="position-relative"
        id="footer-main"
        style={{ backgroundColor: "navy" }}
      >
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-6 mb-6 mb-lg-0 align-self-center ">
              <div
                className="media-center"
                style={{ flexDirection: "column", alignItems: "center" }}
              >
                <div>
                  <h1 className="custome-size1" style={{ color: "#a9f75c" }}>
                    <span>JLE </span>Megamart
                  </h1>
                </div>
                <div>
                  <p
                    style={{
                      color: "white",
                      fontSize: "1.4rem",
                      fontFamily: "sans-serif",
                    }}
                    className="custome-size2"
                  >
                    Chalsa, Dist. Jalpaiguri
                    <br />
                    755206, West Bengal
                  </p>
                </div>
              </div>
              <div className="media-center" style={{ display: "flex" }}>
                <div>
                  <a href="https://www.instagram.com/gravitybites/?hl=en">
                    <img
                      src={instagram}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "1rem",
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img
                      src={youtube}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "1rem",
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/Gravitybites/?ref=pages_you_manage">
                    <img
                      src={facebook}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "1rem",
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img
                      src={twitter}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "1rem",
                      }}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/gravity-bites-gb/">
                    <img
                      src={linkedin}
                      style={{ width: "1rem", height: "1rem" }}
                    />
                  </a>
                </div>
              </div>
            </div>
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
                <li
                  className="nav-item "
                  style={{ width: "88px", padding: "10px 0" }}
                >
                  <Link
                    className="nav-link"
                    id="about-link"
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
