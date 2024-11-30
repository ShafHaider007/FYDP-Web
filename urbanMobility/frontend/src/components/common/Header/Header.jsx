import React from "react";
import "./Header.css";
import logo from  "../../../assets/images/logo11.png";




function Header() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="site-header">
      <div className="logo">
        <img src={logo} alt="Move Smart Logo" className="logo-img" />
        Move Smart</div>
      <nav>
        <ul className="nav-links">
          <li onClick={() => scrollToSection("home-section")}>
            <a href="#home-section">Home</a>
          </li>
          <li onClick={() => scrollToSection("about-section")}>
            <a href="#about-section">About</a>
          </li>
          <li onClick={() => scrollToSection("services-section")}>
            <a href="#services-section">Services</a>
          </li>
          <li onClick={() => scrollToSection("contact-section")}>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
