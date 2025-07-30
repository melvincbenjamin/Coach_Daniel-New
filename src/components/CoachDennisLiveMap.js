import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const CoachDennisLiveMap = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "locations", "coach-dennis"), (docSnap) => {
      if (docSnap.exists()) {
        setLocation(docSnap.data());
      }
    });

    return () => unsub(); // Cleanup
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-center">Live Location of Coach Dennis</h3>
      {location ? (
        <>
          <p className="text-center fw-bold mt-3">
            {location.city}, {location.state}, {location.country}
          </p>
          <MapContainer
            center={[location.lat, location.lon]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lon]}>
              <Popup>
                Coach Dennis is currently in <br />
                {location.city}, {location.state}
              </Popup>
            </Marker>
          </MapContainer>
        </>
      ) : (
        <p className="text-center text-muted">Loading location...</p>
      )}
    </div>
  );
};

export default CoachDennisLiveMap;
