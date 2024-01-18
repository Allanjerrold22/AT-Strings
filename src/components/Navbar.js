import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../components/assets/menu.png'
import { Typography } from "@mui/material";
import ATlogo from '../components/assets/logo.png'
import './Navbar.css'
import { Link } from "react-scroll";

import { Button } from "@mui/material";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import {app} from "../lib/firebaseConfig"
import cart from './assets/shopping-cart.svg'
import wishlist from './assets/wishlist.svg';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  let navigate = useNavigate();

  const [state, setState] = useState({})

  const auth = getAuth(app);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="blureffect" style={{}}>
      <div className="container">
        <div className="logocenter">
        <div className="logo" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          {/* <p style={{fontSize:18,fontFamily:'Helvetica',fontWeight:600}}>Woodie</p> */}
          <Typography style={{fontWeight:600,marginRight:20}}
            variant="h8"
            align="left"
            color="grey.700"
            sx={{
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, #375368, #252525)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            AT Strings
          </Typography>   
          
        <img src={ATlogo} style={{ width: 55, height: 55 }} />
        </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img src={Menu} style={{ width: 55, height: 55 }} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul style={{alignItems:'center'}}>
            <li>
            <Link activeClass="active" smooth spy to="Home"> Home </Link>      
            </li>
            <li>
            <Link activeClass="active" smooth spy to="Products"> Products </Link>
            </li>
            
            <li>
            <Link activeClass="active" smooth spy to="About"> About </Link>
            </li>
            <li>
            <Link activeClass="active" smooth spy to="Contact"> Contact Us </Link>
            </li>
            <li>
              <img src={cart} style={{width:26,height:26}}/> 
            </li>
            <li>
              <img src={wishlist} style={{width:26,height:26}}/> 
            </li>
            <li>
             { state &&  <Button onClick={()=> {
                if(auth.currentUser) {
                  auth.signOut()
                  handleShowNavbar()
                }
                else navigate("/SignIn")
              }} variant="contained" className='mapbtn' style={{background:'#252525',borderRadius:20,paddingRight:32,paddingLeft:32}} >
                {auth.currentUser ? "Logout"  : "Sign up"}
                {/* Sign up */}
              </Button>}
              <p>{auth.currentUser ? auth.currentUser.email : ""}</p>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  )

  

  
}


export default Navbar;