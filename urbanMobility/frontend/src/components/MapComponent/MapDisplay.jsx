import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./MapDisplay.css";

// Set your Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hhZmhhaWRlcjAwNyIsImEiOiJjbTJyZGwwdGUxMXR2MmtzOGEwdXJrdTdpIn0.HXK0fgIE46ySITWBSXxjfw";

const MapDisplay = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.0479, 33.6844], // Centered on Islamabad
      zoom: 12, // Adjusted zoom level for closer view
    });

    // Add navigation controls (zoom and rotation)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add full-screen control
    map.addControl(new mapboxgl.FullscreenControl(), "top-right");

    // Add scale control
    map.addControl(
      new mapboxgl.ScaleControl({ maxWidth: 100, unit: "metric" }),
      "bottom-left"
    );

    return () => map.remove(); // Cleanup map on component unmount
  }, []);

  return (
    <div className="map-display">
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};

export default MapDisplay;
