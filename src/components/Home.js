import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import { Model } from "./Canvas";
import { Button } from "@mui/material";
import Card from "./Card"
import Responsivecard from "./Responsivecard"
import { DeviceSize } from "./Responsive/index";
import { useMediaQuery } from 'react-responsive'
import Slider from '@mui/material/Slider';
import HeroSection from "./HeroSection";
import { client } from '../lib/client';



const marks = [
    {
      value:500,
      label: '500',
    },
    {
      value: 1000,
      label: '1000',
    },
    {
      value: 1500,
      label: '1500',
    },
    {
      value: 2000,
      label: '2000',
    },
  ];
  
  function valuetext(value) {
    return `${value}$`;
  }
  




const Home=()=>{

  const [products, setProducts] = useState([]);
  useEffect(() => {




    // Example: Fetch some data from Sanity using the client instance
    const query = '*[_type == "products"]';
    client.fetch(query)
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);

    const [stackIndex, setStackIndex] = useState(0)

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const isDesktop = useMediaQuery({ maxWidth: DeviceSize.desktop });

    return(
        <div >
            {/* <Model/> */}
            <HeroSection/>
            {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.369/build/spline-viewer.js"></script> */}
            {/* <Spline scene="https://prod.spline.design/8iicmyuud5MIJyP0/scene.splinecode" ></Spline> */}    
            {/* <Spline scene="https://prod.spline.design/dlXkeklUUPvUBKOI/scene.splinecode"></Spline> */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20, flexWrap: 'wrap' }}>
                <Button onClick={() => setStackIndex(0)} variant={stackIndex === 0 ? "contained" : "outlined"} style={stackIndex === 0 ? styles.selected : styles.unSelected}>Decors</Button>
                <Button onClick={() => setStackIndex(1)} variant={stackIndex === 1 ? "contained" : "outlined"} style={stackIndex === 1 ? styles.selected : styles.unSelected}>Cartoons</Button>
                <Button onClick={() => setStackIndex(2)} variant={stackIndex === 2 ? "contained" : "outlined"} style={stackIndex === 2 ? styles.selected : styles.unSelected}>Pets</Button>
                <Button onClick={() => setStackIndex(3)} variant={stackIndex === 3 ? "contained" : "outlined"} style={stackIndex === 3 ? styles.selected : styles.unSelected}>Logo</Button>
                <Button onClick={() => setStackIndex(4)} variant={stackIndex === 4 ? "contained" : "outlined"} style={stackIndex === 4 ? styles.selected : styles.unSelected}>Custom</Button>

            </div>

            <p style={{fontSize:20,fontWeight:600,color:'#252525',marginLeft:16}}> Available Decors (120)</p>

            <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',marginTop:0}}>

           
            <Slider
                aria-label="Custom marks"
                defaultValue={500}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                min={500}
                max={2000}

                style={{width:200,marginRight:32,color:'violet'}}

             
            />

            </div>

            


        
            <div className="card-layout" id="Products" style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',flexWrap:'wrap',marginTop:20}}>
           
                {products.map((ele,index)=>{
                  
                return(
                <>
              {console.log(ele)}
                {!isDesktop && <Card name={ele.name} images={ele.images} price={ele.price} ratings={ele.ratings} description={ele.description} size={ele.size} reviews={ele.reviews}/>}
                {isMobile && <Responsivecard name={ele.name} images={ele.images} price={ele.price} ratings={ele.ratings} description={ele.description} size={ele.size} reviews={ele.reviews} id={ele.key ?? "pochu"}/>}

                </>
                        )
                      })
                    }
               

            </div>

            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:32}}>
                <Button variant="contained" style={{background:'#252525',borderRadius:16 ,paddingLeft:20,paddingRight:20}} >View all</Button>
            </div>

            
         


        </div>
    )
}

const styles = {
    selected: {
        borderRadius: 20, 
        backgroundColor: '#252525', 
        marginLeft: 12, 
        marginTop: 20
    },
    unSelected:{
        borderRadius: 20, 
        borderColor: '#767676', 
        color: '#767676', 
        marginLeft: 12, 
        marginTop: 16
    }
};

export default Home;