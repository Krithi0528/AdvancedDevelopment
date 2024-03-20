import React from 'react';
import './Offer.css'; // Assuming you have a CSS file named Offer.css for styling
import offergirl from '../assets/images/offergirl.jpg'
import offerroom from '../assets/images/offerroom.jpg'
import '@fortawesome/fontawesome-free/css/all.css';
import Nav from './Nav';

const Offer = () => {
  return (
    <div>
    <Nav/>
    <div className="container">
      <div className="row">
        <div className="offerh">
          <h2>Offers</h2>
          <div className='offerpara'>
            <p>Ready to book your dream vacation? Our incredible offers make travelling aboard The Empress even more irresistible! Get excited for the </p><p> adventure of a lifetime, with incredible sights and unbeatable savings.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src={offergirl}
              className="card-img-top"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#6b1955eb" }}>Kids Sail Free*</h5>
              <p className="card-text">
                <span><i className="fas fa-check"></i></span> Have your kids sail for free when you travel with Cordelia.<br />
                <span><i className="fas fa-check"></i></span> Valid for all kids under the age of 12.<br />
                <span><i className="fas fa-check"></i></span> Valid only for kids travelling as 3rd & 4th guests.<br />
                <span><i className="fas fa-check"></i></span> Offer valid till April 2024.<br />
                <span><i className="fas fa-check"></i></span> Service charges, levies and fuel charges are applicable for kids aged 2-12, with GST.
              </p>
              <button className="find-cruise-button">Find a Cruise</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img
              src={offerroom}
              className="card-img-top"
              alt="Placeholder"
            />
            <div className="card-body">
              <h5 className="card-title"style={{ color: "#6b1955eb" }}>Free Stateroom Upgrade</h5>
              <p className="card-text">
                <span><i className="fas fa-check"></i></span> Pay upfront and level up your view to the Ocean.<br />
                <span><i className="fas fa-check"></i></span> Available upgrade is for Interior Stateroom to Ocean View Stateroom only.<br />
                <span><i className="fas fa-check"></i></span> Valid on bookings made till April 2024.<br />
                <span><i className="fas fa-check"></i></span> Limited inventory available per sailing.<br />
                <span><i className="fas fa-check"></i></span> Full payment must be made at the time of booking.<br />
              </p>
              <button className="find-cruise-button">Find a Cruise</button>
            </div>
          </div>
        </div>
      </div>
    </div>
     <footer className="footeroff">
      <div className="footeroff-container">
        <div className="footer-content">
          <h3>JUBILANT KISMET CRUISE</h3>
          <p>
            JUBILANT Cruises by Waterways Leisure Tourism Pvt Ltd is India’s premium cruise line. True to its name, Jubilant aspires to promote and drive the cruise culture in India through experiences that are stylish, luxurious and most importantly, inherently Indian.
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
    </div>
  );
};

export default Offer;
