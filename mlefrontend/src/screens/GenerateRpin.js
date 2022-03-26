import React, {useEffect, useState} from 'react'
import Sider from '../components/Sider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {generateRpin, generateOrder, generateOrderToken} from '../ApiCalls/UserAuth'
import { cashfreeSandbox } from 'cashfree-dropjs';
//use import { cashfreeProd } from 'cashfree-dropjs';
import {Modal, Button} from 'react-bootstrap'


const GenerateRpin = () => {

          const [loading, setLoading] = useState(()=>false)
          const [error, setError] = useState(()=>'')
          const [rpin, setRpin] = useState(()=>'')
          const [show, setShow] = useState(()=>false)
          let userInfo = JSON.parse(localStorage.getItem('userInfo'))


          const generatePin = async(type) => {
            try
            { let data = await generateOrderToken(type);
             console.log(data);

             let testCashfree = new cashfreeSandbox.Cashfree();
//let prodCashfree = new cashfreeProd.Cashfree();
const dropConfig = {
  "components": [
      "order-details",
      "card",
      "netbanking",
      "app",
      "upi"
  ],
  "orderToken": data.order_token,
  "onSuccess": function(data) {
      console.log(data);
      setShow(false);
      generateRpin(type)
      .then(res=>{
          console.log(res)
          setRpin(res.data.rpin)
      })
      .catch(err=>{
        console.log(err);
      })
  },
  "onFailure": function(data) {
      console.log(data)
      setShow(false);
      setError('Cannot Complate payment');
  },
  "style": {
      "backgroundColor": "#ffffff",
      "color": "#11385b",
      "fontFamily": "Lato",
      "fontSize": "14px",
      "errorColor": "#ff0000",
      "theme": "light", //(or dark)
  }
}   
 setShow(true)
     let element = document.getElementById('payment_id_div');
    testCashfree.initialiseDropin(element, dropConfig);
             
            }catch(err){
              console.log(err);
            }
          
          }

          return (
                    <>
                     {userInfo && <Sider/>}
                   <div className="all-content-wrapper">
                       <Header />
                       <div className="color-line"></div>
   
   <div className="container-fluid" style={{paddingBottom : '5%'}}>
       <div className="row">
           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
           <div className="col-md-4 col-md-4 col-sm-4 col-xs-12">
               <div className="text-center m-b-md custom-login">
                   <h3 style={{color : 'white'}}>Generate Registration Pin(Rpin)</h3>
                 
               </div>
               <div className="hpanel">
                   <div className="panel-body">
                   {error && <div role="alert" className="alert alert-danger">{error}</div>}
                      
                      {
                          loading?
                         ( <div className="d-flex justify-content-center">
                          <div className="spinner-border" role="status" style={{width : '10rem', height : '10rem'}}>
                              <span className="sr-only">Loading...</span>
                          </div>
                          </div>)
                          :
                          (
                            <form id="loginForm">

                              <div className="container">
                              <div className="form-group">
                                <input type="text" value={rpin} className="form-control" />
                            </div>

                               {!rpin &&
                                <>
                                    <div style={{marginBottom : '2%'}}>
                                  <button onClick={(e)=>{e.preventDefault();generatePin(1)}}   disabled={loading} className="btn btn-success btn-block loginbtn" >pay Rs. 1150 and Generate</button>
                                 </div>
                                  <div >
                                  <button onClick={(e)=>{e.preventDefault();generatePin(2)}}  disabled={loading} className="btn btn-success btn-block loginbtn" >Pay Rs. 1550 and Generate</button>
                                 </div>
                                </>
                               }
                              </div>
                            </form>
                   
                          )

                      }
                      
                   </div>
               </div>
           </div>
           <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
       </div>
   </div>
   <Modal show={show} style={{opacity : 1}}>
        <Modal.Header>
          <Modal.Title>Payment Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <div id='payment_id_div'>

              </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{setShow(false)}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                       <Footer/>
                    </div>
        
                    </>
          )

}

export default GenerateRpin