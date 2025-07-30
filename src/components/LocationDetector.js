import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const LocationDetector = () => {
  const [location, setLocation] = useState(null);
  const [latlng, setLatlng] = useState(null);

  useEffect(() => {
    const fetchLocationFromGPS = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=dbf643dd05f44e7b884e0e9906f32520`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const components = data.results[0].components;

          const locationData = {
            city:
              components.city ||
              components.town ||
              components.village ||
              components.hamlet ||
              components.suburb ||
              components.neighbourhood ||
              components.municipality ||
              components.county ||
              "Unknown",
            state: components.state || "Unknown",
            country: components.country || "Unknown",
          };

          console.log("Accurate GPS location:", locationData);

          await setDoc(doc(db, "locations", "coach-dennis"), {
            ...locationData,
            lat,
            lon,
            timestamp: new Date().toISOString(),
          });

          setLocation(locationData);
          setLatlng({ lat, lon });
        }
      } catch (error) {
        console.error("Failed to reverse geocode:", error);
      }
    };

    const getGPSLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchLocationFromGPS(latitude, longitude);
          },
          (error) => {
            console.error("GPS permission denied or unavailable", error);
          }
        );
      } else {
        console.error("Geolocation not supported by this browser");
      }
    };

    getGPSLocation();
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-center">Current Location:</h3>
      {location && latlng ? (
        <>
          <p className="text-center fw-bold mt-3">
            {location.city}, {location.state}, {location.country}
          </p>
          <MapContainer
            center={[latlng.lat, latlng.lon]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latlng.lat, latlng.lon]}>
              <Popup>
                Coach Dennis is here: <br />
                {location.city}, {location.state}
              </Popup>
            </Marker>
          </MapContainer>
        </>
      ) : (
        <p className="text-center text-muted">Fetching location...</p>
      )}
    </div>
  );
};

export default LocationDetector;
