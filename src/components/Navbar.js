import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../components/assets/menu.png'
import { Typography } from "@mui/material";
import ATlogo from '../components/assets/logo.png'
import './Navbar.css'
import { Link } from "react-scroll";

import { Button } from "@mui/material";



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

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
            <Link activeClass="active" >Home </Link>
            </li>
            <li>
              <NavLink to="/blog">Products</NavLink>
            </li>
            
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li>
              <Button variant="contained" className='mapbtn' style={{background:'#252525',borderRadius:20,paddingRight:32,paddingLeft:32}} >
                Sign up
              </Button>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  )

  

  
}


export default Navbar;