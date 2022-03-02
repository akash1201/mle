import React, {useState, useEffect} from 'react';
import Sider from '../components/Sider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideAnalysisData from '../components/SideAnalysisData'
import TopAnalysisData from '../components/TopAnalysisData'
import { getAllRpins, registerUser, addUser } from '../ApiCalls/UserAuth'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const AddMember = () => {

         let navigate = useNavigate();

          let userInfo = JSON.parse(localStorage.getItem('userInfo'))

          const [name, setName] = useState(()=>'')
          const [phoneNo, setPhoneNo] = useState(()=>'')
          const [line1, setLine1] = useState(()=>'')
          const [city, setCity] = useState(()=>'')
          const [dist, setDist] = useState(()=>'')
          const [state, setState] = useState(()=>'')
          const [pin, setPin] = useState(()=>'')
          const [password, setPassword] = useState(()=>'')
          const [cpassword, setCpassword] = useState(()=>'')
          const [userId, setUserId] = useState(()=>'')

          const [accountNo, setAccountNo] = useState(()=>'')
          const [ifsc, setIfsc] = useState(()=>'')
      
          const [error, setError] = useState(()=>'')
          const [success, setSuccess] = useState(()=>false)

          const errorAndClear = (msg) => {
            setError(msg);
            setTimeout(()=>{setError('')}, 3500);
        }

          const submitHandler = (e) => {
                    e.preventDefault();
                    if(!name){
                        errorAndClear('Enter Name');
                        return;
                    }
                    if(!password){
                        errorAndClear('Enter Password');
                        return;
                    }
                    if(!userId){
                        errorAndClear('Enter User Id');
                        return;
                    }
                    if(!line1){
                        errorAndClear('Enter Address Line 1');
                        return;
                    }
                    if(!city){
                        errorAndClear('Enter City/Town');
                        return;
                    }
                    if(!dist){
                        errorAndClear('Enter District');
                        return;
                    }
                    if(!pin){
                        errorAndClear('Enter Pincode');
                        return;
                    }
                    if(!phoneNo){
                        errorAndClear('Enter Phone No.');
                        return;
                    }
                    if(!accountNo){
                        errorAndClear('Enter Bank Account No');
                        return;
                    }
                    if(!ifsc){
                        errorAndClear('Enter IFSC');
                        return;
                    }
                     let data = {
                         parentId : userInfo.id,
                         name : name,
                         password : password,
                         userId : userId,
                         address : {
                             line1: line1,
                             city : city,
                             district : dist,
                             state : state,
                             pin : pin
                         },
                         phone : phoneNo,
                         account : accountNo,
                         ifsc : ifsc     
                     }
                     addUser(data)
                     .then((e)=>{
                         console.log(e)
                         setName('')
                         setPhoneNo('')
                         setLine1('')
                         setCity('')
                         setDist('')
                         setState('')
                         setPin('')
                         setPassword('')
                         setCpassword('')
                         setAccountNo('')
                         setIfsc('')
            
                         setSuccess(true);
                         setTimeout(()=>{
                             setSuccess(false)
                         }, 3500)
                         navigate('/users')
                     })
                     .catch(err=>{
                         console.log(err)
                         setError(err.message)
                         setTimeout(()=>{
                             setError('')
                         },3500)
                     })
                }

return (
          <>
              <Sider/>
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
                               <span className="caption-subject text-uppercase"><b>Add Downline</b></span>
                           </div>
                       </div>
                   </div>
               </div>
               <div  style={{backgroundColor : 'white'}}>
                   <Container style={{paddingTop : '2%'}}>
                   {error && <div class="row">
                                    <div class="col">
                                        <div role="alert" class="alert alert-danger show">{error}</div>
                                    </div>
                              </div>}

                              {
                               success && <div class="row">
                                  <div class="col">
                                      <div role="alert" class="alert alert-primary show">{'User Added'}</div>
                                  </div>
                                </div>
                              }
                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Full Name</Form.Label>
                                                  <Form.Control value={name} onChange={(e)=>{setName(e.target.value)}} type="text" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Phone No.</Form.Label>
                                                  <Form.Control value={phoneNo} onChange={e=>{setPhoneNo(e.target.value)}} type="number" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Address(Line 1)</Form.Label>
                                                  <Form.Control value={line1} onChange={e=>{setLine1(e.target.value)}} type="text" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>City/Town</Form.Label>
                                                  <Form.Control value={city} onChange={e=>{setCity(e.target.value)}} type="text" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>
                             
                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>District</Form.Label>
                                                  <Form.Control value={dist} onChange={e=>{setDist(e.target.value)}} type="text" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>State</Form.Label>
                                                  <Form.Control value={state} onChange={e=>{setState(e.target.value)}} type="text" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Pin Code</Form.Label>
                                                  <Form.Control value={pin} onChange={e=>{setPin(e.target.value)}} type="number" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>User Id</Form.Label>
                                                  <Form.Control value={userId} onChange={e=>{setUserId(e.target.value)}} type="text" style={{backgroundColor:'white', color : 'black'}}/>
                                                  
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Passoword</Form.Label>
                                                  <Form.Control value={password} onChange={e=>{setPassword(e.target.value)}} type="password" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Confirm Passoword</Form.Label>
                                                  <Form.Control value={cpassword} onChange={e=>{setCpassword(e.target.value)}} type="password" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Account No</Form.Label>
                                                  <Form.Control value={accountNo} onChange={e=>{setAccountNo(e.target.value)}} type="text" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>IFSC</Form.Label>
                                                  <Form.Control value={ifsc} onChange={e=>{setIfsc(e.target.value)}} type="text" style={{backgroundColor:'white', color : 'black'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row style={{marginBottom : '2%'}}>
                                       <Col>
                                         
                                       </Col>
                                       <Col>
                                       <Button variant="primary" onClick={submitHandler}>
                                        Submit
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

export default AddMember;