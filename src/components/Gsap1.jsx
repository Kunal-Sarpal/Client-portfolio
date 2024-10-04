/* eslint-disable no-unused-vars */
import gsap from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { RxCursorArrow } from 'react-icons/rx';

/**
 * GSAP Animation Component
 */
function Gsap1() {
    const boxRef = useRef(null);

    useEffect(() => {
        // Initialize animation for smooth cursor movement
    }, []);

    function mouseMove(e) {
        console.log(e)
        gsap.to('.box1', {
            x: e.clientX-620,
            y: e.clientY-280,
            // x:e.nativeEvent.screenX-620,
            // y:e.nativeEvent.screenY-280,
            duration:0.1,
            // delay:1,
            // duration: 0.3, // Smooth animation duration
            ease: "power2.out", // Ease for a smoother transition
        });
    }

    return (
        <div className="w-full h-screen flex justify-center items-center" onMouseMove={mouseMove}>
            {/* Container */}
            <div  className=" cursor-none w-96 h-96 border-2 border-red-700 relative">
                {/* Animated cursor */}
                <RxCursorArrow 
                    className="cursor-none box1"
                    size={100}
                    color="red"
                    style={{ position: 'absolute', pointerEvents: 'none' }} // Prevents pointer interference
                />
            </div>
        </div>
    );
}

export default Gsap1;
