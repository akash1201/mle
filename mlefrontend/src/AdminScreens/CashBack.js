import React, { useEffect, useState } from "react";
import Sider from "../components/Sider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopAnalysisData from "../components/TopAnalysisData";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";

import { getIncome, getMembershipBenefits } from "../ApiCalls/Income";

const CashBack = () => {
  useEffect(() => {
    getData();
  }, []);

  const [incomes, setIncomes] = useState(() => []);
  const [membershipBenefits, setMembershipBenefits] = useState(() => []);
  const [toggle, setToggle] = useState(window.innerWidth > 767);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setToggle(window.innerWidth > 767);
    });
  }, []);


  const handleToggle = () => {
    setToggle(!toggle);
  };

  const getData = async () => {
    if (localStorage.getItem("userInfo")) {
      let incomeChartData = await getIncome();
      console.log(incomeChartData);
      setIncomes(incomeChartData);

      let memBenfits = await getMembershipBenefits();
      console.log(memBenfits);
      setMembershipBenefits(memBenfits);
    }
  };


  
  return (
    <>
      {toggle ? <Sider /> : ""}

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
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="caption pro-sl-hd">
                          <span className="caption-subject text-uppercase">
                            <b>Membership Benefits and Cash Backs</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: "white" }}>
                    <Container style={{ paddingTop: "2%" }}>
                      {/* <Row>
                             <Col><h2>Membership Benefits</h2></Col>
                         </Row> */}
                      {/* <Row>
                         <Col>
                             <Table striped bordered hover variant="dark">
                                 <thead>
                                     <tr>
                                     <th>#</th>
                                     <th>Name</th>
                                     <th>Cashback(in %)</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                 {
                                    membershipBenefits.length != 0?
                                    membershipBenefits.map((e, i)=>(
                                        <>
                                          <tr key={i}>
                                              <td>{i+1}</td>
                                              <td>{e.name}</td>
                                              <td>{`${e.cashback}%`}</td>
                                          </tr>
                                        </>
                                    ))
                                    :
                                    <></>
                                }
                                 </tbody>
                             </Table>
                          </Col>
                        </Row> */}
                    </Container>
                    {incomes.length != 0 ? (
                      incomes.map((value, j) => (
                        <Container style={{ paddingTop: "2%" }} key={j}>
                          <Row>
                            <Col>
                              <h2>{value.name}</h2>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Table striped bordered hover variant="dark">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Level</th>
                                    <th>Income(in %)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {value.data.length != 0 ? (
                                    value.data.map((e, i) => (
                                      <>
                                        <tr key={j + "" + i}>
                                          <td>{i + 1}</td>
                                          <td>
                                            {i + 1 == 1
                                              ? `${i + 1}st`
                                              : i + 1 == 2
                                              ? `${i + 1}nd`
                                              : i + 1 == 3
                                              ? `3rd`
                                              : `${i + 1}th`}
                                          </td>
                                          <td>{`${e.cashback}%`}</td>
                                        </tr>
                                      </>
                                    ))
                                  ) : (
                                    <>
                                      <tr>
                                        <td>0</td>
                                        <td>Dummy</td>
                                        <td>Dummy</td>
                                      </tr>
                                    </>
                                  )}
                                </tbody>
                              </Table>
                            </Col>
                          </Row>
                        </Container>
                      ))
                    ) : (
                      <></>
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
export default CashBack;
