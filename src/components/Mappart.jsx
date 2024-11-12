import React, { useState } from 'react';
import Map from './Map'; // The existing map component with New York marker
import { RiMotorbikeFill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { IoMdAirplane } from "react-icons/io";


const Mappart = () => {
    const [distance, setDistance] = useState(null);
    const [travelTime, setTravelTime] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [error, setError] = useState(null);
    const [mode, setMode] = useState(''); // Track selected mode of transport

    // New York coordinates
    const newYorkCoords = { lat: 40.7128, lon: -74.0060 };

    // Function to handle the button click for distance calculation
    const calculateDistance = (mode) => {
        setMode(mode); // Update selected mode
        setDistance(null);
        setTravelTime(null);
        setError(null);

        // Get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lon: longitude });

                    // Calculate distance
                    const calculatedDistance = getDistanceFromLatLonInKm(latitude, longitude, newYorkCoords.lat, newYorkCoords.lon);
                    setDistance(calculatedDistance);

                    // Calculate travel time based on mode
                    calculateTime(calculatedDistance, mode);
                },
                (err) => setError("Error fetching location. Please check your location settings."),
                { enableHighAccuracy: true }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    // Function to calculate travel time for different modes
    const calculateTime = (calculatedDistance, mode) => {
        let speed = 0;
        let time = 0;

        switch (mode) {
            case 'bike':
                speed = 20; // Average bike speed in km/h
                break;
            case 'plane':
                speed = 800; // Average plane speed in km/h
                break;
            case 'car':
                speed = 100; // Average car speed in km/h
                break;
            case 'coffee':
                time = 0; // Coffee time (instant)
                setTravelTime(time);
                return;
            default:
                return;
        }

        time = (calculatedDistance / speed).toFixed(2); // Calculate time
        setTravelTime(time);
    };

    // Haversine formula to calculate distance in kilometers
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    return (
        <div className="flex cursor-pointer flex-col lg:flex-row items-center justify-around overflow-hidden w-full h-screen bg-gray-100 p-4 relative">

            {/* Profile and Information Section */}
            <div className="flex flex-col items-center bg-white  rounded-lg p-6 w-1/2 text-center space-y-4  h-screen justify-center ">
            <div>
                    <h2 className="text-7xl font-semibold text-gray-800 mb-2 w-full text-start ">Want to meet me ?</h2>
                    <h2 className='text-start w-full text-2xl'>Hi, You can use this button to know my location</h2>
                    <div className='w-full flex flex-col justify-start pt-10 items-start h-full '>
                        <div className='flex '>
                            <button
                                onClick={() => calculateDistance('plane')}
                                className=" relative z-[99999]  flex justify-center  flex-col items-center cursor-pointer w-40 h-40  border  m-2   text-white rounded bg-zinc-800  transition-all duration-300 mb-4 overflow-hidden hover:scale-105"
                            >
                                <div className='w-full  h-full items-center transition-all duration-300 object-cover flex text-9xl justify-center  rounded-full'>
                                    <IoMdAirplane />
                                </div>

                            </button>
                            <button
                                onClick={() => calculateDistance('car')}
                                className=" relative z-[99999]  flex justify-center  flex-col items-center cursor-pointer w-40 h-40  border  m-2   text-white rounded bg-zinc-800  transition-all duration-300 mb-4 overflow-hidden hover:scale-105"
                            >
                                <div className='w-full items-center    h-full transition-all duration-300 object-cover  rounded-full text-9xl flex justify-center'>
                                    <IoCarSportSharp />
                                </div>

                            </button>
                            <button
                                onClick={() => calculateDistance('bike')}
                                className=" relative z-[99999]  flex justify-center  flex-col items-center cursor-pointer w-40 h-40    border  m-2   text-white rounded bg-zinc-800  transition-all duration-300 mb-4 overflow-hidden hover:scale-105"
                            >
                                <div className='w-full  items-center h-full transition-all duration-300 object-cover  rounded-full text-9xl flex justify-center font-light'><RiMotorbikeFill /> </div>

                            </button>

                        </div>

                        <div className='absolute opacity-20 z-0 left-1/2 rotate-90  h-screen w-full bottom-0 '><img src="https://i.postimg.cc/rFNNtgTJ/ss3.png" alt="" /></div>
                        {error && <p className="text-red-500">{error}</p>}

                        {distance && travelTime ? (
                            <div className='flex flex-col text-start mt-10'>
                                <p className=" text-gray-700 text-xl">
                                    You are approximately <span className="font-bold">{distance.toFixed(2)} km</span> away from me.
                                </p>
                                {mode !== 'coffee' && (
                                    <p className="text-xl text-gray-700 ">
                                        Estimated travel time by {mode}: <span className="font-bold">{travelTime} hours</span>
                                    </p>
                                )}
                                {mode === 'coffee' && <p className="text-2xl text-gray-700 ">Enjoy your coffee! It's instant!</p>}
                            </div>
                        ) : (
                            !error && <p className="text-gray-500">Click a button to calculate travel time.</p>
                        )}
                    </div>
            </div>
           

            </div>

            {/* Map Section */} 
            <div className="flex flex-col items-center h-screen bg-white  rounded-lg p-6 w-1/2 justify-center relative   ">
            <div>
                    <div className='absolute opacity-70 top-24 right-16  '>
                        <div className='relative'>


                            <img className=' w-40 h-40 ' src="https://i.postimg.cc/gkDfsVdz/ss.png" alt="" />
                            <div className='absolute text-md text-zinc-800 tracking-wider   w-full top-10 text-center font-semibold  '><div className='flex justify-center font-semibold gap-2 items-center'>Me</div> </div>
                        </div>

                    </div>
              
                <Map userLocation={userLocation} />
            </div>
            </div>
        </div>
    );
};

export default Mappart;
