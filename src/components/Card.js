import React from "react";
import Elephant from './assets/elephant.png'
import Love from './assets/love.png'
import Paws from './assets/paws.png'
import Owl from './assets/owl.png'
import Girl from './assets/penmani.png'
import Rating from '@mui/material/Rating';
import Heart from './assets/heart.svg'
import '../App.css'


const Card=()=>{
    return (
        <div>
            <div className="cardui"style={{width:240,height:260,backgroundColor:'#ffff',borderRadius:12}}>
                <img src={Owl} style={{width:240,height:140,objectFit:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>

                        <div className="details" style={{marginLeft:12}}> 
                            <p style={{fontSize:16,fontWeight:400,margin:0,marginTop:8,color:'#656565'}}>Owl string art</p>
                            <Rating name="" value={2} readOnly style={{marginTop:13,margin:0}}/>

                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <p style={{fontSize:20,fontWeight:500,marginTop:6}}>$49.00</p>
                                <img src={Heart} style={{width:32,height:32,marginRight:14,marginBottom:12}}/>
                            </div>

                        </div>
                        
            </div>
        </div>

    )
}
export default Card
