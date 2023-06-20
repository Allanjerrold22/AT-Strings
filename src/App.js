import logo from './logo.svg';
import './App.css';
import Landingpage from './components/Landingpage'
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

 function App() {
  return (
    
    <Router>
     
       <Routes>
   
     

 
       <Route exact path='/' element={<Landingpage/>} ></Route>
        <Route path="Home" element={<Home/>} />
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
