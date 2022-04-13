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

const GenerateRpin = () => {
  const [loading, setLoading] = useState(() => false);
  const [error, setError] = useState(() => "");
  const [rpin, setRpin] = useState(() => "");
  const [show, setShow] = useState(() => false);
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  let match = useParams();

  useEffect(() => {
    // if()
    if (match.success == "success" && match.orderId) {
      generateRpin(match.orderId)
        .then((res) => {
          console.log(res);
          setRpin(res.data.rpin);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function onScriptLoad(amount, orderid, token) {
    var config = {
      root: "#payment_id_div",
      flow: "DEFAULT",
      data: {
        orderId: orderid /* update order id */,
        token: token /* update token value */,
        tokenType: "TXN_TOKEN",
        amount: amount /* update amount */,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          // setShow(true)
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };

    if (window.Paytm && window.Paytm.CheckoutJS) {
      setShow(true);
      window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
        // initialze configuration using init method
        console.log(config);
        window.Paytm.CheckoutJS.init(config)
          .then(function onSuccess() {
            // after successfully updating configuration, invoke JS Checkout
            window.Paytm.CheckoutJS.invoke();
          })
          .catch(function onError(error) {
            console.log("error => ", error);
            setShow(false);
          });
      });
    }
  }

  const generatePin = async (type) => {
    try {
      let data = await generateOrderToken(type);
      console.log(data);
      let amount = 1550;
      if (type == 2) {
        amount = 1650;
      } else if (type == 3) {
        amount = 2100;
      }
      const script = document.createElement("script");
      script.src = `https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/OhKWfG63235488646929.js`;
      document.body.appendChild(script);
      script.addEventListener("load", () => {
        console.log(script);
        onScriptLoad(amount, data.orderid, data.data);
      });
      // script.onLoad(()=>{onScriptLoad(amount, data.orderid, data.token)})
    } catch (err) {
      console.log(err);
    }
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
                                  generatePin(1);
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
                                  generatePin(2);
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
                                  generatePin(3);
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
