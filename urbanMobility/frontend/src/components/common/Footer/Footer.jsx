import React from "react";
import "./Footer.css";
import logo from "../../../assets/images/logo11.png"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Move Smart Logo" className="footer-logo-img" />
            <span className="footer-logo-text">MOVE SMART</span>
          </div>
          <h3>CONTACT US</h3>
          <p>
            Phone: <a href="tel:+923170340084">+92 3170340084</a>
          </p>
          <p>
            Email: <a href="mailto:tahreemfatima@gmail.com">tahreemfatima@gmail.com</a>
          </p>
          <p>
            IGIS, <br />
            NUST H-12, <br />
            Pakistan
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>WORKING HOURS</h3>
          <p>Mon-Fri</p>
          <p>9:00 AM – 5:00 PM</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Move Smart. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
