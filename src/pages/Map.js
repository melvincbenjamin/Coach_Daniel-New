// components/LiveCoachMapWithAddress.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Fixed location: Abu Dhabi, UAE
const COACH_COORDS = [24.4539, 54.3773];
const COACH_ADDRESS = "Abu Dhabi, United Arab Emirates";

const LiveCoachMapWithAddress = () => {
  return (
    <div className="container my-4">
      <h6 className="text-center mb-3">Coach Dennis Current Location</h6>
      <p className="text-center">📍 {COACH_ADDRESS}</p>

      <MapContainer
        center={COACH_COORDS}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?lang=en" // Force English
        />
        <Marker position={COACH_COORDS}>
          <Popup>
            Coach Dennis is here! <br />
            {COACH_ADDRESS}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LiveCoachMapWithAddress;
