import React from "react";
import "./header.css";

const Header = ({ handleToggle }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="logo-pro">
              <a href="index.html">
                <img className="main-logo" src="img/logo/logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}

      <div className="header-advance-area ">
        <div className="header-top-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="header-top-wraper">
                  <div className="row">
                    <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                      <div className="menu-switcher-pro hamburger_menu">
                        <button
                          type="button"
                          id="sidebarCollapse"
                          className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn "
                          onClick={handleToggle}
                        >
                          <i className="icon nalika-menu-task"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="breadcome-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="breadcome-list">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="breadcomb-wp">
                        <div className="breadcomb-icon">
                          <i className="icon nalika-home"></i>
                        </div>
                        <div className="breadcomb-ctn">
                          <h2>Dashboard</h2>
                          <p>
                            Welcome to JLE{" "}
                            <span className="bread-ntd">Dashboard</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="breadcomb-report">
                        <button
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Download Report"
                          className="btn"
                        >
                          <i className="icon nalika-download"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
