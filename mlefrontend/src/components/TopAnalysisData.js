import React, { useEffect, useState } from "react";
import axios from "axios";

const TopAnalysisData = () => {
  const [data, setData] = useState(null);
  const [finances, setFinances] = useState(null);

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      let config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      axios
        .get(`/api/users/get-users-count`, config)
        .then((res) => {
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`/api/users/finances`, config)
        .then((res) => {
          console.log(res);
          // setData(res.data);
          setFinances(res.data.data.vendorDetails);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <div className="section-admin container-fluid">
        <div
          className="row admin text-center"
          style={{ width: "100%", marginLeft: "0" }}
        >
          <div className="col-md-12">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12">
                <div
                  className="admin-content analysis-progrebar-ctn res-mg-t-15"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(174,199,238,1) 0%, rgba(148,151,233,1) 100%)",
                  }}
                >
                  <h4 className="text-left text-uppercase">
                    <b>Total Earnings</b>
                  </h4>
                  <div className="row vertical-center-box vertical-center-box-tablet">
                    <div className="col-xs-3 mar-bot-15 text-left">
                      {/* <label className="label bg-green">30% <i className="fa fa-level-up" aria-hidden="true"></i></label> */}
                    </div>
                    <div className="col-xs-9 cus-gh-hd-pro">
                      <h2 className="text-right no-margin">
                        {finances ? finances?.balance : 0}
                      </h2>
                    </div>
                  </div>
                  <div className="progress progress-mini">
                    <div
                      style={{ width: "78%" }}
                      className="progress-bar bg-green"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12">
                <div
                  className="admin-content analysis-progrebar-ctn res-mg-t-15"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(174,199,238,1) 0%, rgba(148,151,233,1) 100%)",
                  }}
                >
                  <h4 className="text-left text-uppercase">
                    <b>Next Settlement</b>
                  </h4>
                  <div className="row vertical-center-box vertical-center-box-tablet">
                    <div className="col-xs-3 mar-bot-15 text-left">
                      {/* <label className="label bg-green">30% <i className="fa fa-level-up" aria-hidden="true"></i></label> */}
                    </div>
                    <div className="col-xs-9 cus-gh-hd-pro">
                      <h2 className="text-right no-margin">
                        {finances
                          ? finances.nextSettlementDetails?.settlementAmount
                          : 0}
                      </h2>
                    </div>
                  </div>
                  <div className="progress progress-mini">
                    <div
                      style={{ width: "78%" }}
                      className="progress-bar bg-green"
                    ></div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12">
                <div
                  className="admin-content analysis-progrebar-ctn res-mg-t-15"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(174,199,238,1) 0%, rgba(148,151,233,1) 100%)",
                  }}
                >
                  <h4 className="text-left text-uppercase">
                    <b>Today Earnings</b>
                  </h4>
                  <div className="row vertical-center-box vertical-center-box-tablet">
                    <div className="col-xs-3 mar-bot-15 text-left">
                    </div>
                    <div className="col-xs-9 cus-gh-hd-pro">
                      <h2 className="text-right no-margin">
                        {data ? data.totalEarning : 0}
                      </h2>
                    </div>
                  </div>
                  <div className="progress progress-mini">
                    <div
                      style={{ width: "78%" }}
                      className="progress-bar bg-green"
                    ></div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-3 col-sm-3 col-xs-12"
                style={{ paddingTop: "0.2rem" }}
              >
                <div
                  className="admin-content analysis-progrebar-ctn res-mg-t-30"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(174,199,238,1) 0%, rgba(148,151,233,1) 100%)",
                  }}
                >
                  <h4 className="text-left text-uppercase">
                    <b>Direct Downline(s)</b>
                  </h4>
                  <div className="row vertical-center-box vertical-center-box-tablet">
                    <div className="text-left col-xs-3 mar-bot-15">
                      {/* <label className="label bg-blue">50% <i className="fa fa-level-up" aria-hidden="true"></i></label> */}
                    </div>
                    <div className="col-xs-9 cus-gh-hd-pro">
                      <h2 className="text-right no-margin">
                        {data ? data.directDL : 0}
                      </h2>
                    </div>
                  </div>
                  <div className="progress progress-mini">
                    <div
                      style={{ width: "60%" }}
                      className="progress-bar bg-blue"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-3 col-sm-3 col-xs-12"
                style={{ paddingTop: "0.2rem" }}
              >
                <div
                  className="admin-content analysis-progrebar-ctn res-mg-t-30"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(174,199,238,1) 0%, rgba(148,151,233,1) 100%)",
                  }}
                >
                  <h4 className="text-left text-uppercase">
                    <b>Total Downlines</b>
                  </h4>
                  <div className="row vertical-center-box vertical-center-box-tablet">
                    <div className="text-left col-xs-3 mar-bot-15">
                      {/* <label className="label bg-purple">80% <i className="fa fa-level-up" aria-hidden="true"></i></label> */}
                    </div>
                    <div className="col-xs-9 cus-gh-hd-pro">
                      <h2 className="text-right no-margin">
                        {data ? data.allDL : 0}
                      </h2>
                    </div>
                  </div>
                  <div className="progress progress-mini">
                    <div
                      style={{ width: "60%" }}
                      className="progress-bar bg-purple"
                    ></div>
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

export default TopAnalysisData;
