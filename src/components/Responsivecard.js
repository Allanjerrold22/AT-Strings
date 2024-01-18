import React, { useRef, useState, useEffect } from 'react';
import Elephant from './assets/elephant.png'
import Love from './assets/love.png'
import Paws from './assets/paws.png'
import Owl from './assets/owl.png'
import Button from '@mui/material/Button';

import Girl from './assets/penmani.png'
import Rating from '@mui/material/Rating';
// import Heart from './assets/heart.svg'
import Heart from './assets/heart.svg';
import Heart1 from './assets/selected-heart.svg';
import { motion } from 'framer-motion';
import { SnackbarProvider, useSnackbar } from 'notistack';
import '../App.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { urlFor } from '../lib/client';


function Responsivecard(props) {
  console.log(props.id)
  let navigate = useNavigate();

  const [isHeartClicked, setIsHeartClicked] = React.useState(false);

  const handleClickWithNotification = () => {
    handleClickVariant('success')(); // Call your notification function here
    LikeClick(); // Call the function to toggle the heart icon source
  };

  const LikeClick = () => {
    setIsHeartClicked(!isHeartClicked);
     // Call your notification function here
  };

  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = function (variant) {
    return function () {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar('Product added to wishlist', { variant });
    };
  };
    return(
        <SnackbarProvider maxSnack={3} action={
            <Button  >
                    UNDO
            </Button>
          }>
        

        <div>
          

            <div className="cardui" 
            style={{width:174,height:220,justifyContent:'center',backgroundColor:'#FFFF',borderRadius:14,shadowColor: "#000",marginTop:20}}>
                <img src={urlFor(props.images[0])}  onClick={()=>{navigate("/Details", { state: {...props} });}}  style={{width:174,height:120,objectFit:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>

                        <div className="card-details" style={{marginLeft:12}}> 
                            <p style={{fontSize:14,fontWeight:400,margin:0,marginTop:2,color:'#656565'}}>{props.name}</p>
                            <Rating name="" value={props.ratings} readOnly style={{marginTop:4,margin:0}}/>

                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <p style={{fontSize:18,fontWeight:500,marginTop:0}}>${props.price}</p>
                                {/* <img src={Heart} style={{width:32,height:32,marginRight:8,marginBottom:20}}/> */}
                                <motion.div whileTap={{ scale: 0.8 }}>
                                    <div className="example-container" style={{ width: 46, height: 46 ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        
                                        <img onClick={handleClickWithNotification}

                                    src={isHeartClicked ? Heart1 : Heart} style={{ width: 24, height: 24}} />
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                        
            </div>


        </div>
        </SnackbarProvider>

    )
}



export default function IntegrationNotistack(props) {
    return (
      <SnackbarProvider maxSnack={3}>
        <Responsivecard {...props}/>
      </SnackbarProvider>
    );
  }
