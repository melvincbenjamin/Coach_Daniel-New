import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const LocationViewer = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const docRef = doc(db, "locations", "coach-dennis");
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setLocation(snapshot.data());
      }
    };

    fetchLocation();
    const interval = setInterval(fetchLocation, 30000); // auto-refresh

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-5">
      <h3>Coach Dennis' Current Location</h3>
      {location ? (
        <p className="fw-bold mt-3">
          {location.city}, {location.state}, {location.country}
        </p>
      ) : (
        <p className="text-muted">Fetching location...</p>
      )}
    </div>
  );
};

export default LocationViewer;
