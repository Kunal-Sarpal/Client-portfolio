import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import LandinPage from './components/LandinPage'
import { GoArrowUpRight } from "react-icons/go";
import Marque from './components/Marque';
import LocomotiveScroll from 'locomotive-scroll';
// @ts-ignore
import Yellow from './components/Yellow';
import Skiils from './components/Skiils';
import Clg from './components/Clg';

import Gsap1 from './components/Gsap1';
import Skills from './components/Skiils';
import { RxArrowBottomLeft, RxCursorArrow } from 'react-icons/rx';
import gsap from 'gsap';
import { PiTruckTrailer } from "react-icons/pi";
import Mappart from './components/Mappart';


const locomotiveScroll = new LocomotiveScroll();


function App() {
  const boxRef = useRef(null);

  useEffect(() => {
    // Initialize animation for smooth cursor movement
  }, []);

  function mouseMove(e) {
    gsap.to('.box1', {
      x: e.clientX-30,
      y: e.clientY-30,
      // x:e.nativeEvent.screenX-620,
      // y:e.nativeEvent.screenY-280,
      duration: 0.9,
      
      // delay:1,
      // duration: 0.3, // Smooth animation duration
      ease: "power2.out", // Ease for a smoother transition
    });
  }
 
  return (
    <div ref={boxRef} className='w-full h-fit select-none  overflow-hidden  cursor-none ' onMouseMove={mouseMove}>
      
      <div className='box1 text-6xl fixed z-50'>
        <PiTruckTrailer />
      </div>
      <Navbar/>
      <LandinPage/>
      <Marque/>
      <Skills/>
      <Mappart/>
      <Yellow/>
      {/* <Gsap1/> */}
     
        {/* Container */}
        
          {/* Animated cursor */}
          
          
    
     
      {/* <Clg/> */}
    </div>
  )
}

export default App