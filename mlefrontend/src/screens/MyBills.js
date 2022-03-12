import React, {useEffect, useState} from 'react';
import Sider from '../components/Sider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TopAnalysisData from '../components/TopAnalysisData'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { getUserBills } from '../ApiCalls/UserAuth'

const MyBills = () => {

          let userInfo = JSON.parse(localStorage.getItem('userInfo'))

          const [loading, setLoading] = useState(()=>false);
          const [bills, setBills] = useState(()=>[])

          useEffect(()=>{
               getUserBills()
               .then(e=>{
                   console.log(e.data);
                   setBills(e.data)
               })
               .catch(err=>{
                         console.log(err);
               })
          },[])

          const columns = [
                    {
                    title: 'Bill Id',
                    dataIndex: '',
                    key: 'x',
                    render: (text, record) => <span>{record._id.toUpperCase()}</span>,
                    },
                    {
                      title: 'Amount',
                      dataIndex: 'amount',
                      key: 'amount',
                    },
                    {
                      title: 'Issue Date',
                      dataIndex: 'createdAt',
                      key: 'createdAt',
                    },
                  ];


          return (
                    <>
                    {userInfo && <Sider/>}
             <div className="all-content-wrapper">
                 <Header />
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
                                         <span className="caption-subject text-uppercase"><b>User Management</b></span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div  style={{backgroundColor : 'white'}}>
                             <Container style={{paddingTop : '2%'}}>
                                      <Row>
                                         <Col>
                                            <Table key={'_id'} dataSource={bills} columns={columns} pagination={false} loading={loading}
                                            expandable={{
                                                  expandedRowRender: record => {return (<p style={{ margin: 0 }}>
                                                            {record.details.map(e=>(
                                                                      <div><b>{e.product}</b>({e.qty}x{e.price})</div> 
                                                            ))}
                                                  </p>)}
                                                }}
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
          
          <Footer/>
          </div>
          
                 </>
          )
}

export default MyBills;