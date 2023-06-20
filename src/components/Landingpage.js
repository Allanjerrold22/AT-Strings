
// import './App.css';
import Navbar from './Navbar'
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

 const Landingpage=()=>{
    return(
        <div>
        <Navbar/>
        <Home/>
        <Service/>
        <About/>
        <Contact/>
        
        
        </div>
    )
 }
 export default Landingpage;