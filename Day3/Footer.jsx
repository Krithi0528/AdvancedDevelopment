import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>JUBILANT KISMET CRUISE</h3>
          <p>
            JUBILANT Cruises by Waterways Leisure Tourism Pvt Ltd is India's premium cruise line. True to its name, Jubilant aspires to promote and drive the cruise culture in India through experiences that are stylish, luxurious and most importantly, inherently Indian.
          </p>
        </div>
        <div className="footer-content">
          <h3>Links:</h3>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-content">
          <h3>Customer Support:</h3>
          <p>Phone: 022-68811190</p>
          <p>(Mon to Fri - 9 AM to 8 PM)</p>
          <p>(Sat / Sun and Public Holidays - 10 AM to 7 PM)</p>
          <p>Email: info@cordeliacruises.com</p>
        </div>
        <div className="footer-content">
          <h3>Follow Us:</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      {/* <div className="footer-links">
        <ul>
          <li><a href="#">Group booking form</a></li>
          <li><a href="#">Agent Login</a></li>
          <li><a href="#">Investor Relation</a></li>
          <li><a href="#">User Agreement - Visa</a></li>
          <li><a href="#">Privacy Policy - Visa</a></li>
        </ul>
      </div> */}
      <div className="footer-bottom">
        <p>&copy; 2024 Cordelia Cruises. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
