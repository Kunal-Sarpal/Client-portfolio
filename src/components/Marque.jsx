import React from 'react';
import Marquee from "react-fast-marquee";
import Navbar from './Navbar';
import "../index.css";

function Marque() {
  return (
    <div className='z-[9999] w-full'  >

      {/* <LinearGradient gradient={['to left', '#353535 ,#005d43']}>
        {item}
      </LinearGradient> */}
      {/* First Marquee */}
      <Marquee pauseOnHover={true} gradient direction='left' speed={90} className=' shadow-xl shadow-black border-2 backdrop-blur-md text-[#353535]  z-[9999]'>
        <div className="flex items-center justify-center ml-10">
          {/* Financial Marketing Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 mr-5' viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C8.687 0 6 2.687 6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm1 8h-2v-2h2v2zm7 4H4v9h16v-9zm-3 4H8v-2h8v2zm-5 5h2v2h-2v-2zm10-19h-2v2h2v-2zm-7 2V2h-2v2h2zm8.293 1.293l-1.414-1.414 1.414-1.414 1.414 1.414-1.414 1.414zm-20 20l1.414-1.414 1.414 1.414-1.414 1.414L1.293 23.293zm1.414-21.293l1.414 1.414L1.293 3.707 0 2.293l1.707-1.707z" />
          </svg>
          <h1 className='text-[5vw] uppercase tracking-tighter font-bold'>Financial Marketing</h1>
        </div>
        <div className="flex items-center justify-center ml-10">
          {/* Trading Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 mr-5' viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10C22 6.486 17.514 2 12 2zM8 17v-2h8v2H8zm2.625-4l-3.375-6H16l-3.375 6H10.625z" />
          </svg>
          <h1 className='text-[5vw] uppercase tracking-tighter font-bold'>Trading</h1>
        </div>
        <div className="flex items-center justify-center ml-10">
          {/* Real Estate Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 mr-5' viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L0 12h4v12h16V12h4L12 0zM6 22v-8h4v8H6zm8 0v-8h4v8h-4zm0-10h-4V6h4v6z" />
          </svg>
          <h1 className='text-[5vw] uppercase tracking-tighter font-bold'>Real Estate</h1>
        </div>
      </Marquee>

      {/* Second Marquee */}
      <Marquee gradient direction='right' speed={90} className='bg-slate-50 text-[#353535] shadow-xl   z-[9999]'>
        <div className="flex items-center justify-center ml-10">
          {/* Business Owner Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 mr-5' viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14v7h-4v17h22v-17h-4v-7zm-12 2h10v5h-10v-5zm14 7v15h-18v-15h18zm-3.5 8h-4v5h4v-5zm-10-5h4v5h-4v-5zm7 5v5h-3v-5h3zm-5 5v-5h-4v5h4z" />
          </svg>
          <h1 className='text-[5vw] uppercase tracking-tighter font-extralight'>Business Owner</h1>
        </div>
        <div className="flex items-center justify-center ml-10">
          {/* Person Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 mr-5' viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-2.672 0-8 1.337-8 4v3h16v-3c0-2.663-5.328-4-8-4z" />
          </svg>
          <h1 className='text-[5vw] uppercase tracking-tighter font-bold'>Jowan Bains</h1>
        </div>
        <div className="flex items-center justify-center ml-10">
          {/* Repeat Person Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className='h-10 w-10 mr-5' viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-2.672 0-8 1.337-8 4v3h16v-3c0-2.663-5.328-4-8-4z" />
          </svg>
          <h1 className='text-[5vw] uppercase tracking-tighter font-bold'>Jowan Bains</h1>
        </div>
      </Marquee>
    </div>
  );
}

export default Marque;
