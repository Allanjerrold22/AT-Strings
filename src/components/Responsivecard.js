import React from "react";
import Elephant from './assets/elephant.png'
import Love from './assets/love.png'
import Paws from './assets/paws.png'
import Owl from './assets/owl.png'
import Girl from './assets/penmani.png'
import Rating from '@mui/material/Rating';
import Heart from './assets/heart.svg'
import '../App.css'

const Responsivecard=()=>{
    return(

        <div>

            <div className="cardui"style={{width:174,height:220,justifyContent:'center',backgroundColor:'#FFFF',borderRadius:14,shadowColor: "#000",marginTop:20}}>
                <img src={Owl} style={{width:174,height:120,objectFit:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>

                        <div className="details" style={{marginLeft:12}}> 
                            <p style={{fontSize:14,fontWeight:400,margin:0,marginTop:2,color:'#656565'}}>Owl string art</p>
                            <Rating name="" value={2} readOnly style={{marginTop:4,margin:0}}/>

                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <p style={{fontSize:18,fontWeight:500,marginTop:0}}>$49.00</p>
                                <img src={Heart} style={{width:32,height:32,marginRight:8,marginBottom:20}}/>
                            </div>

                        </div>
                        
            </div>


        </div>

    )
}

export default Responsivecard;
