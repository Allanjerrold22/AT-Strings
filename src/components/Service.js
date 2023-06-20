import React from "react";
import icon1 from './assets/icon-1.png'
import icon2 from './assets/icon-2.png'
import icon3 from './assets/icon-3.png'
import icon4 from './assets/icon-4.png'
import Surprise from './assets/surprise-2.png'
import info1 from './assets/info-1.png'
import info2 from './assets/info-2.png'
import info3 from './assets/info-3.png'
import info4 from './assets/info-4.png'
import demo1 from'./assets/demo1.jpg'
import demo2 from'./assets/demo2.jpg'
import demo3 from'./assets/demo3.jpg'
import demo4 from'./assets/demo4.JPG'
import demo5 from'./assets/demo5.JPG'
import demo6 from'./assets/demo6.jpg'


import Marquee from "react-fast-marquee";




const Service=()=>{
    return(
        <div style={{backgroundColor:'#F2F2F2'}}>

                <p style={{marginTop:32,fontSize:14,fontWeight:40,color:'#656565',textAlign:'center',paddingTop:32}}>Services we provide</p>

                <div className="service-box" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap'}}>

                <div classname="boxes" style={{width:110,height:110,backgroundColor:'white',borderRadius:10,display:'flex',flexDirection:'column',alignItems:'center',padding:32,marginTop:20}}>
                    <img
                    src={icon1}
                    style={{ width:60}}/>

                    <p style={{color:'#5F5F67',textAlign:'center'}}>Customized Works</p>
                </div>

                <div classname="boxes" style={{width:110,height:110,backgroundColor:'white',borderRadius:10,display:'flex',flexDirection:'column',alignItems:'center',padding:32,marginTop:20}}  >
                    <img
                    src={icon2}
                    style={{ width:60}}/>

                    <p style={{color:'#5F5F67',textAlign:'center'}}>Portraits</p>
                </div>
                
                <div classname="boxes" style={{width:110,height:110,backgroundColor:'white',borderRadius:10,display:'flex',flexDirection:'column',alignItems:'center',padding:32,marginTop:20}}>
                    <img
                    src={icon3}
                    style={{ width:60}}/>

                    <p style={{color:'#5F5F67',textAlign:'center'}}>Wall Decors</p>
                </div>

                <div classname="boxes" style={{width:110,height:110,backgroundColor:'white',borderRadius:10,display:'flex',flexDirection:'column',alignItems:'center',padding:32,marginTop:20}}>
                    <img
                    src={icon4}
                    style={{ width:60}}/>

                    <p style={{color:'#5F5F67',textAlign:'center'}}>Logo String Art</p>
                </div>

                



                </div>

                <div className={"surprise-bg1"} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:32}}>
                    <div className={"surprise-text1"} style={{marginLeft:16,marginRight:16}}>
                        <p style={{fontSize:18, textAlign:'center',fontWeight:450}}>We make the gifting process<br/>easier for you </p>
                        {/* <p style={{fontSize:16,color:'#5F5F67',textAlign:'center'}}>Ever had the confusion and the excitement while you search<br/>a gift to surprise your loved ones !   </p> */}
                        <p style={{fontSize:16,color:'#5F5F67',textAlign:'center'}}> Gift to surprise your loved ones !</p>
                    </div>
                    <Marquee pauseOnClick ="True" style={{marginTop:20}}>

                        <img src={demo1} style={{width:200,height:200,objectFit:'cover',borderRadius:10,marginRight:16}}/>
                        <img src={demo2} style={{width:200,height:200,objectFit:'cover',borderRadius:10,marginRight:16}}/>
                        <img src={demo3} style={{width:200,height:200,objectFit:'cover',borderRadius:10,marginRight:16}}/>
                        <img src={demo4} style={{width:200,height:200,objectFit:'cover',borderRadius:10,marginRight:16}}/>
                        <img src={demo5} style={{width:200,height:200,objectFit:'cover',borderRadius:10,marginRight:16}}/>
                        <img src={demo6} style={{width:200,height:200,objectFit:'cover',borderRadius:10,marginRight:16}}/>

                        </Marquee>

                   
                    
                </div>

                <div className="parent-surprise" style={{display:'flex',flexDirection:'column',marginTop:32}}>
                        <div className={"surprise-text2"} style={{paddingRight:16,paddingLeft:16}}>
                            <p style={{fontSize:18,fontWeight:450,textAlign:'center'}}>we make Various Categories of String Arts that matches different occasions  </p>
                            <p style={{fontSize:42,color:'#CDCDCD',textAlign:'center',fontWeight:1000,margin:0}}>WE OFFER</p>
            
                        </div>

                        <Marquee direction="right" style={{marginTop:20,paddingBottom:50}}>
                               <div className="iclm-1" style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:"#ffff",width:172,borderRadius:12,marginRight:20}}>
                                    <img src={info1} style={{width:60,height:60}}/>
                                    <p style={{fontSize:12,color:'#252525'}}>Experts Services</p>
                                </div>


                                <div className="iclm-2" style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:"#ffff",width:172,borderRadius:12,marginRight:20}}>
                                    <img src={info2} style={{width:60,height:60}}/>
                                    <p style={{fontSize:12,color:'#252525'}}>Unique gifts</p>i
                                </div>

                                <div className="iclm-3" style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:"#ffff",width:172,borderRadius:12,marginRight:20}}>
                                    <img src={info3}  style={{width:60,height:60}}/>
                                    <p style={{fontSize:12,color:'#252525'}}>Experts Services</p>
                                </div>

                                <div className="iclm-4" style={{display:'flex',flexDirection:'row',alignItems:'center',backgroundColor:"#ffff",width:172,borderRadius:12,marginRight:20}}>
                                    <img src={info4}  style={{width:60,height:60}}/>
                                    <p style={{fontSize:12,color:'#252525'}}>Unique gifts</p>
                                </div>


                        </Marquee>

                        </div>



        </div>
    )
}
export default Service;