import React, { useRef } from 'react';
import Slider from 'react-slick';
import Card1 from './Card1';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Icon, IconButton } from '@mui/material';
import { ArrowBack, ArrowBackIos, ArrowForward } from '@mui/icons-material';


function Slider1() {
    const sliderRef = useRef(null); // Use ref correctly

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext(); // Ensure ref is defined
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev(); // Ensure ref is defined
        }
    };

    const settings = {
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <div className="slider-container w-full relative shadow-xl">
            {/* Previous and Next Buttons */}
            <div className="flex justify-between mb-4 absolute w-full z-50 h-fit top-1/2 p-2">
                <IconButton color='primary' sx={{border:'1px solid white', background:"white"}}  variant='outlined' className=' shadow shadow-zinc-500 bg-slate-200 w-fit h-fit rounded-full overflow-hidden' onClick={previous}>
                    <ArrowBack/>
                </IconButton>
                <IconButton color='primary' sx={{ border: '1px solid white', background: "white" }} variant='outlined' className='shadow shadow-zinc-500 bg-slate-200 w-fit h-fit rounded-full overflow-hidden' onClick={next}>
                    <ArrowForward/>
                </IconButton>
        
            </div>

            <Slider ref={sliderRef} {...settings}>
                <div className='h-fit object-fit p-2 rounded-md overflow-hidden' key={1}>
                    <Card1 />
                </div>
                <div className='h-fit object-fit p-2 rounded-md overflow-hidden' key={2}>
                    <Card1 />
                </div>
                <div className='h-fit object-fit p-2 rounded-md overflow-hidden' key={3}>
                    <Card1 />
                </div>
                <div className='h-fit object-fit p-2 rounded-md overflow-hidden' key={4}>
                    <Card1 />
                </div>
                <div className='h-fit object-fit p-2 rounded-md overflow-hidden' key={5}>
                    <Card1 />
                </div>
                <div className='h-fit object-fit p-2 rounded-md overflow-hidden' key={6}>
                    <Card1 />
                </div>
            </Slider>
        </div>
    );
}

export default Slider1;
