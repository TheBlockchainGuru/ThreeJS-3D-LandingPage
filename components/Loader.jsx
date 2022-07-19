import React from 'react';
import { Html } from '@react-three/drei';
import Image from "next/image";

const Loader = () => (
  <Html>
    <div 
      style={{ 
        position: 'relative', 
        zIndex: '100', 
        width: '100vw', 
        height: '100vh', 
        background: '#292929', 
        left: '-50%', 
        top: '-50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
        <Image 
          src='/Assets/loader.gif' 
          alt='pic' 
          width={250} 
          height={250} 
          style={{ 
            position: 'absolute', 
            transform: 'translate3d(-50%, -50%, 0)', 
            left: '50%', 
            top: '50%' 
          }} 
        />
    </div>
  </Html>
);

export default Loader;
