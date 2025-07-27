import React, { useEffect, useState } from "react";
import axios from "axios";

function LocationDetector() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    axios.get("https://ipapi.co/json/")
      .then(response => {
        const { city, region, country_name } = response.data;
        setLocation(`${city}, ${region}, ${country_name}`);
      })
      .catch(error => {
        console.error("Error fetching location:", error);
        setLocation("Unknown Location");
      });
  }, []);

  return (
    <div className="text-center text-muted my-3">
      <small>📍 Current Location: {location}</small>
    </div>
  );
}

export default LocationDetector;
