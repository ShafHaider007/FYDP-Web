import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import MapPage from "./pages/Mappage/Mappage";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
