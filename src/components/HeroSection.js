import React from 'react'
import herobg from '../components/assets/hero-bg.png'
import  whatsapp from '../components/assets/whatsapp.svg'
import { Button } from '@mui/material'
import './Responsive-hero.css'

const HeroSection = () => {
    const Toptobottom = () => {
        window.scrollTo({
            top: 760,
            behavior: "smooth",
        });
    };
  return (
   
       
        <div className="hero-container" style={{}} id="Home">
            <div className="hero-text-box" style={{}}>
                <p className="headertext" style={{}}>Crafting beauty <br/>one thread at a time.</p>
                <p className="headerdes" style={{}}>Unlocking the artistry of strings <br/>our team weaves stunning masterpieces that blend <br/> creativity and precision </p>
                <Button onClick={Toptobottom}  variant="contained" size="medium" style={{background:'#252525',borderRadius:16,marginTop:32}}>
                            Browse Products
                </Button>
                <p className="link-text" style={{fontSize:18,fontFamily:'Helvetica',fontWeight:500,color:'#656565',textAlign:'left',margin:0,marginTop:16}}>For Custom Products Contact us on <href >Whatsapp </href></p>
                <img src={whatsapp} style={{width:42,height:42,marginTop:8}}/>
            </div>
            <img onClick={{}} className="hero-bg" src={herobg} style={{}}/>

        </div>

  )
}

export default HeroSection