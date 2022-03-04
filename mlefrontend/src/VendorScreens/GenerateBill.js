import React, {useState} from 'react'
import Sider from '../components/Sider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideAnalysisData from '../components/SideAnalysisData'
import TopAnalysisData from '../components/TopAnalysisData'
import { getAllRpins, registerUser } from '../ApiCalls/UserAuth'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const AddDownline = () => {

    // required states
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const [userId, setUserId] = useState(()=>'');
    const [amount, setAmount] = useState(()=>'');
    const [details, setDetails] = useState(()=>[{product : '', qty : '', price : ''}]);


    useState(()=>{
      
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
       
    }

    const addField = () => {
        setDetails((prev)=>[...details, {product : '', qty : '', price : ''}])
    }

    const removeField = (id) => {
        let data = [];
        for(let i=0; i<details.length; ++i){
            if(i != id){
                data = [...data, details[i]]
            }
        }
        setDetails(data);
    }

    const handleFormChange = (id, value, type) => {
        let data = [...details];
       for(let i=0; i<data.length; ++i){
           if(i == id){
               data[i][type] = value;
           }
       }
       setDetails(data);
    }

return (    <>
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
                               <span className="caption-subject text-uppercase"><b>Generate Bill</b></span>
                           </div>
                       </div>
                   </div>
               </div>
               <div  style={{backgroundColor : 'white'}}>
                   <Container style={{paddingTop : '2%'}}>
                             <Row>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>User Id</Form.Label>
                                                  <Form.Control  type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Total Amount</Form.Label>
                                                  <Form.Control  type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}} style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row>
                                 <Col><strong>Product</strong></Col>
                                 <Col><strong>Price</strong></Col>
                                 <Col><strong>Qty</strong></Col>
                                 <Col><strong>Action</strong></Col>
                             </Row>

                             {
                                 details.length != 0?
                                 details.map((e, i)=>(
                                     <Row key = {i}>
                                       <Col md={3}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  {/* <Form.Label>User Id</Form.Label> */}
                                                  <Form.Control  type="text" value={e.product} onChange={(e)=>{handleFormChange(i,e.target.value, 'product')}} style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={3}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  {/* <Form.Label>User Id</Form.Label> */}
                                                  <Form.Control  type="number" value={e.price} onChange={(e)=>{handleFormChange(i,e.target.value, 'price')}} style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={3}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  {/* <Form.Label>User Id</Form.Label> */}
                                                  <Form.Control  type="number" value={e.qty} onChange={(e)=>{handleFormChange(i,e.target.value, 'qty')}} style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col>
                                        <Button onClick ={i==0?addField : ()=>{removeField(i)}}>{i == 0?<i className={`fas fa-plus`}></i>:<i className="fa fa-minus"></i>}</Button>
                                       </Col>
                                       
                             </Row>
                                 ))
                                 :
                                 <></>
                             }


                             <Row style={{marginBottom : '2%'}}>
                                       <Col>
                                         
                                       </Col>
                                       <Col>
                                       <Button variant="primary" onClick={submitHandler}>
                                        Generate
                                        </Button>
                                       </Col>
                                       <Col>
                                       
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

export default AddDownline