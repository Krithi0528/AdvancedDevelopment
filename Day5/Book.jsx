import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Book.css';
import goa from '../assets/images/goa.jpg';
import goa2 from '../assets/images/goa2.jpg';
import goa3 from '../assets/images/goa3.jpg';
import goa4 from '../assets/images/goa4.jpg';
import goa5 from '../assets/images/goa5.jpg';
import goa6 from '../assets/images/goa6.jpg';


export default function Book() {
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
      <Carousel className="carousel-container1bb" interval={8000} style={{ height: '500px' }}>
        {renderCarouselItem(0)}
        {renderCarouselItem(3)}
      </Carousel>
  );
}
