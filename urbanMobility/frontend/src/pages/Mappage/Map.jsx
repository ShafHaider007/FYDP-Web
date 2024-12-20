import React from "react";
import "./Map.css";
import MapDisplay from "../../components/MapComponent/MapDisplay"; // Placeholder for the map

const Map = () => {
  return (
    <div className="map-page">
      <header className="map-header">
        <h1>Explore Our Maps</h1>
        <p>Find insights and locations using our interactive maps.</p>
      </header>

      <main className="map-content">
        {/* Placeholder for the Map component */}
        <MapDisplay />

        
      </main>
    </div>
  );
};

export default Map;
