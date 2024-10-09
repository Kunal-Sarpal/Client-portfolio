// import React from 'react'
import Typewriter from 'typewriter-effect';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useRef } from "react";
import Accordion1 from './Accordian1';
import Slider1 from './Slider1';
import { Accordion, Button, Card, Paper, Typography } from '@mui/material';
import { LinearGradient } from 'react-text-gradients';
import Gridcollage from './Gridcollage';



const hardworkingQuotes = [
    {
        author: "Alan Alda, Actor",
        quote: "You can't get there by bus, only by hard work and risk and by not quite knowing what you're doing. What you'll discover will be wonderful. What you'll discover will be yourself."
    },
    {
        author: "Eleanor Roosevelt, First Lady of the U.S.",
        quote: "I am who I am today because of the choices I made yesterday."
    },
    {
        author: "Sam Ewing, Author",
        quote: "Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some don’t turn up at all."
    },
    {
        author: "Susan L. Taylor, Journalist",
        quote: "Whatever we believe about ourselves and our ability comes true for us."
    },
    {
        author: "Phil Knight, Co-Founder of Nike",
        quote: "Sometimes, you have to give up. Sometimes, knowing when to give up, when to try something else, is genius. Giving up doesn’t mean stopping. Don’t ever stop."
    },
    {
        author: "Isaac Newton, Mathematician, Physicist, and Author",
        quote: "If I have seen further, it is by standing on the shoulders of giants."
    },
    {
        author: "Dan Waldschmidt, Business Strategist",
        quote: "The only thing standing between you and outrageous success is continuous progress."
    },
    {
        author: "Thomas Jefferson, American Founding Father",
        quote: "I’m a great believer in luck, and I find the harder I work the more I have of it."
    },
    {
        author: "Steve Jobs, Co-Founder of Apple Inc.",
        quote: "If you really look closely, most overnight successes took a long time."
    },
    {
        author: "Tony Robbins, American Author and Speaker",
        quote: "Setting goals is the first step in turning the invisible into the visible."
    },
    {
        author: "Larry D. Turner, United States Army Lieutenant Colonel",
        quote: "On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire."
    },
    {
        author: "Stephen King, Author",
        quote: "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire."
    },
    {
        author: "Paulo Coelho, Brazilian Lyricist and Novelist",
        quote: "Impossible is just an opinion.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.Impossible is just an opinion.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire."
    },
    {
        author: "Malcolm Gladwell, Journalist, Speaker, and Author",
        quote: "Hard work is a prison Impossible is just an opinion.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.sentence only if it does not have meaning. Once it does, it becomes the kind of thing that makes you grab your wife around the waist and dance a jig."
    },
    {
        author: "Muhammad Ali, Boxer and Activist",
        quote: "He who is not couraImpossible is just an opinion.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.geous enough to take risks will accomplish nothing in life."
    },
    {
        author: "Zig Ziglar, Author",
        quote: "There are no traffic jams on the extra mile."
    },
    {
        author: "Walt Disney, EnImpossible is just an opinion.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.trepreneur",
        quote: "All our dreaImpossible is just an opinion.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.On any given Monday, I am one sale closer and one idea away from being a millionaire.ms can come true if we have the courage to pursue them."
    },
    {
        author: "Epicurus, Greek Philosopher",
        quote: "The greater the difficulty, the more the glory in surmounting it."
    },
    {
        author: "Tom Hopkins, Author",
        quote: "You are your greatest asset. Put your time, effort, and money into training."
    },
    {
        author: "Michael Phelps, Olympic Swimmer",
        quote: "There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits."
    },
    {
        author: "Susan L. Taylor, Journalist",
        quote: "Whatever we believe about ourselves and our ability comes true for us."
    },
    {
        author: "Phil Knight, Co-Founder of Nike",
        quote: "Sometimes, you have to give up. Sometimes, knowing when to give up, when to try something else, is genius. Giving up doesn’t mean stopping. Don’t ever stop."
    },
]
function Skiils() {
  
    return (
        <div data-scroll data-scroll-speed="1" className=' z-[99999999] w-full h-screen text-md    font-bold  overflow-hidden  flex justify-center items-center  '>                    
            {/* Till here */}
                <div className='w-[70%]  h-full flex justify-center items-center'>  
                    <div className='w-full h-full  '>
                      <Paper elevation={2} sx={{padding:'40px', margin:'10px'}}>
                        <LinearGradient className='text-9xl font-bold flex w-full ' gradient={['to left', ' black ,#005d43']}>
                            Bains,
                            Trasnport
                        </LinearGradient>
                        <Paper elevation={"30px"}>
                               {/* <Gridcollage/> */}
                        </Paper>
                       
                      </Paper>
                  
                  

                    </div>
                        
                    </div>
                <div className="w-[30%] h-fit flex   overflow-hidden ">
                        
                        <Slider1/>
                </div> 

                </div>
    )
}

export default Skiils