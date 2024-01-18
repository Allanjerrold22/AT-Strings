import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Typography } from "@mui/material";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three'
import '../Navbar.css'

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";

import CanvasLoader from "../Loader";
// import tree from '../assets/treebg.jpg'
// import srmlogo from '../assets/Srmlogo.png';

const Computers = ({ isMobile }) => {
  
  
  const computer = useGLTF("./model/scene.gltf");
  let mixer

  useEffect(()=>{
    if (computer.animations.length) {
        mixer = new THREE.AnimationMixer(computer.scene);
        computer.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }
  
  
  })

  useFrame((state, delta) => {
    mixer?.update(delta)
})

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-80, 100, 50]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 14 : 16
        }
        position={isMobile ? [0, -40, -0.2] : [32, -45, -0.3]}
        rotation={[0, -1, 0]}
        
      />
    </mesh>
  );
};


const Model = () => {



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div> 
      <div className={'modelbackgroud'} style={ { width: "100%",height:430 ,
            
              position:'relative',
              backgroundImage:"url(/lavenderbg1.jpg)",
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',

              }}>
      <div className={'text-container'} style={{position:'relative',top:60}}>
    
        
      {/* <img  style={{width:42,height:42}}/> */}
      {/* <Typography style={{fontSize:24,fontFamily:'Helvetica',fontWeight:800,color:'#2525252',marginTop:10}}
            variant="h6"
            align="left"
            color="grey.700"
            sx={{
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, #1EBE5F, #02BAE8)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
          
          Biodiversity of SRM
    </Typography>   */}
      <p className="headertext" style={{fontSize:38,fontFamily:'Helvetica',fontWeight:800,color:'white',textAlign:'left',margin:0,position:'relative',top:100,left:50}}>Crafting beauty <br/>one thread at a time.</p>
      <p className="headerdes" style={{fontSize:18,fontFamily:'Helvetica',fontWeight:500,color:'white',textAlign:'left',margin:0,position:'relative',top:120,left:50,zIndex:10}}>Unlocking the artistry of strings <br/>our team weaves stunning masterpieces that blend <br/> creativity and precision </p>
  
      </div>  
      
    
    <Canvas style={{height:400,position:'absolute',top:0}}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [120, 40, 80], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
    </div>
    
    </div>
  );
};

export default Model;