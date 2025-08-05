import React, { useEffect, useState } from "react";
import { supabase } from "../superbaseClient";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CoachLocationMap = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const { data, error } = await supabase
        .from("dennis_locations")
        .select("*")
        .eq("id", 1)
        .single();

      if (!error && data) {
        setLocation([data.latitude, data.longitude]);
      }
    };

    fetchLocation();
    const interval = setInterval(fetchLocation, 10000); // refresh every 10 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4" style={{ height: "400px" }}>
      {location ? (
        <MapContainer center={location} zoom={13} style={{ height: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={location}>
            <Popup>📍 Coach Dennis' current location</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p className="text-center">Loading Coach Dennis' location...</p>
      )}
    </div>
  );
};

export default CoachLocationMap;
