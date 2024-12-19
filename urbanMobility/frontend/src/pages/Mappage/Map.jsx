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

        {/* Additional information or components */}
        <section className="info-section">
          <h2>How to Use</h2>
          <p>Zoom in, pan around, and click markers for detailed insights.</p>
        </section>
      </main>
    </div>
  );
};

export default Map;
