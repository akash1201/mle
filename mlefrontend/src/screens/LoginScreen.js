import React, { useEffect, useState } from "react";
import { login } from "../ApiCalls/UserAuth";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({ match }) => {
  let navigate = useNavigate();
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, []);

  const [userName, setUserName] = useState(() => "");
  const [password, setPassword] = useState(() => "");

  const [error, setError] = useState(() => "");
  const [loading, setLoading] = useState(() => false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!userName || userName.trim() == "") {
      setError("Enter Username");
      setTimeout(() => {
        setError("");
      }, 4500);
      return;
    }
    if (!password || password.trim() == "") {
      setError("Enter Password");
      setTimeout(() => {
        setError("");
      }, 4500);
      return;
    }
    setLoading(true);
    setError("");
    let response = await login(userName, password);

    if (response.status == 200) {
      setLoading(false);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/dashboard");
    } else {
      setLoading(false);
      setError(response.data.msg);
      setTimeout(() => {
        setError("");
      }, 4500);
      return;
    }
  };

  return (
    <>
      <div className="color-line"></div>

      <div className="container-fluid" style={{ paddingTop: "10%" }}>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
          <div className="col-md-4 col-md-4 col-sm-4 col-xs-12">
            <div className="text-center m-b-md custom-login">
              <h3 style={{ color: "white" }}>PLEASE LOGIN TO JLE Dashboard</h3>
            </div>
            <div className="hpanel">
              <div className="panel-body">
                {error && (
                  <div role="alert" className="alert alert-danger">
                    {error}
                  </div>
                )}

                {loading ? (
                  <div className="d-flex justify-content-center">
                    <div
                      className="spinner-border"
                      role="status"
                      style={{ width: "10rem", height: "10rem" }}
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <form id="loginForm">
                    <div className="form-group">
                      <label className="control-label" for="username">
                        Username
                      </label>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                        placeholder=""
                        title="Please enter you username"
                        name="username"
                        id="username"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label" for="password">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        title="Please enter your password"
                        name="password"
                        id="password"
                        className="form-control"
                      />
                    </div>

                    <button
                      className="btn btn-success btn-block loginbtn"
                      onClick={submitHandler}
                    >
                      Login
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
