import React, {useEffect, useState} from 'react'
import Sider from '../components/Sider'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {generateRpin, generateOrder} from '../ApiCalls/UserAuth'


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const GenerateRpin = () => {

          const [loading, setLoading] = useState(()=>false)
          const [error, setError] = useState(()=>'')
          const [rpin, setRpin] = useState(()=>'')

          const generatePin = async(e) => {
           
            e.preventDefault()
            setLoading(true)
          
            if(true){
              
            }else{
              setError('Payment Gateway Error')
              setLoading(false)
            }
           
          }

          let userInfo = JSON.parse(localStorage.getItem('userInfo'))
          

          async function displayRazorpay(e) {
            e.preventDefault();
            console.log('HII')
            loadScript('https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/OhKWfG63235488646929.js')
                              .then((res)=>{
                                console.log(res);
                                var config = {
                                  "root": "",
                                  "flow": "DEFAULT",
                                  "data": {
                                  "orderId": "order1", /* update order id */
                                  "token": "qwqqwq", /* update token value */
                                  "tokenType": "TXN_TOKEN",
                                  "amount": "1350" /* update amount */
                                  },
                                  "handler": {
                                    "notifyMerchant": function(eventName,data){
                                      console.log("notifyMerchant handler function called");
                                      console.log("eventName => ",eventName);
                                      console.log("data => ",data);
                                    } 
                                  }
                                };
                          
                                if(window.Paytm && window.Paytm.CheckoutJS){
                                    window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
                                        // initialze configuration using init method 
                                        window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                                            // after successfully updating configuration, invoke JS Checkout
                                            window.Paytm.CheckoutJS.invoke();
                                        }).catch(function onError(error){
                                            console.log("error => ",error);
                                        });
                                    });
                                } 
                              })
                              .catch(err=>{
                                console.log(err)
                                alert('Razorpay SDK failed to load. Are you online?')
                              })
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
                                <input type="text" value={rpin} className="form-control" style={{width : '40%'}}/>
                            </div>

                               {!rpin &&
                                  <div >
                                  <button onClick={displayRazorpay}  style={{width : '20%'}} disabled={loading} className="btn btn-success btn-block loginbtn" >Generate</button>
                                 </div>
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
                       <Footer/>
                    </div>
        
                    </>
          )

}

export default GenerateRpin