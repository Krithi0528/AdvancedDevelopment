import Carousel from 'react-bootstrap/Carousel';
import Eve from '../assets/images/Eve.jpg';
import party from '../assets/images/party.jpg';
import couple from '../assets/images/couple.jpg';
import './Home.css'; // Import custom CSS file for styling
import { Link } from 'react-router-dom'; 
function Home() {
  return (
    <Carousel className="carouselj-container" interval={1500}>
      <Carousel.Item>
        <img
          className="carouselj-image"
          src={Eve}
          alt="First slide"
        />
        <div className="carouselj-caption-overlay">
          <h3>Embark on the unforgettable, enchanting</h3>
          <h1>JUBILANT KISMET CRUISE</h1>
        </div>
        <div className="rectanglej">
          <div className="rectanglej-content">
          <p className="cabin-info">3 Nights - 1 Cabin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price starts from </p>
            <div className="line"></div> {/* White line */}
            <p className="price-info">Mumbai-Goa-Mumbai  &nbsp; ₹41,583/Per person</p>
          </div>
        </div>
        <div className="book-now-button2j">
        <Link to="/boo">Book Now</Link>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselj-image"
          src={party}
          alt="Second slide"
        />
        <div className="rectanglej">
          <div className="rectanglej-content">
          <p className="cabin-info">3 Nights - 1 Cabin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price starts from </p>
            <div className="line"></div> {/* White line */}
            <p className="price-info">Mumbai-Goa-Mumbai  &nbsp; ₹41,583/Per person</p>
          </div>
        </div>
        <div className="book-now-buttonj">Book Now</div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselj-image"
          src={couple}
          alt="Third slide"
        />
        <div className="rectanglej">
          <div className="rectanglej-content">
            <p className="cabin-info">3 Nights - 1 Cabin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price starts from </p>
            <div className="line"></div> {/* White line */}
            <p className="price-info">Mumbai-Goa-Mumbai  &nbsp; ₹41,583/Per person</p>
          </div>
        </div>
        <div className="book-now-buttonj">
  Book Now
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;