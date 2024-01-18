import React from 'react'
import back from './assets/back.svg';
import cart from './assets/shopping-cart.svg';
import Button from '@mui/material/Button';
import wishlist from './assets/wishlist.svg';
import Divider from '@mui/joy/Divider';
import banner from './assets/wishlist-ad.png'
import { DeviceSize } from "./Responsive/index";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from "react-router-dom";
import Card from "./Card"
import Responsivecard from "./Responsivecard"
import { useEffect, useState } from 'react';
import {client, urlFor} from '../lib/client'
import owl from './assets/owl.png'
import Heart from "./assets/heart.svg";
import Heart1 from "./assets/selected-heart.svg";
import { motion } from "framer-motion";





const Wishlist = () => {

  let navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const isDesktop = useMediaQuery({ maxWidth: DeviceSize.desktop });
  const [products, setProducts]=useState([])

  useEffect(() => {

    // Example: Fetch some data from Sanity using the client instance
    const query = '*[_type == "users"]';
    let lis = [] 

    client.fetch(query)   
    .then(data => {
          data.map((ele)=>{
      ele.User.filter((curr)=>curr.uid == "69").forEach((item,inx)=>{
        lis = [...lis, item.list]
      })
    })
    
    console.log(lis)

      setProducts(lis)
    }
      )
    .catch(error => console.error('Error fetching data:', error));
}, []);
  

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 32,
        }}
      >
        <img src={back} onClick={()=>{navigate(-1)}} style={{ width: 64, height: 26 ,objectFit:'contain'}} />
        <p style={{ fontSize: 18, fontWeight: 600, margin: 0, textAlign: 'center', color: '#252525' }}>
          Wishlist
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,marginRight:20}}>
          {/* <img src={wishlist} style={{ width: 26, height: 26 }} /> */}
          {/* <img src={cart} style={{ width: 26, height: 26, marginLeft: 12 }} /> */}
          {/* <Badge badgeContent={count} showZero={showZero}> */}
          <img src={cart} onClick={()=>{navigate("/cart")}} style={{ width: 26, height: 26, marginLeft: 12 }} />
           {/* </Badge> */}
        </div>
      </div>
      <div style={{marginTop:12}}>
      <Divider orientation="horizontal"  />
      </div>
      <div className="wishlist-container" style={{marginLeft:12,marginRight:12,marginTop:12}}>
        {/* <p style={{margin:0,fontSize:16,fontWeight:500,color:'#252525'}}></p> */}
        <img src={banner} style={{height:'20%',width:'100%',objectFit:'contain',borderRadius:8}}/>
        <div className="wishlist-container" style={{marginTop:16}}>

{
  products.map((_ele,index)=>{
    const ele = _ele[0]
    return(
      <div className="wishlist-container" style={{marginTop:32}}>
      <div className="wishlist-cards" style={{height:120,width:'100%',display:'flex',flexDirection:'row',background:'#EEEE',borderRadius:12}}>
         <img src={ele.cover ? urlFor(ele.cover.options.source ): cart} alt="Product img" style={{height:120,width:120,objectFit:'cover',borderRadius:12}}/>
         <div className="wishlist-container" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
          <div>
             <p style={{margin:0,marginTop:12,marginLeft:6,fontSize:16,fontWeight:500}}>{ele.name}</p>
             <p style={{margin:0,marginLeft:6,fontSize:14,fontWeight:400}}>{ele.size}</p>
             <p style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "green",
                  margin: 0,
                  marginLeft:6,
                  marginTop:24
                }}>${ele.price}</p>
          </div>
         </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%',alignItems:'right'}}>
            <div
                      className="example-container"
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        backgroundColor: "#eeee",alignSelf:'flex-end'
                      }}
                    >
                      <motion.div whileTap={{ scale: 0.8 }}>
                    <div
                      className="example-container"
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        backgroundColor: "#FFFF",
                        marginLeft:-8,
                        marginTop:8

                      }}
                    >
                      <img
                        // onClick={}
                        src={Heart1}
                        style={{
                          width: 24,
                          height: 24,
                          position: "relative",
                          top: 10,
                          left: 11,
                        }}
                      />
                    </div>
                  </motion.div>
              </div>

              <div>
              <Button style={{background:'#2525',color:'#ffff',width:120,marginBottom:8,marginRight:8,borderRadius:8}} size="small">Move to cart</Button>
              </div>
            </div>
      </div>
   </div>
    )
  })
}
     

          <div className="card-layout" id="Products" style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',flexWrap:'wrap',marginTop:20}}>

         
           
           {/* {isMobile && <Responsivecard />}
               {isMobile && <Responsivecard />}
               {isMobile && <Responsivecard />}    
               {isMobile && <Responsivecard />}



               {!isDesktop && <Card />}
               {!isDesktop && <Card />}
               {!isDesktop && <Card />}
               {!isDesktop && <Card />} */}

           </div>

        </div>
         <p style={{margin:0,fontSize:18,fontWeight:500,color:'#252525',marginTop:16}}>You may also like</p>


      </div>

    </div>
  )
}

export default Wishlist