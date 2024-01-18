// import * as React from 'react';
import back from './assets/back.svg';
import cart from './assets/shopping-cart.svg';
import { Button } from "@mui/material";
import wishlist from './assets/wishlist.svg';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Badge from '@mui/joy/Badge';
import dummyimg1 from '../components/assets/details1.jpeg'
import dummyimg2 from '../components/assets/demo2.jpg'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Box from '@mui/joy/Box';
import ShippinDetails from './ShippingDetails';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/joy/Typography';
import './cart.css'
import add from '../components/assets/add.png'
import remove from '../components/assets/remove (2).png'
import close from '../components/assets/close.svg'
import React, { useState, useEffect } from 'react';



// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Cart = () => {  

 

  let navigate = useNavigate();

  const [count, setCount] = React.useState(0);
  const [showZero, setShowZero] = React.useState(false);

  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };
// Assuming 'useState' is imported from 'react' in your actual code.

const [open, setOpen] = React.useState(false);



  return (
    <div style={{}}>
     
                        
      <React.Fragment>
     
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description" 
        >
          <Typography
            id="alert-dialog-modal-title"
            level="h2"
          >
            Confirmation
          </Typography>
          <Divider />
          <Typography id="alert-dialog-modal-description" textColor="text.tertiary">
            Are you sure you want to remove this product from your Cart?
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-evenly', pt: 2 }}>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="solid" style={{background:'#F25C6F',color:'#ffff'}} onClick={() => setOpen(false)}>
              Remove
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
        
       <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 32,
        }}
      >
        <img src={back}  onClick={()=>{navigate(-1)}} style={{ width: 64, height: 26 ,objectFit:'contain'}} />
        <p style={{ fontSize: 18, fontWeight: 600, margin: 0, textAlign: 'center', color: '#252525' }}>
          Cart
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,marginRight:20}}>
          <img src={wishlist} onClick={()=>{navigate("/wishlist")}} style={{ width: 26, height: 26 }} />
          {/* <img src={cart} style={{ width: 26, height: 26, marginLeft: 12 }} /> */}
          <Badge badgeContent={count} showZero={showZero}>
          <img src={cart} style={{ width: 26, height: 26, marginLeft: 12 }} />
           </Badge>
        </div>
      </div>
      <div style={{marginTop:12}}>
      <Divider orientation="horizontal"  />
      </div>
      <div className="address-container" style={{paddingLeft:8,paddingRight:8,paddingTop:16,paddingBottom:16}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <p style={{fontSize:12,fontWeight:400,margin:0,color:'#656565'}}>Location</p>
              <p style={{fontSize:16,fontWeight:500,margin:0,color:'#252525'}}>Add your address</p>
            </div>  
            <ShippinDetails/>
        </div>
      </div>
      <div className="cart-product-container" style={{marginLeft:8,marginRight:8,marginTop:16}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <p style={{margin:0,fontSize:16,fontWeight:500,color:'#252525'}}>Total Products</p>
        <p style={{margin:0,fontSize:18,fontWeight:600,color:'#4586FD',width:50}}>2</p>
        </div>
        <div className="card-product" style={{background:"#F5F5F5",display:'flex',flexDirection:'row',marginTop:12}}>
          <img src={dummyimg1} style={{width:100,height:100,objectFit:'cover',borderRadius:8}}/>
          <div className="cart-text-container" style={{marginLeft:12,marginTop:6,width:'100%'}}>
          <p style={{margin:0,fontSize:14,fontWeight:500,color:'#252525'}}>Owl String Art</p>
            <p style={{margin:0,fontSize:12,fontWeight:400,color:'#656565'}}>Size: 24cm x 32cm</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:100}}>
                <p style={{margin:0,fontSize:14,fontWeight:400,color:'#252525'}}>Qty</p>
                  <div className="quantity" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:64,}}>
                    <img src={remove} style={{width:24,height:24}}  onClick={() => setCount((c) => c - 1)}/>
                    <p style={{fontSize:14,margin:0}}>{count}</p>
                    <img src={add} style={{width:24,height:24}}  onClick={() => setCount((c) => c + 1)}/>
                  </div>
                  </div>
                  <p  style={{margin:0,fontSize:14,fontWeight:400,color:'green'}}>$200</p>
              </div>
          </div>
          <img src={close} onClick={() => setOpen(true)} style={{width:16,height:16,position:'relative',top:6,right:6}} />
        </div>

        <div className="card-product" style={{background:"#F5F5F5",display:'flex',flexDirection:'row',marginTop:12}}>
          <img src={dummyimg2} style={{width:100,height:100,objectFit:'cover',borderRadius:8}}/>
          <div className="cart-text-container" style={{marginLeft:12,marginTop:6,width:'100%'}}>
            <p style={{margin:0,fontSize:14,fontWeight:500,color:'#252525'}}>Owl String Art</p>
            <p style={{margin:0,fontSize:12,fontWeight:400,color:'#656565'}}>Size: 24cm x 32cm</p>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:100}}>
                <p style={{margin:0,fontSize:14,fontWeight:400,color:'#252525'}}>Qty</p>
                  <div className="quantity" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:64,}}>
                    <img src={remove} style={{width:24,height:24}}  onClick={() => setCount((c) => c - 1)}/>
                    <p style={{fontSize:14,margin:0}}>{count}</p>
                    <img src={add} style={{width:24,height:24}}  onClick={() => setCount((c) => c + 1)}/>
                  </div>
                  </div>
                  <p  style={{margin:0,fontSize:14,fontWeight:400,color:'green'}}>$200</p>
              </div>
          </div>
          <img src={close} onClick={() => setOpen(true)} style={{width:16,height:16,position:'relative',top:6,right:6}} />
        </div>
        
        {/* <div className="order-summary" style={{marginLeft:8,marginRight:8,marginTop:12}}>
         <p style={{margin:0,fontSize:18,fontWeight:600,color:'#252525'}}>Order Summary</p>
         <div className="order-text-container" style={{display:'flex'}}>

         </div>
        </div> */}
       





      </div>
      <div className="order-summary" style={{position:'fixed',bottom:0,height:200,width:'100%',background:'#ffff',borderTopRightRadius:10,borderTopLeftRadius:10}}>
        <div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center',marginTop:12}}>
              <p style={{margin:0,fontSize:14,fontWeight:400,color:'#252525',marginLeft:12}}>Total no. of products</p>
              <p style={{margin:0,fontSize:14,fontWeight:400,color:'#656565',marginRight:12}}>5 Products</p>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center',marginTop:4}}>
              <p style={{margin:0,fontSize:14,fontWeight:400,color:'#252525',marginLeft:12}}>Delivery charges</p>
              <p style={{margin:0,fontSize:14,fontWeight:400,color:'#656565',marginRight:12}}>20$</p>
          </div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'center',marginTop:12}}>
          <p style={{margin:0,fontSize:20,fontWeight:600,color:'#252525',marginLeft:12}}>Total Amount</p>
              <p style={{margin:0,fontSize:18,fontWeight:500,color:'green',marginRight:12}}>20$</p>
          </div>
          <div style={{position:'fixed',bottom:16,width:'100%'}}>
          <div style={{marginTop:8,display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
          <Button variant="solid" style={{background:'#EEEE',color:'#252525',width:'48%',height:45}}>
              Move to wishlist
          </Button>
          <Button variant="solid" style={{background:'#252525',color:'#ffff',width:'48%'}}>
              Pay now
          </Button>
          </div>
          </div>

  


        </div>
        

      </div>
   
      
    </div>
  )
}

export default Cart