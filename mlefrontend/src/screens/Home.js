import React, { useState, useEffect } from "react";
import Sider from "../components/Sider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideAnalysisData from "../components/SideAnalysisData";
import TopAnalysisData from "../components/TopAnalysisData";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { getUserProfile } from "../ApiCalls/UserAuth";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  // required states
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  let navigate = useNavigate();

  const [uid, setUid] = useState(() => "");
  const [bankAccountNo, setBankAccountNo] = useState(() => "");
  const [bankIfsc, setBankIfsc] = useState(() => "");
  const [name, setName] = useState(() => "");
  const [designation, setDesignation] = useState(() => "");
  const [phoneNo, setPhoneNo] = useState(() => "");
  const [line1, setLine1] = useState(() => "");
  const [city, setCity] = useState(() => "");
  const [dist, setDist] = useState(() => "");
  const [state, setState] = useState(() => "");
  const [pin, setPin] = useState(() => "");
  const [aadharNo, setAadharNo] = useState(() => "");
  const [panNo, setPanNo] = useState(() => "");
  const [rpin, setRpin] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const [cpassword, setCpassword] = useState(() => "");
  const [loading, setLoading] = useState(() => true);
  const [update, setUpdate] = useState(false);

  const [toggle, setToggle] = useState(window.innerWidth > 767);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setToggle(window.innerWidth > 767);
    });
  }, []);


  const handleToggle = () => {
    setToggle(!toggle);
    console.log("toggling");
  };
  useState(() => {
    console.log(userInfo);
    if (userInfo) {
      getUserProfile()
        .then((res) => {
          //   console.log(res.data.user)
          if (res.status == 200) {
            let user = res.data.user;
            // console.log()
            if (user.address.line1) {
              setName(user.name);
              setUid(user.userId);
              setRpin(user.rPin ? user.rPin : "");
              setDesignation(user.designation);
              setPhoneNo(user.phone);
              setLine1(user.address.line1);
              setCity(user.address.city);
              setDist(user.address.district);
              setState(user.address.state);
              setPin(user.address.pin);
              setBankAccountNo(user.bankAccountNo);
              setBankIfsc(user.bankIfsc);
              setAadharNo(user.aadharNo);
              setPanNo(user.panNo);
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } else {
      //    console.log('Navigate will work')
      //    navigate('/login',{replace : true})
      document.location.href = "/login";
    }
  }, []);

  const updateRoute = () => {
    navigate("/updateUser");
  };

  

  return (
    <>
      {toggle ? userInfo && <Sider /> : ""}

      <div className="all-content-wrapper">
        <Header handleToggle={handleToggle} />
        <TopAnalysisData />
        <div className="product-sales-area mg-tb-30">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="product-sales-chart">
                  <div className="portlet-title">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="caption pro-sl-hd">
                          <span className="caption-subject text-uppercase">
                            <b>My Profile</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: "white" }}>
                    {loading ? (
                      <Loading />
                    ) : (
                      <Container style={{ paddingTop: "2%" }}>
                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>User ID</Form.Label>
                              <Form.Control
                                value={uid}
                                disabled
                                type="text"
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Full Name</Form.Label>
                              <Form.Control
                                type="text"
                                value={name}
                                disabled
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Pan No.</Form.Label>
                              <Form.Control
                                value={panNo}
                                disabled
                                type="text"
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Aadhar No.</Form.Label>
                              <Form.Control
                                type="text"
                                value={aadharNo}
                                disabled
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        {userInfo.userType && (
                          <Row>
                            <Col md={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>RPin</Form.Label>
                                <Form.Control
                                  value={rpin.toUpperCase()}
                                  disabled
                                  type="text"
                                  style={{
                                    backgroundColor: "gray",
                                    color: "white",
                                  }}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Designation</Form.Label>
                                <Form.Control
                                  value={designation}
                                  disabled
                                  type="text"
                                  style={{
                                    backgroundColor: "gray",
                                    color: "white",
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        )}

                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Phone</Form.Label>
                              <Form.Control
                                value={phoneNo}
                                disabled
                                type="text"
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Address(Line 1)</Form.Label>
                              <Form.Control
                                value={line1}
                                disabled
                                type="text"
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>City/Town</Form.Label>
                              <Form.Control
                                value={city}
                                disabled
                                type="text"
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>District</Form.Label>
                              <Form.Control
                                value={dist}
                                disabled
                                type="text"
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>State</Form.Label>
                              <Form.Control
                                value={state}
                                disabled
                                type="text"
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Pin</Form.Label>
                              <Form.Control
                                value={pin}
                                disabled
                                type="text"
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Bank Account No</Form.Label>
                              <Form.Control
                                type="text"
                                value={bankAccountNo}
                                disabled
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Bank IFSC</Form.Label>
                              <Form.Control
                                type="text"
                                value={bankIfsc}
                                disabled
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row style={{ marginBottom: "2%" }}>
                          <Col></Col>
                          <Col>
                            <Button variant="primary" onClick={updateRoute}>
                              Update
                            </Button>
                          </Col>
                          <Col></Col>
                        </Row>
                      </Container>
                    )}
                  </div>
                </div>
              </div>
              {/* <SideAnalysisData/> */}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
