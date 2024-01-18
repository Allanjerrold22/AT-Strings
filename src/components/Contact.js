import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Pinky from "./assets/formbg.jpg";
import  Logo from "./assets/logo.png";

import '../App.css'
import { margin } from "@mui/system";
const Contact=()=>{
    return(
        <div id="Contact">

<p style={{marginTop:32,fontSize:14,fontWeight:40,color:'#656565',textAlign:'center',marginTop:50}}>Contact us</p>
            <p style={{textAlign:'center',fontSize:18,fontWeight:450,marginRight:16,marginLeft:16,marginTop:32}}>We would love to answer your queries and appreciate your feedbacks</p>
            
            <div className="feedback-bg" style={{ width: "100%",height:640 ,
              backgroundImage: "url(/feedback.jpg)",
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              marginTop:50
              }}>

             

            

            <div  style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                <div className="feedbackbox" style={{width:600,backgroundColor:'#fff',height:540,borderRadius:12,marginLeft:32,marginRight:32,marginTop:50}}>

               
                
               <img src={Pinky} style={{width:"100%",height:160,objectFit:'cover',position:'relative',top:0,borderTopLeftRadius:12,borderTopRightRadius:12}}/>
               <div style={{}}>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:-50}}>
                        <img src={Logo} style={{width:72,height:72,position:'relative',top:0}}/>
                        </div>



                  <p style={{fontSize:20,fontWeight:500,color:'#252525',textAlign:'center'}}>Your feedback values</p>

                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

                        
                            <TextField
                                helperText="Please enter your name"
                                id="demo-helper-text-misaligned"
                                label="Name"
                                style={{width:280}}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Comments"
                                placeholder="Your valuable feedbacks here"
                                multiline
                                
                                style={{width:280,marginTop:20,color:'#EEEE'}}
                            />
                            <Button variant="contained" style={{background:'#252525',borderRadius:10,marginTop:32,paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10}}> Submit</Button>
                    {/* <TextField id="demo-helper-text-misaligned-no-helper" label="Mail" style={{width:280}} /> */}
                    </div>
                    </div>

              
              </div>
              </div>
            </div>
        </div>
    )
}
export default Contact;