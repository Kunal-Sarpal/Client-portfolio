import React from 'react';
import { Paper } from '@mui/material';

const images = [
    'https://via.placeholder.com/150',  // Replace with your own image URLs
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
];

function Gridcollage() {
    return (
        <div className="grid grid-cols-3 gap-6 p-8 perspective-800">
            {images.map((image, index) => (
                <div key={index} className="group relative transform transition-transform duration-500 ease-out hover:rotate-y-0 hover:rotate-x-0 rotate-y-5 rotate-x-5">
                    <img src={image} alt={`Grid item ${index}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
            ))}
        </div>
    );
}

export default Gridcollage;
