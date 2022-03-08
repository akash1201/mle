import React, {useState} from 'react'
import Sider from '../components/Sider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideAnalysisData from '../components/SideAnalysisData'
import TopAnalysisData from '../components/TopAnalysisData'
import { getAllRpins, registerUser } from '../ApiCalls/UserAuth'
import {Container, Row, Col, Form, Button, Alert} from 'react-bootstrap'
import {getIncome, generateBill} from "../ApiCalls/Income"
import Loading from '../components/Loading';


const AddDownline = () => {

    // required states
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const [userId, setUserId] = useState(()=>'');
    const [amount, setAmount] = useState(()=>'');
    const [category, setCategory] = useState(()=>'')
    const [categories, setCategories] = useState(()=>[])
    const [details, setDetails] = useState(()=>[{product : '', qty : '', price : ''}]);
    const [loading, setLoading] = useState(()=>false)

    const [error, setError] = useState(()=>'');
    const [success, setSuccess] = useState(()=>false) 


    useState(()=>{
      getIncome()
      .then((e)=>{
             setCategories(e)
      })
      .catch(err=>{
          console.log(err)
      })
    }, [])

    const errorAndClear = (msg) => {
        setError(msg);
        setTimeout(()=>{
            setError('');
        }, 3500);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
       if(!userId){
           errorAndClear('Enter User Id');
           return;
       }
       if(!amount){
           errorAndClear('Enter total amount');
           return;
       }
       if(!category){
           errorAndClear('Select Category');
           return;
       }
       for(let i=0; i<details.length; ++i){
           if(!details[i].product){
               errorAndClear('Enter Product Name');
               return;
           }
           if(!details[i].qty){
            errorAndClear('Enter Product Qty');
            return;
           }
           if(!details[i].price){
               errorAndClear('Enter Product Price');
               return;
           }
       }
       let total = 0;
       for(let i=0; i<details.length; ++i){
           total += (details[i].qty * details[i].price)
       }
       if(total != amount){
           errorAndClear(`Total amount doesn't match bill details amount.`);
           return;
       }
       let obj = {
           userId : userId,
           amount : amount,
           category : category,
           details : details
       }
       if(userInfo){
           setLoading(true)
           generateBill(obj)
           .then(e=>{
             console.log(e);
             if(e.status == 200){
                setDetails([{product : '', qty : '', price : ''}]);
                setUserId('');
                setAmount('');
                setCategory('');
                setSuccess(true);
                setTimeout(()=>{setSuccess(false);}, 3500)
             }else{
                 errorAndClear(e.data.msg)
             }
            setLoading(false)
           })
           .catch(err=>{
               setLoading(false)
               errorAndClear(err.message)
           })
       }
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
                 {
                     loading?
                     <Loading />
                     :
                     <Container style={{paddingTop : '2%'}}>
                           {error && <div class="row">
                            <div class="col">
                                <div role="alert" class="alert alert-danger show">{error}</div>
                            </div>
                      </div>}

                      {
                       success && <div role="alert" class="alert alert-primary show">{'Bill Generated'}</div>
                         
                      }
                     <Row>
                               <Col md={3}>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                          <Form.Label>User Id</Form.Label>
                                          <Form.Control  type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} style={{backgroundColor:'white', color : 'black'}}/>
                                   </Form.Group>
                               </Col>
                               <Col md={3}>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                          <Form.Label>Total Amount</Form.Label>
                                          <Form.Control  type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}} style={{backgroundColor:'white', color : 'black'}}/>
                                   </Form.Group>
                               </Col>

                               <Col md={3}>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                          <Form.Label>Category</Form.Label>
                                          <Form.Select value={category} onChange={e=>{console.log(e.target.value);setCategory(e.target.value)}} style={{backgroundColor:'white', color : 'black'}} className='custom-select'>
                                          <option style={{color: 'black'}} value={''}>{'----Select----'}</option>
                                                {
                                                    categories.length != 0?
                                                    categories.map((e)=>(
                                                        <option style={{color: 'black'}} value={e.id}>{e.name}</option>
                                                    ))
                                                    :
                                                    <></>
                                                }
                                          </Form.Select>
                                   </Form.Group>
                               </Col>
                     </Row>

                     <Row>
                         <Col><strong>Product</strong></Col>
                         <Col><strong>Price(per Item)</strong></Col>
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
      
                 }
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