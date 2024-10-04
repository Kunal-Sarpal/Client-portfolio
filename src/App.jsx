import React from 'react'
import Navbar from './components/Navbar'
import LandinPage from './components/LandinPage'
import { GoArrowUpRight } from "react-icons/go";
import Marque from './components/Marque';
import LocomotiveScroll from 'locomotive-scroll';
// @ts-ignore
import Yellow from './components/Yellow';
import Skiils from './components/Skiils';
import Gsap1 from './components/Gsap1';

const locomotiveScroll = new LocomotiveScroll();


function App() {
  return (
    <div className='w-full h-fit select-none '>
      {/* <Navbar/>
      <LandinPage/>
      <Marque/>
      <Skiils/>
      <Yellow/> */}
      <Gsap1/>
    </div>
  )
}

export default App