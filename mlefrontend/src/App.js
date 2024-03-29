import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginScreen from "./screens/LoginScreen";
import GenerateRpin from "./screens/GenerateRpin";
import MyDashboard from "./screens/MyDashboard";
import AddDownline from "./screens/AddDownline";
import Home from "./screens/Home";
import UpdateUser from "./screens/UpdateUser";
import CashBack from "./AdminScreens/CashBack";
import VendorManagement from "./screens/VendorManagement";
import AddVendor from "./screens/AddVendor";
import GenerateBill from "./VendorScreens/GenerateBill";
import AddMember from "./AdminScreens/AddMembers";
import UserManagement from "./screens/UserManagement";
import { Routes, Route } from "react-router-dom";
import MyBills from "./screens/MyBills";
import Homepage from "./Homepage/Homepage";
import TermsAndConditions from "./Homepage/TermsAndConditions";
import PrivacyPolicy from "./Homepage/PrivacyPolicy";
import Refund from "./Homepage/Refund";
import ContactUs from "./Homepage/ContactUs";
import AboutUs from "./Homepage/AboutUs";

function App() {
  useEffect(() => {
    console.log("Here");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route index component={Home}/> */}
      <Route path="dashboard" element={<Home />} />
      <Route path="updateUser" element={<UpdateUser />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="generate-rpin" element={<GenerateRpin />}>
        <Route path=":success/:orderId" element={<GenerateRpin />} />
      </Route>
      <Route path="my-dashboard" element={<MyDashboard />} />
      <Route path="main-dashboard" element={<MyDashboard />} />
      <Route path="add-downline" element={<AddDownline />} />
      <Route path="membership-benefits" element={<CashBack />} />
      <Route path="vendor-management" element={<VendorManagement />} />
      <Route path="add-members" element={<AddMember />} />
      <Route path="add-vendor" element={<AddVendor />} />
      <Route path="generate-bill" element={<GenerateBill />} />
      <Route path="users" element={<UserManagement />} />
      <Route path="my-bills" element={<MyBills />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="refund" element={<Refund />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
