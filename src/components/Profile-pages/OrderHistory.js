import React from 'react'
import back from '../assets/back.svg';
import Divider from '@mui/joy/Divider';
import owl from '../assets/owl.png'

const OrderHistory = () => {
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
        <img src={back}  onClick={()=>{navigate(-1)}} style={{ width: 64, height: 26 ,objectFit:'contain'}} />
        <p style={{ fontSize: 18, fontWeight: 600, margin: 0, textAlign: 'center', color: '#252525' }}>
          Order History
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,marginRight:20,width:52}}>
         
        </div>
      </div>
      <div style={{marginTop:12}}>
      <Divider orientation="horizontal"  />
      </div>
      <div className="order-history-container" style={{marginTop:32,marginLeft:12,marginRight:12}}>
        <div className="order-history-cards" style={{height:100,width:'100%',display:'flex',flexDirection:'row',}}>
            <img src={owl} alt="Product img" style={{height:100,width:100,objectFit:'cover'}}/>
            <div className="order-text-container">
                <p style={{}}>Owl String art</p>

            </div>

        </div>


      </div>

    </div>
  )
}

export default OrderHistory