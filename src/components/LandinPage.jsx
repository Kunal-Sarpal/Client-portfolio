import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { ImCancelCircle } from 'react-icons/im';
import { RxCross2 } from "react-icons/rx";
import { LinearGradient } from 'react-text-gradients'
import Dialogbox from './Dialogbox';
import { Button, ButtonBase, ButtonGroup } from '@mui/material';




function LandingPage() {
  return (
    <div
      // data-scroll
      // data-scroll-speed="1.3"
      className="w-full h-screen pt-1 flex flex-col justify-evenly px-9 text-[#353535] relative"
    >
      <div className="textStructure mb-10 rounded-r-full  py-10 px-5 shadow-xl">
        {['Welcome', 'Jowan Bains', 'Entreprenuer'].map((item, index) => (
          <div className="masker  font-normal uppercase flex items-center" key={index}>
            <h1
              className={`${index === 1 ? 'font-bold' : 'font-extralight'
                } text-[6vw]  px-3 shadow m-1   rounded-xl z-[9999] tracking-tight text-center h-fit flex items-center leading-[7vw] w-fit`}
            >
              {index !== 0? (
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
                    cursor:"",
                    className:"shadow-none"

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
    <div className="flex cursor-pointer items-center justify-between font-['Neue_Montreal'] text-lg border-t-2 border-zinc-300 pt-5">
      {['From Nawanshahr, Punjab', 'Lives In New York, USA'].map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
      <div className="flex items-center gap-3 relative ">
        {/* Social Media Button */}
        <div className='absolute left-1/2 opacity-65 bottom-[2.8vw] animate-pulse '>
          <div className='relative'>

            <img className=' w-20 h-20 shadow ' src="https://i.postimg.cc/Bb1w0FPz/ss5.png" alt="" />
            <div className='absolute text-md text-zinc-800 tracking-wider   w-full bottom-9 text-center font-semibold  '><div className='flex justify-center font-semibold gap-2 text-sm items-center'>Touch </div> </div>
          </div>

        </div>
        
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
          <div className="bg-white w-fit h-fit  p-6 border-[1px] border-black   rounded shadow-lg flex flex-col items-center relative">
            <h2 className="text-2xl font-bold mb-4">Check me out</h2>
            <div className="flex justify-center gap-8 py-10">
              <div className="flex flex-col items-center relative justify-between border-2 w-44 rounded-md  ">
                <div className='flex  justify-center items-center gap-2 bg-clip-text  text-1xl font-bold' >Youtube < FaYoutube className='text-red-600' /></div>
                <div className="w-24 h-24 rounded-full overflow-hidden mt-1">
                  <img src="https://tse1.mm.bing.net/th?q=blank%20profile%20pic" className='w-full h-full border-2  object-cover' alt="" />
                </div>
                <div className='text-sm font-normal px-2 text-center '>
                  <div >bains_sjowan</div>
                  <div className=' uppercase font-bold'>jowan singh</div>
                </div>

                <button className="mt-4 font-bold tracking-wide transition duration-300 ease-in-out  text-black  border-t-2 text-sm  px-3 py-2  hover:bg-red-600 hover:rounded-b-md  w-full hover:text-white">
                  Subscribe
                </button>

              </div>


              {/* INstagram */}
              <div className="flex flex-col items-center relative justify-between border-2 w-44 rounded-md  ">
                <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-1xl font-bold' >Instagram <FaInstagram/></div>
                <div className="w-24 h-24 rounded-full overflow-hidden mt-1">
                  <img src="https://tse1.mm.bing.net/th?q=blank%20profile%20pic" className='w-full h-full border-2  object-cover' alt="" />
                </div>
                <div className='text-sm font-normal px-2 text-center '>
                  <div >bains_sjowan</div>
                  <div className=' uppercase font-bold'>jowan singh</div>
                </div>
              
                <button className="mt-4 font-normal transition duration-300 ease-in-out  text-blue-600 border-t-2 text-sm  px-3 py-2  hover:bg-blue-600 hover:rounded-b-md  w-full hover:text-white">
                  Follow
                </button>
                
              </div>
              {/* Twitter */}
              <div className="flex  items-center border-2 gap-3 h-fit p-3 justify-center relative">
                <div className="w-14 h-14 border rounded-full overflow-hidden">
                  <img src="https://tse1.mm.bing.net/th?q=blank%20profile%20pic" className='w-full h-full border-2  object-cover' alt="" />
                </div>
               
                <div className=' leading-5'>
                  <div className=' uppercase font-bold text-sm'>jowan singh</div>
                  <div className='text-sm' >bains_sjowan</div>
                </div>

                <button className=" bg-black text-white text-sm p-[6px] px-4 hover:text-white rounded-full ml-4 ">
                  Follow
                </button>

                <div className='absolute right-[-10vw] bottom-[2vw] '>
                  <div className='relative'>

                <img className=' w-40 h-40 ' src="https://i.postimg.cc/gkDfsVdz/ss.png" alt="" />
                    <div className='absolute text-xl  w-full top-10 text-center font-bold text-black '><div className='flex justify-center font-semibold gap-2 items-center'>Twitter  <FaTwitter /></div> </div>
                </div>

                  </div>
              </div>
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
{/* <div className="flex gap-4 flex-col w-full ">
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
      </Button
    </div>
  </a>

  <a href="#" className="text-2xl text-red-600">
    <div className='flex justify-between  rounded-lg   border-zinc-300 border-[1px] p-3 items-between gap-5'>
      <FaYoutube />
      <Button variant="" className='flex   justify-start w-[120px]'>

        Youtube
      </Button>
    </div>img

  </a>
  <a href="#" className="text-2xl text-blue-400">
    <div className='flex justify-between   rounded-lg border-zinc-300 border-[1px] p-3 items-center gap-5'>
      <FaTwitter />
      <Button variant="" className='flex   justify-start w-[120px]'>

        Twitter
      </Button>
    </div>
  </a>
</div> */}