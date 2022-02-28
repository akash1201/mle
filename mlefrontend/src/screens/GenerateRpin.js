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
            let order = await generateOrder()
            if(order.status == 200){
              displayRazorpay(order.data.id);
            }else{
              setError('Payment Gateway Error')
              setLoading(false)
            }
           
          }

          let userInfo = JSON.parse(localStorage.getItem('userInfo'))
          

          async function displayRazorpay(id) {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        
            if (!res) {
              alert('Razorpay SDK failed to load. Are you online?')
              return
            }
        
            const options = {
              key: 'rzp_test_nYu75Htxw4ZmiZ',
              currency: 'INR',
              amount: '50000',
              order_id: id,
              name: 'Rpin Generation',
              description: 'Thank you for registering with JLE Mega Mart',
              image: 'http://localhost:1337/logo.svg',
              handler:async function (response) {
                // alert(response.razorpay_payment_id)
                // alert(response.razorpay_order_id)
                // alert(response.razorpay_signature)
                let response1 = await generateRpin()
                  console.log(response)
                  if(response1.status == 200){
                      setRpin(response1.data.rpin)
                      setLoading(false)
                  }else{
                            setError(response1.data)
                            setLoading(false)
                  }
              },
              prefill: {
                name : userInfo.name,
              }
            }
            setLoading(false);
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
          }

          return (
                    <>
                     <Sider/>
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
                                  <button onClick={generatePin}  style={{width : '20%'}} disabled={loading} className="btn btn-success btn-block loginbtn" >Generate</button>
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