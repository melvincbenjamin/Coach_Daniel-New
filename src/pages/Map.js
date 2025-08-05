// components/LiveCoachMapWithAddress.js

import React, { useEffect, useState } from "react";
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

const LiveCoachMapWithAddress = () => {
  const [coords, setCoords] = useState(null);
  const [locationText, setLocationText] = useState("Locating Coach Dennis...");

  useEffect(() => {
    const fetchLocationText = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );
        const data = await response.json();
        const address = data.address;

        const city = address.city || address.town || address.village || "Lagos";
        const state = address.state || "Unknown state";
        const country = address.country || "Unknown country";

        setLocationText(`${city}, ${state}, ${country}`);
      } catch (error) {
        console.error("Reverse geocoding failed:", error);
        setLocationText("Unable to retrieve location name.");
      }
    };

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords([latitude, longitude]);
        fetchLocationText(latitude, longitude);
      },
      (err) => {
        console.error("Geolocation error:", err.message);
        setLocationText("Unable to detect location.");
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="container my-4">
      <h4 className="text-center mb-3">Coach Dennis' Current Location</h4>
      <p className="text-center">📍 {locationText}</p>
      {coords ? (
        <MapContainer center={coords} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coords}>
            <Popup>
              Coach Dennis is here! <br />
              {locationText}
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p className="text-center">Loading map...</p>
      )}
    </div>
  );
};

export default LiveCoachMapWithAddress;
