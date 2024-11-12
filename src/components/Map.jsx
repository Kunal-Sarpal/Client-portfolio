import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define a custom marker icon with an image URL
const customMarker = new L.Icon({
    iconUrl: 'https://i.postimg.cc/j2LRNwHs/pngd.png', // Replace with your preferred marker icon URL
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const Map = () => {
    return (
        <div className="rounded-map w-80 h-80 mx-auto">
            <MapContainer
                center={[40.7128, -74.0060]} // New York coordinates
                zoom={10}
                className="w-full h-full"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[40.7128, -74.0060]} icon={customMarker}>
                    <Popup className="custom-popup">
                        <div className="popup-box">
                            <p>I am here</p>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
