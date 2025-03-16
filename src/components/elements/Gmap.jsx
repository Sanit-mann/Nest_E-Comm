import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Gmap = () => {
  return (
    <MapContainer
      center={[51.0, 19.0]} // Adjust the default center if needed
      zoom={4}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "15px",
        overflow: "hidden",
      }}
      className="shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Gmap;
