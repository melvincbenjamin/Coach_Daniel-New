import React, { useEffect } from "react";
import { supabase } from "../superbaseClient";

const UpdateLocation = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const { error } = await supabase
        .from("dennis_locations")
        .upsert([
          {
            id: 1, // always update the same row
            latitude,
            longitude,
            updated_at: new Date().toISOString(),
          },
        ]);

      if (error) {
        console.error("Location update failed:", error);
      } else {
        console.log("Location updated:", latitude, longitude);
      }
    });
  }, []);

  return <p className="text-center mt-3">Updating location...</p>;
};

export default UpdateLocation;
