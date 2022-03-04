import React,{ useEffect } from 'react';
import 'antd/dist/antd.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import GenerateRpin from './screens/GenerateRpin';
import MyDashboard from './screens/MyDashboard';
import AddDownline from './screens/AddDownline';
import Home from './screens/Home';
import CashBack from './AdminScreens/CashBack';
import VendorManagement from './screens/VendorManagement';
import AddVendor from './screens/AddVendor';
import GenerateBill from './VendorScreens/GenerateBill';
import AddMember from './AdminScreens/AddMembers';
import UserManagement from './screens/UserManagement';



function App() {
  useEffect(()=>{
    console.log('Here');
  },[])
  return (
    <Router basename='/'>
                    {/* <Routes> */}
                      <Route path='/' component={Home}/>
                      <Route index component={Home}/>
                      <Route path='/login' component={LoginScreen}/>
                      {/* <Route path='generate-rpin'element={<GenerateRpin/>}/>
                      <Route path='my-dashboard' element={<MyDashboard/>}/>
                      <Route path='add-downline' element={<AddDownline/>}/>
                      <Route path='membership-benefits' element={<CashBack />} />
                      <Route path='vendor-management' element={<VendorManagement />} />
                      <Router path='add-members' element={<AddMember/>}/>
                      <Route path='add-vendor' element={<AddVendor />}/>
                      <Route path='generate-bill' element={<GenerateBill />}/>
                      <Route path='users' element={<UserManagement />}/> */}
                    {/* </Routes> */}
    </Router>
  );
}

export default App;
