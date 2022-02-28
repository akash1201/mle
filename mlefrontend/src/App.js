import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
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
  return (
    <Router>
      <div>
              
                    <Routes>
                      <Route path={"/"} exact element={<Home/>}/>
                      <Route path={'/login'} exact element={<LoginScreen/>}/>
                      <Route path={'/generate-rpin'} exact element={<GenerateRpin/>}/>
                      <Route path={'/my-dashboard'} exact element={<MyDashboard/>}/>
                      <Route path={'/add-downline'} exact element={<AddDownline/>}/>
                      <Route path={'/membership-benefits'} exact element={<CashBack />} />
                      <Route path={'/vendor-management'} exact element={<VendorManagement />} />
                      <Router path={'/add-members'} exact element={<AddMember/>}/>
                      <Route path={`/add-vendor`} exact element={<AddVendor />}/>
                      <Route path={'/generate-bill'} exact element={<GenerateBill />}/>
                      <Route path={`/users`} exact element={<UserManagement />}/>
                    </Routes>
          {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
