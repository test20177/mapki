import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Map() {
  const position = [50.040150, 21.979790];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default function App() {
  return ( 
    <div>
      <Map />
    </div>
  );
}
