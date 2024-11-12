import { Accordion } from '@mui/material';
import React from 'react'
import { ImBinoculars } from "react-icons/im";
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import Accordion1 from './Accordian1';




function Yellow() {
    return (
        <div  className='w-full z-[999] h-screen rounded-lg bg-[#cdea68] relative font-[Neue_Montreal]'>
            <div className='w-full h-full grid grid-rows-12 p-10 font-[Neue_Montreal] relative'>
                <div className='row-span-4 text-5xl'>
                    <h1 className='text-start px-5 text-[#212121] font-[Neue_Montreal] text-2xl'>
                        <Typewriter
                            options={{
                                strings: [
                                    "You can't get there by bus, only by hard work and risk and by not quite knowing what you're doing. What you'll discover will be wonderful. What you'll discover will be yourself.",
                                    "I am who I am today because of the choices I made yesterday.",
                                    "Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some don’t turn up at all.",
                                    "Whatever we believe about ourselves and our ability comes true for us."
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                                pauseFor: 3000,
                            }}
                        />
                    </h1>
                </div>
                
                <div>

                <div>
                <Accordion1/>

                </div>
              
                </div>
             
             
            </div>
        </div>
    );
}

export default Yellow