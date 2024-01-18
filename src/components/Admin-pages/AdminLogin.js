import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




import Adminbg from '../Admin-pages/assets/admin-background.jpg' 
import profile from '../Admin-pages/assets/profile.png'


const AdminLogin = () => {
  return (
    <div>
        <div style={{ width: "100%",height:'100vh' ,
              backgroundImage:  `url(${Adminbg})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              alignItems:'center',
              display:'flex'}}>

                <div className="login-panel-container" style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
                    <div className="login-panel" style={{background:'white',width:540, height:400,borderRadius:16}}>
                        <div className="admin-icon" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                          <img src={profile} style={{width:65,height:65,position:'relative',top:-20}}/>
                        </div>
                        <p style={{margin:0,fontSize:24,fontWeight:600,color:'#252525',textAlign:'center'}}>Welcome Admin !</p>
                        <div className="" style={{marginLeft:'25%',marginRight:'25%'}}>
                        <TextField
                        
                        fullWidth
                        id="standard-required"
                        label="Username"
                        variant="standard"
                        style={{
                            marginTop:32
                        }}
                        />

                        <TextField
                   
                        fullWidth
                        pas
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        variant="standard"
                        style={{
                            marginTop:32
                        }}
                        />
                        <div style={{marginTop:32,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Button variant="contained" size="medium">
                            Sign In
                            </Button>
                        </div>
                        </div>

                    </div>

                </div>

        </div>
    </div>
  )
}

export default AdminLogin