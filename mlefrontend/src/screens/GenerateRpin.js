import React, { useEffect, useState } from "react";
import Sider from "../components/Sider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  generateRpin,
  generateOrder,
  generateOrderToken,
} from "../ApiCalls/UserAuth";
import { cashfreeSandbox } from "cashfree-dropjs";
//use import { cashfreeProd } from 'cashfree-dropjs';
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const GenerateRpin = () => {
  const [loading, setLoading] = useState(() => false);
  const [error, setError] = useState(() => "");
  const [rpin, setRpin] = useState(() => "");
  const [show, setShow] = useState(() => false);
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [toggle, setToggle] = useState(true);
  const [ordertoken, setOrdertoken] = useState("");
  const [cf_order, setCf_order] = useState("");
  const [paylink, setPaylink] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  let match = useParams();

  const generatePin = async (amount) => {
    try {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      let config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      let response = await axios.post(
        `/api/cashfree/create-order`,
        { amt: amount },
        config
      );
      window.open(response.data.link, "_blank", "noopener,noreferrer");
      console.log(response.data);
      return response.data;
    } catch (err) {
      return err.response;
    }

    // setOrdertoken(info.data.token);
    // setPaylink(info.data.link);
    // setCf_order(info.data.cf_order);
  };

  return (
    <>
      {toggle ? userInfo && <Sider /> : ""}

      <div className="all-content-wrapper">
        <Header handleToggle={handleToggle} />
        <div className="color-line"></div>

        <div className="container-fluid" style={{ paddingBottom: "5%" }}>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
            <div className="col-md-4 col-md-4 col-sm-4 col-xs-12">
              <div className="text-center m-b-md custom-login">
                <h3 style={{ color: "white" }}>
                  Generate Registration Pin(Rpin)
                </h3>
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
                      <div className="container">
                        <div className="form-group">
                          <input
                            type="text"
                            value={rpin}
                            className="form-control"
                          />
                        </div>

                        {!rpin && (
                          <>
                            <div style={{ marginBottom: "2%" }}>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  generatePin(1500);
                                }}
                                disabled={loading}
                                className="btn btn-success btn-block loginbtn"
                              >
                                pay Rs. 1550 and Generate
                              </button>
                            </div>
                            <div style={{ marginBottom: "2%" }}>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  generatePin(1650);
                                }}
                                disabled={loading}
                                className="btn btn-success btn-block loginbtn"
                              >
                                Pay Rs. 1650 and Generate
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  generatePin(2100);
                                }}
                                disabled={loading}
                                className="btn btn-success btn-block loginbtn"
                              >
                                pay Rs. 2100 and Generate
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
          </div>
        </div>

        <Modal show={show} style={{ opacity: show ? 1 : 0 }}>
          <Modal.Header>
            <Modal.Title>Payment Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="payment_id_div"></div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer />
      </div>
    </>
  );
};

export default GenerateRpin;
