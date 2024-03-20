import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Amenities.css';
import Interior from '../assets/images/Interior.jpg'
import Ocean from '../assets/images/Ocean.jpg';
import Mini from '../assets/images/Mini.jpg';
import Suite from '../assets/images/Suite.jpg';
import Nav from './Nav'

export default function Amenities() {
  return (
    <div>
    <Nav/>
        <div className="text-container6ame">
        <p>STAY IN STYLE</p>
      </div>
      <div className="text-container7ame">
        <p>From cozy Staterooms to lavish Suites, choose from a range of ocean and interior-facing options for you to rest and recharge.</p>
      </div>
      <div className="buttonsame-container">
        <button className="buttoname">Interior</button>
        <button className="buttoname">Ocean View</button>
        <button className="buttoname">Mini Suite</button>
        <button className="buttoname">Suite</button>
      </div>
      <Carousel className="carouselame-container1" interval={1500}>
        <Carousel.Item>
          <img
            className="carouselame-image1"
            src={Interior}
            alt="Interior"
          />
          <div className="rectangle2ame">
            <div className="fontintame">Interior Stateroom</div>
            <div className="fintame">Not only are they budget-friendly, our Interior Staterooms have everything you need to make your journey and stay onboard truly special.</div>
            <button className="button2ame">Accessible (Limited Cabins Available)</button>
            <button className="button2ame">Bathroom, Vanity Area</button>
            <button className="button2ame">Secure Locker</button>
            <button className="button2ame">Intercom</button>
            <button className="button2ame">Television</button>
            <button className="button2ame">Hairdryer (on request)</button>
            <button className="button2ame">Sanitized</button>
            <button className="button2ame">2 Water Bottles</button>
          </div>
          </Carousel.Item>
          <Carousel.Item>
  <img
    className="carouselame-image1"
    src={Ocean}
    alt="Ocean View"
  />
  <div className="rectangle2ame">
    <div className="fontintame">Ocean View Stateroom</div>
    <div className="fintame">Talk about a private and cozy cabin of your own with a picturesque view of the sea, because that’s what our Ocean View Staterooms are all about!</div>
    <button className="button2ame">Accessible (Limited Cabins Available)</button>
    <button className="button2ame">Window</button>
  <button className="button2ame">Accessible (Limited Cabins Available)</button>
  <button className="button2ame">Bathroom, Vanity Area</button>
  <button className="button2ame">Television</button>
  <button className="button2ame">Hairdryer (on request)</button>
  <button className="button2ame">Secure Locker</button>
  </div>
</Carousel.Item>
        <Carousel.Item>
        <img
            className="carouselame-image1"
            src={Mini}
            alt="Interior"
          />
        <div className="rectangle2ame">
  <div className="fontintame">Mini Suite</div>
  <div className="fint">Experience premium accommodation onboard with a private balcony for you to sit back and enjoy panoramic views of the ocean from your happy place.</div>
  <button className="button2ame">Private Balcony</button>
  <button className="button2ame">Sofa Sitting</button>
  <button className="button2ame">Bathroom, Vanity Area</button>
  <button className="button2ame">Hairdryer</button>
  <button className="button2ame">Intercom</button>
  <button className="button2ame">Television</button>
  <button className="button2ame">Secure Locker</button>
  <button className="button2ame">2 Water Bottles</button>
  <button className="button2ame">Sanitized</button>
</div>
</Carousel.Item>
<Carousel.Item>
<img
    className="carouselame-image1"
    src={Suite}
    alt="Interior"
    />
<div className="rectangle2ame">
  <div className="fontintame">Suite</div>
  <div className="fintame">Get ready to make your cruise journey oh so Suite! Furnished with world-class amenities and classy exuberance.</div>
  <button className="button2ame">Private Balcony</button>
  <button className="button2ame">Living Area</button>
  <button className="button2ame">Sofa Sitting</button>
  <button className="button2ame">Refrigerator</button>
  <button className="button2ame">Tea/Coffee Making Facility</button>
  <button className="button2ame">Bathroom, Vanity Area</button>
  <button className="button2ame">Hairdryer</button>
  <button className="button2ame">Intercom</button>
  <button className="button2ame">Television</button>
  <button className="button2ame">Secure Locker</button>
  <button className="button2ame">Bedroom</button>
</div>
</Carousel.Item>
</Carousel>
 <footer className="footerame">
      <div className="footer-container">
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
  )
}
