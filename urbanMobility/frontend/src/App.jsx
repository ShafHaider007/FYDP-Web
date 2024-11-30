import React from "react";
import HomePage from "./pages/Homepage/HomePage";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
