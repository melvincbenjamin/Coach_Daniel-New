import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyBVmcgbCteYgqSlTKQL5iHyz3Lhw7a8dCI"; // Paste your Google Maps API Key here

function LocationDetector() {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
            );

            const addressComponents = response.data.results[0].address_components;
            const city = addressComponents.find(c => c.types.includes("locality"))?.long_name || "";
            const region = addressComponents.find(c => c.types.includes("administrative_area_level_1"))?.long_name || "";
            const country = addressComponents.find(c => c.types.includes("country"))?.long_name || "";

            setLocation(`${city}, ${region}, ${country}`);
          } catch (error) {
            console.error("Error fetching location:", error);
            setLocation("Location not available");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocation("Permission denied or unavailable");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  return (
    <div className="text-center text-muted my-3">
      <small>📍 Current Location: {location}</small>
    </div>
  );
}

export default LocationDetector;
