import React from 'react'
import ReactSearchBox from "react-search-box";
import Searchbar from './Searchbar';
import Button from '@mui/material/Button';
import CountUp from 'react-countup';
// import Table from './ProductTable';
import './admin.css'

import profile from '../Admin-pages/assets/profile.png'
import product from '../Admin-pages/assets/product.svg'
import orders from '../Admin-pages/assets/orders.svg'
import feedback from '../Admin-pages/assets/feedback.svg'
import ad from '../Admin-pages/assets/ad.svg'
import ProductTable from './ProductTable.tsx';






const Dashboard = () => {
    
  return (
    <div>
        <div className="title-container" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <div className="admin-title" style={{marginLeft:32,marginTop:24}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <img src={profile} style={{width:65,height:65}}/>
                <p style={{margin:0,fontSize:24,fontWeight:600,color:'#252525',marginLeft:10}}>Welcome Admin !</p>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:32}}>
             <Searchbar />
             <Button variant="contained" size="medium">
                            Log out
             </Button>
             </div>
            
        </div>
        <div className="quick-card-container" style={{marginTop:32,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <div className="dashboard-des" style={{display:'flex',flexDirection:'column',alignItems:'left',justifyContent:'center'}}>
                <p style={{fontSize:32,fontWeight:600,color:'#252525',margin:0}}>Manage Your<br/>Dashboard</p>
                <p style={{fontSize:16,fontWeight:400,color:'#656565',margin:0,marginTop:20}}>Have a track on your site!<br/>Edit or add products based on your needs</p>
            </div>
            <div className="admin-cards" style={{width:180,height:240,backgroundColor:'#6C629F',borderRadius:18}}>
                <div>
                  <img src={product} style={{width:28,height:28,position:'relative',top:20,left:120}}/>
                </div>
                <div style={{marginTop:32}}>
                <CountUp end={152} enableScrollSpy duration={5} style={{fontSize:42,fontWeight:800,color:'white',marginLeft:18}}/>
                </div>
                <p style={{margin:0,fontSize:18,fontWeight:600,color:'white',marginTop:16,marginLeft:18}}>Products</p>
                <p style={{margin:0,fontSize:14,fontWeight:400,color:'#EEEEEE',marginTop:2,marginLeft:18}}>Currently Live on site</p>
            </div>
            <div className="admin-cards" style={{width:180,height:240,backgroundColor:'#3CABD8',borderRadius:18}}>
                <div>
                  <img src={orders} style={{width:28,height:28,position:'relative',top:20,left:120}}/>
                </div>
                <div style={{marginTop:32}}>
                <CountUp end={28} enableScrollSpy duration={5} style={{fontSize:42,fontWeight:800,color:'white',marginLeft:18}}/>
                </div>
                <p style={{margin:0,fontSize:18,fontWeight:600,color:'white',marginTop:16,marginLeft:18}}>Orders</p>
                <p style={{margin:0,fontSize:14,fontWeight:400,color:'#EEEEEE',marginTop:2,marginLeft:18}}>are successfully completed</p>
            </div>
            <div className="admin-cards" style={{width:180,height:240,backgroundColor:'#E26D9E',borderRadius:18}}>
                <div>
                  <img src={feedback} style={{width:28,height:28,position:'relative',top:20,left:120}}/>
                </div>
                <div style={{marginTop:32}}>
                <CountUp end={32} enableScrollSpy duration={5} style={{fontSize:42,fontWeight:800,color:'white',marginLeft:18}}/>
                </div>
                <p style={{margin:0,fontSize:18,fontWeight:600,color:'white',marginTop:16,marginLeft:18}}>Feedbacks</p>
                <p style={{margin:0,fontSize:14,fontWeight:400,color:'#EEEEEE',marginTop:2,marginLeft:18}}>are recieved from site</p>
            </div>
            <div className="ad-card" style={{width:180,height:240,borderRadius:18}}>
                <div>
                  <img src={ad} style={{width:28,height:28,position:'relative',top:20,left:120}}/>
                </div>
                <div style={{marginTop:42,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Button variant="contained" size="medium" style={{background:'#252525',borderRadius:10}}>
                            Generate Ad
                 </Button>
                </div>
                <p style={{margin:0,fontSize:18,fontWeight:600,color:'black',marginTop:32,marginLeft:18}}>Advertise</p>
                <p style={{margin:0,fontSize:14,fontWeight:400,color:'#656565',marginTop:2,marginLeft:18}}>Using mass mails</p>
            </div>
           

        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginLeft:32,marginRight:32,marginTop:60}}>
        <p style={{margin:0,fontSize:24,fontWeight:600,color:'#252525'}}>Products on site</p>
        <div style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
            <Searchbar/>
            <Button variant="contained" size="medium" style={{background:'#252525',borderRadius:10}}>
                           Create new
            </Button>
        </div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:24}}>
        <ProductTable/>
        </div>
        
    </div>
  )
}

export default Dashboard