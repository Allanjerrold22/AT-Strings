import React from 'react'
import Sheet from '@mui/joy/Sheet';
import Avatar from '@mui/material/Avatar';
import Profilepic from '../assets/Allan.png'
import Button from '@mui/material/Button';
import back from '../assets/back.svg';
import Divider from '@mui/joy/Divider';
import wishlist from '../assets/wishlist.svg';
import cart from '../assets/shopping-cart.svg';
import Badge from '@mui/joy/Badge';

import shipping from '../assets/shipping.svg'
import history from '../assets/history.svg'
import support from '../assets/support.svg'
import changepassword from '../assets/changepassword.svg'
import refer from '../assets/gift 1.svg'
import terms from '../assets/terms.svg'
import profileBg from'../assets/profile-bg.jpg'





import next from '../assets/right-back.svg'

import './Profile.css'



const Profile = () => {
    const [count, setCount] = React.useState(0);
  const [showZero, setShowZero] = React.useState(false);
  return (

    <div style={{}}>
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
          Profile
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,marginRight:20}}>
          <img src={wishlist} onClick={()=>{navigate("/wishlist")}} style={{ width: 26, height: 26 }} />
          <Badge badgeContent={count} showZero={showZero}>
          <img src={cart} style={{ width: 26, height: 26, marginLeft: 12 }} />
           </Badge>
        </div>
      </div>
      <div style={{marginTop:12}}>
      <Divider orientation="horizontal"  />
      </div>

        <div style={{height:'28%',width:'100%',display:'flex',flexDirection:'column',gap:2,marginTop:2,alignItems:'center',justifyContent:'center', backgroundImage:  `url(${profileBg})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:32}}>
             <Avatar alt="Profile pic" sx={{ width: 64, height: 64 }} src={Profilepic} />
            </div>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <p style={{fontSize:18,fontWeight:600,color:'#252525',margin:0}}>Allan Jerrold</p>
            <p style={{fontSize:14,fontWeight:400,color:'#656565',margin:0}}>allanjerrold@gmail.com</p>
            </div>
            <Button size='medium' variant='contained' style={{width:120,marginTop:12,background:'#252525',marginBottom:20}}>Log out</Button>
        </div>
        <p style={{margin:0,fontSize:16,fontWeight:600,color:'#252525',marginLeft:12,marginTop:32}}>Account</p>
        <div className='profile-containers' style={{width:'100%',display:'flex',flexDirection:'column',marginTop:2,alignItems:'center',justifyContent:'center',marginTop:12}}>
            <div className="profile-card" style={{height:62,width:'96%',borderRadius:8}}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={shipping} style={{height:24,width:24}}/>
                    </div>
                    <div style={{width:'80%'}}> 
                      <p style={{fontSize:16,fontWeight:500,marginLeft:8,color:'#656565'}}>Shipping address</p>
                    </div>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={next} style={{}}/>
                    </div>
                </div>
            </div>

            <div className="profile-card" style={{height:62,width:'96%',borderRadius:8,marginTop:12}}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={history} style={{height:24,width:24}}/>
                    </div>
                    <div style={{width:'80%'}}> 
                      <p style={{fontSize:16,fontWeight:500,marginLeft:8,color:'#656565'}}>Order History</p>
                    </div>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={next} style={{}}/>
                    </div>
                </div>
            </div>

            <div className="profile-card" style={{height:62,width:'96%',borderRadius:8,marginTop:12}}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={changepassword} style={{height:24,width:24}}/>
                    </div>
                    <div style={{width:'80%'}}> 
                      <p style={{fontSize:16,fontWeight:500,marginLeft:8,color:'#656565'}}>Change password</p>
                    </div>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={next} style={{}}/>
                    </div>
                </div>
            </div>

            <div className="profile-card" style={{height:62,width:'96%',borderRadius:8,marginTop:12}}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={support} style={{height:24,width:24}}/>
                    </div>
                    <div style={{width:'80%'}}> 
                      <p style={{fontSize:16,fontWeight:500,marginLeft:8,color:'#656565'}}>Support</p>
                    </div>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={next} style={{}}/>
                    </div>
                </div>
            </div>

        </div>
        <p style={{margin:0,fontSize:16,fontWeight:600,color:'#252525',marginLeft:12,marginTop:32}}>Others</p>
        <div className='profile-containers' style={{width:'100%',display:'flex',flexDirection:'column',marginTop:2,alignItems:'center',justifyContent:'center',marginTop:12}}>
        <div className="refer-card" style={{height:62,width:'96%',borderRadius:8,marginTop:12}}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={refer} style={{height:24,width:24}}/>
                    </div>
                    <div style={{width:'80%'}}> 
                      <p style={{fontSize:16,fontWeight:500,marginLeft:8,color:'#656565'}}>Refer a friend</p>
                    </div>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={next} style={{}}/>
                    </div>
                </div>
            </div>

            <div className="profile-card" style={{height:62,width:'96%',borderRadius:8}}>
                <div style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={terms} style={{height:24,width:24}}/>
                    </div>
                    <div style={{width:'80%'}}> 
                      <p style={{fontSize:16,fontWeight:500,marginLeft:8,color:'#656565'}}>Terms and Conditions</p>
                    </div>
                    <div style={{height:62,width:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={next} style={{}}/>
                    </div>
                </div>
            </div>
            </div>

        

    </div>
  )
}

export default Profile