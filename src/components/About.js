import React from "react";
import World from './assets/world.png'
import Quotes from "./Quotes";

const About=()=>{
    return(
        <div id="About" >
            <p style={{marginTop:32,fontSize:14,fontWeight:40,color:'#656565',textAlign:'center'}}>About us</p>
            <p style={{textAlign:'center',fontSize:18,fontWeight:450,marginRight:16,marginLeft:16,marginTop:32}}>We Provide Shipping all over the world</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={World} style={{width:"100%",height:200,objectFit:'contain'}}/>
            </div>
            <p style={{textAlign:'center',fontSize:18,fontWeight:450,marginRight:16,marginLeft:16,marginTop:50}}>Our Customer says</p>
            <p style={{fontSize:42,color:'#CDCDCD',textAlign:'center',fontWeight:1000,marginTop:20,margin:0}}>REVIEWS</p>
            <Quotes/>

        </div>
    )
}
export default About;