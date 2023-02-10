import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

const MapvIew = () => {
    const [coordinates, setCoordinates] = useState([-0.220809, -78.520985]);
  
  
    return  (
    <MapContainer center={coordinates} zoom={17} scrollWheelZoom={false}> 
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
          LA UNIDAD EDUCATIVA COMUNITARIA INTERCULTURAL BILINGUE
    "PRESBITERO AMABLE HERRERA"
          </Popup>
        </Marker>
        </MapContainer>
        );
  };

export default MapvIew