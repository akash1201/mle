import React, { useState, useEffect } from "react";
import Sider from "../components/Sider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideAnalysisData from "../components/SideAnalysisData";
import TopAnalysisData from "../components/TopAnalysisData";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { updateUserInfo } from "../ApiCalls/UserAuth";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const UpdateUser = () => {
  // required states
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  let navigate = useNavigate();
  const [loading, setLoading] = useState(() => true);
  const [data, setData] = useState({
    bankAccountNo: "",
    bankIfsc: "",
    phone: "",
    aadharNo: "",
    panNo: "",
    update: false,
  });
  const [toggle, setToggle] = useState(window.innerWidth > 767);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setToggle(window.innerWidth > 767);
    });
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log("toggling");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await updateUserInfo(data);
    console.log(result);
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
                            <b>Profile Update</b>
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
                        <form onSubmit={handleSubmit}>
                          {/* <input
                            type="text"
                            id="aadharNo"
                            onChange={handleChange}
                            value={data.aadharNo}
                            placeholder="Aadhar No"
                          />
                          <input
                            type="text"
                            id="panNo"
                            onChange={handleChange}
                            value={data.panNo}
                            placeholder="Pan No"
                          />
                          <input
                            type="text"
                            id="phone"
                            onChange={handleChange}
                            value={data.phone}
                            placeholder="Phone No"
                          />
                          <input
                            type="text"
                            onChange={handleChange}
                            value={data.bankAccountNo}
                            placeholder="Bank Account No"
                          />
                          <input
                            type="text"
                            onChange={handleChange}
                            value={data.bankIfsc}
                            placeholder="Bank Ifsc No"
                          />
                          <button type="submit">Submit</button> */}
                          <Row>
                            <Col md={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Aadhar No.</Form.Label>
                                <Form.Control
                                  value={data.aadharNo}
                                  id="aadharNo"
                                  onChange={handleChange}
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
                                <Form.Label>Pan No.</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={data.panNo}
                                  id="panNo"
                                  onChange={handleChange}
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
                                <Form.Label>Bank Account No.</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={data.bankAccountNo}
                                  id="bankAccountNo"
                                  onChange={handleChange}
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
                                <Form.Label>Bank IFSC Code</Form.Label>
                                <Form.Control
                                  value={data.bankIfsc}
                                  onChange={handleChange}
                                  id="bankIfsc"
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
                                <Form.Label>Phone No.</Form.Label>
                                <Form.Control
                                  value={data.phone}
                                  id="phone"
                                  onChange={handleChange}
                                  type="text"
                                  style={{
                                    backgroundColor: "gray",
                                    color: "white",
                                  }}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Control
                                value="Submit"
                                type="submit"
                                style={{
                                  backgroundColor: "gray",
                                  color: "white",
                                }}
                              />
                            </Col>
                          </Row>
                        </form>
                      </Container>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default UpdateUser;
