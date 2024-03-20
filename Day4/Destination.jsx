import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Destination.css';
import goa from '../assets/images/goa.jpg';
import goa2 from '../assets/images/goa2.jpg';
import goa3 from '../assets/images/goa3.jpg';
import goa4 from '../assets/images/goa4.jpg';
import goa5 from '../assets/images/goa5.jpg';
import goa6 from '../assets/images/goa6.jpg';
import Nav from './Nav';


export default function Destination() {
  // Sample card data
  const cardData = [
    { content: 'Card 1 content' },
    { content: 'Card 2 content' },
    { content: 'Card 3 content' },
    { content: 'Card 4 content' },
    { content: 'Card 5 content' },
    { content: 'Card 6 content' }
  ];               

  // Function to render a single card
  const renderCard = (card, index) => {
    if (index === 0) {
      return (
        <div className="rectangle2b">
          <div className="cardb-image">
            <img src={goa} alt="Card" height="300px" />
          </div>
          <div className="cardb-content">
            <h2>Mumbai - Goa - Mumbai</h2>
            <p>19 Apr, 2024 Friday</p>
            <p>Apr 22th, 2024 Monday</p>
            <p><strong>Starting From 41,583</strong></p>
            <button className="book-now-btnb">Book Now</button>
          </div>
        </div>
      );
    } else if (index === 1) {
      return (
        <div className="rectangle2b">
          <div className="cardb-image">
            <img src={goa2} alt="Card" height="300px" />
          </div>
          <div className="cardb-content">
            <h2>Mumbai - Goa - Mumbai</h2>
            <p>3 May, 2024 Friday</p>
            <p>May 6, 2024 Monday</p>
            <p><strong>Starting From 45,318</strong></p>
            <button className="book-now-btnb">Book Now</button>
          </div>
        </div>
      );
    } else if (index === 2) {
      return (
        <div className="rectangle2b">
          <div className="cardb-image">
            <img src={goa3} alt="Card" height="300px" />
          </div>
          <div className="cardb-content">
            <h2>Mumbai - Mumbai</h2>
            <p>11 May, 2024 Friday</p>
            <p>May 13th, 2024 Monday</p>
            <p><strong>Starting From 25,635</strong></p>
            <button className="book-now-btnb">Book Now</button>
          </div>
        </div>
      );
    } else if (index === 3) {
      return (
        <div className="rectangle2b">
          <div className="cardb-image">
            <img src={goa4} alt="Card" height="300px" />
          </div>
          <div className="cardb-content">
            <h2>Mumbai - Goa - Mumbai</h2>
            <p>3 May, 2024 Saturday</p>
            <p>May 6th, 2024 Monday</p>
            <p><strong>Starting From 45,583</strong></p>
            <button className="book-now-btnb">Book Now</button>
          </div>
        </div>
      );
    } else if (index === 4) {
      return (
        <div className="rectangle2b">
          <div className="cardb-image">
            <img src={goa5} alt="Card" height="300px" />
          </div>
          <div className="cardb-content">
            <h2>Mumbai - Mumbai</h2>
            <p>11 May, 2024 Sturday</p>
            <p>May 13,2024 Monday</p>
            <p><strong>Starting From 25,564</strong></p>
            <button className="book-now-btnb">Book Now</button>
          </div>
        </div>
      );
    } else if (index === 5) {
      return (
        <div className="rectangle2b">
          <div className="cardb-image">
            <img src={goa6} alt="Card" height="300px" />
          </div>
          <div className="cardb-content">
            <h2>Goa - Goa</h2>
            <p>17 May, 2024 Saturday</p>
            <p>May 20th, 2024 Monday</p>
            <p><strong>Starting From ₹41,583</strong></p>
            <button className="book-now-btnb">Book Now</button>
          </div>
        </div>
      );
    } else {
      return null; // Return null for other cards not specified
    }
  };

  // Function to render three cards in a carousel item
  const renderCarouselItem = (start) => (
    <Carousel.Item key={start}>
      <div className="d-flex justify-content-between"> {/* Update justify-content-around to justify-content-between */}
        {cardData.slice(start, start + 3).map((card, index) => (
          <div key={index} className="cardb-wrapper" style={{ marginRight: index !== 2 ? '20px' : '0' }}>
            {renderCard(card, start + index)}
          </div>
        ))}
      </div>
    </Carousel.Item>
  );
  return (
    <div>
    <Nav/>
      <Carousel className="carousel-container1bdes" interval={8000} style={{ height: '500px' }}>
        {renderCarouselItem(0)}
        {renderCarouselItem(3)}
      </Carousel>
      <div className='text-containerdest'>
        <h2><strong>Book Your Destination</strong></h2>
      </div>
      <footer className="footerdes">
      <div className="footerdes-container">
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
}
