import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sider = () => {
  let navigate = useNavigate();

  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, []);

  const sidebar = [
    {
      name: "My Profile",
      icon: "fas fa-user",
      path: "/dashboard",
      admin: true,
      user: true,
      vendor: true,
    },
    {
      name: "My Team",
      icon: "fas fa-users",
      path: "/my-dashboard",
      admin: true,
      user: true,
      vendor: false,
    },
    {
      name: "Add Downline",
      icon: "fas fa-plus",
      path: "/add-downline",
      admin: true,
      user: true,
      vendor: false,
    },
    {
      name: "Membership Benefits",
      icon: "fas fa-cog",
      path: "/membership-benefits",
      admin: true,
      user: false,
      vendor: false,
    },
    {
      name: "Vendor Management",
      icon: "fas fa-cog",
      path: "/vendor-management",
      admin: true,
      user: false,
      vendor: false,
    },
    {
      name: "My Bills",
      icon: "fas fa-cog",
      path: "/my-bills",
      admin: true,
      user: true,
      vendor: false,
    },
    {
      name: "User Management",
      icon: "fas fa-cog",
      path: "/users",
      admin: true,
      user: false,
      vendor: false,
    },
    {
      name: "Genarate RPIN",
      icon: "fas fa-cog",
      path: "/generate-rpin",
      admin: true,
      user: true,
      vendor: false,
    },
    {
      name: "Genarate Bill",
      icon: "fas fa-cog",
      path: "/generate-bill",
      admin: true,
      user: false,
      vendor: true,
    },
  ];

  const signout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <>
      <div className="left-sidebar-pro side_bar">
        <nav id="sidebar" className="">
          <div className="sidebar-header">
            <a href={"/"}>
              {/* <h4 style={{ color: "white" }}>JLE</h4> */}
              <img className="main-logo" src="img/logo/logoo.jpeg" alt="" style={{width:"5rem",height:"5rem"}}/>
            </a>
          </div>
          <div className="nalika-profile">
            <div className="profile-dtl">
              <a href="#">
                <img src="img/user-img-1.png" alt="" />
              </a>
              <h2>{userInfo ? userInfo.name : ""}</h2>
            </div>
          </div>
          <div className="left-custom-menu-adp-wrap comment-scrollbar">
            <nav className="sidebar-nav left-sidebar-menu-pro">
              <ul className="metismenu" id="menu1">
                {userInfo && userInfo.userType == "admin" ? (
                  sidebar
                    .filter((e) => e.admin)
                    .map((e, i) => (
                      <li className="active" key={i}>
                        <Link to={e.path}>
                          <i className={e.icon}></i>{" "}
                          <span className="mini-click-non">{e.name}</span>
                        </Link>
                      </li>
                    ))
                ) : userInfo.userType == "vendor" ? (
                  sidebar
                    .filter((e) => e.vendor)
                    .map((e, i) => (
                      <li className="active" key={i}>
                        <Link to={e.path}>
                          <i className={e.icon}></i>{" "}
                          <span className="mini-click-non">{e.name}</span>
                        </Link>
                      </li>
                    ))
                ) : userInfo.userType == "user" ? (
                  sidebar
                    .filter((e) => e.user)
                    .map((e, i) => (
                      <li className="active" key={i}>
                        <Link to={e.path}>
                          <i className={e.icon}></i>{" "}
                          <span className="mini-click-non">{e.name}</span>
                        </Link>
                      </li>
                    ))
                ) : (
                  <></>
                )}
                <li>
                  <a href="#" onClick={signout}>
                    <i className="fas fa-sign-out-alt"></i>{" "}
                    <span className="mini-click-non">`Sign Out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sider;
