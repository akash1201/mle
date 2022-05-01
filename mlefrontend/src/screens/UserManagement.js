import React, { useEffect, useState } from "react";
import Sider from "../components/Sider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopAnalysisData from "../components/TopAnalysisData";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { getUsers } from "../ApiCalls/UserAuth";

const UserManagement = () => {
  // required states
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [loading, setLoading] = useState(() => false);
  const [show, setShow] = useState(() => false);
  const [vendors, setVendors] = useState(() => []);
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    if (userInfo) {
      setLoading(true);
      let vendor = await getUsers();
      console.log(vendor);
      setVendors(vendor);
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone No.",
      dataIndex: "phone",
      key: "phone",
    },
  ];

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
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="caption pro-sl-hd">
                          <span className="caption-subject text-uppercase">
                            <b>User Management</b>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ backgroundColor: "white" }}>
                    <Container style={{ paddingTop: "2%" }}>
                      <Row>
                        <Col></Col>
                        <Col>
                          <Button style={{ float: "right" }}>
                            <Link to="/add-members" style={{ color: "white" }}>
                              Add
                            </Link>
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Table
                            scroll={{ x: 400 }}
                            key={"_id"}
                            dataSource={vendors}
                            columns={columns}
                            pagination={false}
                            loading={loading}
                            mobileBreakPoint={768}
                          />
                        </Col>
                      </Row>
                    </Container>
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

export default UserManagement;
