import React, {useState} from 'react'
import Sider from '../components/Sider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideAnalysisData from '../components/SideAnalysisData'
import TopAnalysisData from '../components/TopAnalysisData'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { getUserProfile } from '../ApiCalls/UserAuth'

const Home = () => {

    // required states

    const [uid, setUid] = useState(()=>'')
    const [name, setName] = useState(()=>'')
    const [designation, setDesignation] = useState(()=>'')
    const [phoneNo, setPhoneNo] = useState(()=>'')
    const [line1, setLine1] = useState(()=>'')
    const [city, setCity] = useState(()=>'')
    const [dist, setDist] = useState(()=>'')
    const [state, setState] = useState(()=>'')
    const [pin, setPin] = useState(()=>'')
    const [rpin, setRpin] = useState(()=>'')
    const [password, setPassword] = useState(()=>'')
    const [cpassword, setCpassword] = useState(()=>'')
    const [loading, setLoading] = useState(()=>true)


    useState(()=>{
        
         getUserProfile()
         .then(res=>{
          //   console.log(res.data.user)
            if(res.status == 200){
                 let user = res.data.user

                 setName(user.name)
                 setUid(user.userId)
                 setRpin(user.rPin? user.rPin : '')
                 setDesignation(user.designation)
                 setPhoneNo(user.phone)
                 setLine1(user.address.line1)
                 setCity(user.address.city)
                 setDist(user.address.district)
                 setState(user.address.state)
                 setPin(user.address.pin)
                 setLoading(false)
            }
         })
         .catch(err=>{
                   setLoading(false)
                   console.log(err)
         })

    }, [])


return (    <>
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
                       <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                           <div className="caption pro-sl-hd">
                               <span className="caption-subject text-uppercase"><b>My Profile</b></span>
                           </div>
                       </div>
                   </div>
               </div>
               <div style={{backgroundColor : 'white'}}>
                 {
                           loading?
                           <Row style={{marginLeft : '537px', paddingTop : '150px'}}>
                           <svg>
                            <circle cx="50" cy="50" r="40" stroke="red" stroke-dasharray="78.5 235.5" stroke-width="3" fill="none" />
                            <circle cx="50" cy="50" r="30" stroke="blue" stroke-dasharray="62.8 188.8" stroke-width="3" fill="none" />
                            <circle cx="50" cy="50" r="20" stroke="green" stroke-dasharray="47.1 141.3" stroke-width="3" fill="none" />
                            </svg>
                           </Row>
                           :
                           <Container style={{paddingTop : '2%'}}>
                            
                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>User ID</Form.Label>
                                                  <Form.Control value={uid} disabled type="text" style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Full Name</Form.Label>
                                                  <Form.Control type="text" value={name} disabled style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>RPin</Form.Label>
                                                  <Form.Control value={rpin.toUpperCase()} disabled type="text" style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Designation</Form.Label>
                                                  <Form.Control value={designation} disabled type="text" style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Phone</Form.Label>
                                                  <Form.Control value={phoneNo} disabled type="text" style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Address(Line 1)</Form.Label>
                                                  <Form.Control value={line1} disabled type="text" style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>City/Town</Form.Label>
                                                  <Form.Control value={city} disabled type="text" style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>District</Form.Label>
                                                  <Form.Control value={dist} disabled type="text" style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row>
                                       <Col md={6}>
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>State</Form.Label>
                                                  <Form.Control value={state} disabled type="text" style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                                       <Col md={6}>
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                                  <Form.Label>Pin</Form.Label>
                                                  <Form.Control value={pin} disabled type="text" style={{backgroundColor:'gray', color : 'white'}}/>
                                           </Form.Group>
                                       </Col>
                             </Row>

                             <Row style={{marginBottom : '2%'}}>
                                       <Col>
                                         
                                       </Col>
                                       <Col>
                                       <Button variant="primary">
                                        Update
                                        </Button>
                                       </Col>
                                       <Col>
                                       
                                       </Col>
                             </Row>
                   </Container>
              
                 }
                   
               </div>
           </div>
       </div>
       {/* <SideAnalysisData/> */}
   </div>
</div>
</div>

<Footer/>
</div>

       </>

)
}

export default Home