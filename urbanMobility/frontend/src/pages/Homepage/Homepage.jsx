import React, { useEffect, useState } from "react";
import "./HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import service1Img from "../../assets/images/service1.jpg";
import service2Img from "../../assets/images/service2.jfif";
import service3Img from "../../assets/images/service3.jfif";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [service1Img, service2Img, service3Img];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleSlideshow = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="hero" className="section hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>Welcome to Move Smart</h1>
          <p>Empowering Smarter Urban Mobility Solutions for Sustainable Cities</p>
          <a href="#services" className="cta-button">
            Explore Services
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="section about-us" data-aos="fade-right">
        <div className="about-us-container">
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              Move Smart is dedicated to empowering smarter urban mobility solutions.
              Our vision is to create sustainable and efficient cities by integrating
              innovative technology, actionable insights, and collaboration.
            </p>
            <p>
              With a focus on real-time data and user-friendly tools, we help city
              planners and communities make informed decisions for a better future.
            </p>
          </div>
          <div className="about-us-slideshow">
            <div className="slideshow">
              <button
                className="slide-btn prev"
                onClick={() => handleSlideshow("prev")}
              >
                &#8249;
              </button>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={index === currentIndex ? "active" : ""}
                />
              ))}
              <button
                className="slide-btn next"
                onClick={() => handleSlideshow("next")}
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services" data-aos="fade-right">
        <h2>Our Services</h2>
        <p className="services-description">
          Explore our innovative and data-driven solutions designed to improve
          urban mobility and support sustainable cities.
        </p>
        <div className="service-boxes">
          <div className="service-box" data-aos="fade-up">
            <img
              src={service1Img}
              alt="Heatmap Visualizations"
              className="service-image"
            />
            <h3>Heatmap Visualizations</h3>
            <p>
              Providing real-time and interactive heatmaps to help city
              planners optimize infrastructure placement.
            </p>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="200">
            <img
              src={service2Img}
              alt="Smart Route Optimization"
              className="service-image"
            />
            <h3>Smart Route Optimization</h3>
            <p>
              Suggesting efficient and environmentally friendly pedestrian
              routes using live traffic data.
            </p>
          </div>
          <div className="service-box" data-aos="fade-up" data-aos-delay="400">
            <img
              src={service3Img}
              alt="Data Insights for Urban Planners"
              className="service-image"
            />
            <h3>Data Insights for Urban Planners</h3>
            <p>
              Generating predictive models to help urban planners design
              smarter, more efficient pedestrian infrastructure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
