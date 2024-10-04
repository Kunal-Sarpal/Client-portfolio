import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { ImCancelCircle } from 'react-icons/im';
import { RxCross2 } from "react-icons/rx";
import { LinearGradient } from 'react-text-gradients'
import Dialogbox from './Dialogbox';
import { Button } from '@mui/material';


function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="1.3"
      className="w-full h-screen pt-1 flex flex-col justify-evenly px-9 text-[#353535] relative"
    >
      <div className="textStructure mb-10 rounded-r-full  py-10 shadow-xl px-5">
        {['Welcome', 'Jowan Bains', 'A public figure'].map((item, index) => (
          <div className="masker font-normal flex items-center" key={index}>
            <h1
              className={`${index === 1 ? 'font-bold' : 'font-extralight'
                } text-[7vw] pr-4 w-full rounded-xl z-[9999] tracking-tighter text-center h-fit flex items-center leading-[7vw]`}
            >
              {index !== 0 ? (
                <>
                  <LinearGradient gradient={['to left', '#353535 ,#005d43']}>
                    {item}
                  </LinearGradient>
                </>
              ) : (
                <Typewriter
                  options={{
                    strings: ['Hello', 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'नमस्ते'],
                    autoStart: true,
                    loop: true,
                    delay: 100 * (index + 1),
                    cursor:""

                  }}
                />
              )}
            </h1>
          </div>
        ))}
      </div>
      <div className="w-[27vw] z-0 right-10 h-[27vw] border-[1px] rounded-full bg-red-200 absolute sm:right-[100px] shadow p-1 sm:p-3 top-40 sm:top-[70px] overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-full"
          src="https://i.postimg.cc/TwrBz1hg/Cn-P-25092024-152200.png"
          alt=""
        />
      </div>

      <div className="z-[99999] sm:block hidden">
        <LandB />
        <div>

        </div>

      </div>
    </div>
  );
}

export default LandingPage;

function LandB() {
  const [showModal, setShowModal] = useState(false);

  // Function to handle modal open and close
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div className="flex items-center justify-between font-['Neue_Montreal'] text-lg border-t-2 border-zinc-300 pt-5">
      {['From Nawanshahr, Punjab', 'Lives In New York, USA'].map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <div className="flex items-center gap-3">
        {/* Social Media Button */}
        <button
          onClick={toggleModal}
          className="p-1 px-4 border-2 rounded-full border-zinc-700 flex items-center gap-2"
        >
          Check Me on Social Media
        </button>
        <div className="border-2 rounded-full border-zinc-700 p-2">
          <RxCross2 />
        </div>
      </div>

      {/* Modal for Social Media Links */}
      {showModal && (
        <div className=" font-['Neue_Montreal'] fixed w-full h-full  inset-0  backdrop-blur-sm  flex items-center justify-center z-50 ">
          <div className="bg-white w-96 h-fit  p-6 border-[1px] border-zinc-700   rounded-lg shadow-lg flex flex-col items-center relative">
            <h2 className="text-2xl mb-4">Follow me on</h2>
            <div className="flex gap-4 flex-col w-full ">
              <a href="#" className="text-2xl text-pink-600 w-full ">
                <div className=' border-[1px] w-full  rounded-lg border-zinc-300 p-3 flex justify-between items-center ga'>
                  <div>
                <FaInstagram />

                  </div>
                  <Button variant="" className='flex   justify-start w-[120px]'>

                    Instagram
                  </Button>
                </div>
              </a>
              <a href="#" className="text-2xl text-blue-600">
                <div className='flex justify-between  rounded-lg  border-zinc-300 border-[1px] p-3 items-between gap-5 '>
                  <div>
                <FaFacebook />

                  </div>
                  <Button variant="" className='flex   justify-start w-[120px]'>

                    Facebook
                  </Button>
                </div>
              </a>
             
              <a href="#" className="text-2xl text-red-600">
                <div className='flex justify-between  rounded-lg   border-zinc-300 border-[1px] p-3 items-between gap-5'>
                <FaYoutube />
                <Button variant="" className='flex   justify-start w-[120px]'>

                  Youtube
                </Button>
                </div>
              </a>
              <a href="#" className="text-2xl text-blue-400">
                <div className='flex justify-between   rounded-lg border-zinc-300 border-[1px] p-3 items-center gap-5'>
                  <FaTwitter />
                  <Button variant="" className='flex   justify-start w-[120px]'>

                    Twitter
                  </Button>
                </div>
              </a>
            </div>
            <button
              onClick={toggleModal}
              className=" absolute right-0 top-2  px-4 py-2  text-gray-800 text-3xl font-light flex  "
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
