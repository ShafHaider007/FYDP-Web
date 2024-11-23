
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h1>MOVE SMART</h1>
          <h3>CONTACT US</h3>
          <p>
            Phone: <a href="tel:+932170340084">+92 3170340084</a>
          </p>
          <p>
            Email: <a href="tahreemfatima@gmail.com">tahreemfatima@gmail.com</a>
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
          <p>Mon-Fri </p>
          <p> 9:00 AM – 5:00 PM</p>
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

