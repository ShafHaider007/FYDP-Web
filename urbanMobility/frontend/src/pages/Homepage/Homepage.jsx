import React, { useEffect } from "react";
import "./HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import service1Img from "../../assets/images/service1.jpg"; // Replace with your image path
import service2Img from "../../assets/images/service2.jfif";
import service3Img from "../../assets/images/service3.jfif";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="hero" className="section hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>Welcome to Move Smart</h1>
          <p>Empowering Smarter Urban Mobility Solutions for Sustainable Cities</p>
          <a href="#services" className="cta-button">Explore Services</a>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="section services" data-aos="fade-right">
        <h2>Our Services</h2>
        <p className="services-description">
          Explore our innovative and data-driven solutions designed to improve urban mobility and support sustainable cities.
        </p>
        <div className="service-boxes">
          <div className="service-box" data-aos="fade-up">
            <img src={service1Img} alt="Heatmap Visualizations" className="service-image" />
            <h3>Heatmap Visualizations</h3>
            <p>Providing real-time and interactive heatmaps to help city planners optimize infrastructure placement.</p>
            <a href="/heatmaps" className="service-button">Learn More</a>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="200">
            <img src={service2Img} alt="Smart Route Optimization" className="service-image" />
            <h3>Smart Route Optimization</h3>
            <p>Suggesting efficient and environmentally friendly pedestrian routes using live traffic data.</p>
            <a href="/route-optimization" className="service-button">Learn More</a>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="400">
            <img src={service3Img} alt="Data Insights for Urban Planners" className="service-image" />
            <h3>Data Insights for Urban Planners</h3>
            <p>Generating predictive models to help urban planners design smarter, more efficient pedestrian infrastructure.</p>
            <a href="/urban-planners" className="service-button">Learn More</a>
          </div>
        </div>
      </section>

      {/* Other sections */}
    </div>
  );
};

export default HomePage;
