import logo from './logo.svg';
import './App.css';
import Landingpage from './components/Landingpage'
import Home from './components/Home'
import Details from './components/DetailsPage/Details'
import Dashboard from './components/Admin-pages/Dashboard'
import Wishlist from './components/Wishlist'
import SignIn from './components/Login-pages/SignIn.tsx'
import SignUp from './components/Login-pages/SignUp.tsx'



import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import AdminLogin from './components/Admin-pages/AdminLogin';
import Cart from './components/Cart';
import ForgotPassword from './components/Login-pages/ForgotPassword.tsx';
import Profile from './components/Profile-pages/Profile';
import ShippingAddress from './components/Profile-pages/ShippingAddress';
import OrderHistory from './components/Profile-pages/OrderHistory';

 function App() {
  return (
    
    <Router>
     
       <Routes>
   
     

 
       <Route exact path='/' element={<Landingpage/>} ></Route>
        <Route path="Home" element={<Home/>} />
        <Route path="Details" element={<Details/>} />
        <Route path="Admin" element={<AdminLogin/>} />
        <Route path="wishlist" element={<Wishlist/>} />
        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="SignIn" element={<SignIn/>} />
        <Route path="SignIn/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="SignIn/CreateAccount" element={<SignUp/>} />

        <Route path="profile" element={<Profile/>} />
        <Route path="profile/shipping" element={<ShippingAddress/>} />
        <Route path="profile/OrderHistory" element={<OrderHistory/>} />
        







        {/* <Route path="/Info" element={<Info/>} />
        <Route path="/imageview" element={<Imageviewer/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/admin" element={<Verification/>} />
        <Route path="/admin/Dashboard" element={<Dashboard/>} /> */}

      

      
      {/* <Countsection id="counts"/> */}

      {/* <About/> */}
      
      
      </Routes>
      </Router>
    
  );
}

export default App;
