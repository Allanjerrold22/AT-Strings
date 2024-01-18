import React, { useState, useEffect } from 'react';
import Elephant from './assets/elephant.png'
import Love from './assets/love.png'
import Paws from './assets/paws.png'
import Owl from './assets/owl.png'
import Girl from './assets/penmani.png'
import Rating from '@mui/material/Rating';
// import Heart from './assets/heart.svg'
import Button from '@mui/material/Button';

import Heart from './assets/heart.svg';
import Heart1 from './assets/selected-heart.svg';
import { motion } from 'framer-motion';
import { SnackbarProvider, useSnackbar } from 'notistack';
import '../App.css'
import { useNavigate } from 'react-router-dom';

import { urlFor } from '../lib/client';

function Card(props){

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
    return (
        <SnackbarProvider maxSnack={3} action={
            <Button  >
                    UNDO
            </Button>
          }>
        <div>
          {console.log(props)}
         
            <div className="cardui"style={{width:240,height:260,backgroundColor:'#ffff',borderRadius:12}}>
           
                <img src={urlFor(props.images[0])} onClick={()=>{navigate("/Details", { state: {...props} });}} style={{width:240,height:140,objectFit:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>

                        <div className="details1" style={{marginLeft:12}}> 
                            <p style={{fontSize:16,fontWeight:400,margin:0,marginTop:8,color:'#656565'}}>{props.name}</p>
                            <Rating name="" value={props.ratings} readOnly style={{marginTop:13,margin:0}}/>

                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <p style={{fontSize:20,fontWeight:500,marginTop:6}}>${props.price}</p>
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
  console.log(props.name)
    return (
      <SnackbarProvider maxSnack={3}>
        <Card {...props}/>
      </SnackbarProvider>
    );
  }
