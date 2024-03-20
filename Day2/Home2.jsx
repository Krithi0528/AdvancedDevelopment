import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home2.css';
import Footer from './Footer';
import Nav from './Nav';
import Book from './Book';
import Home from './Home';
import bg2 from '../assets/images/bg2.jpg';
import Shipz from '../assets/images/Shipz.png';
import slidingImage1 from '../assets/images/slidingImage1.jpg';
import slidingImage2 from '../assets/images/slidingImage2.jpg';
import slidingImage3 from '../assets/images/slidingImage3.jpg';
import bg4 from '../assets/images/bg4.png';
import shipvideo from '../assets/videos/shipvideo.mp4';
import smallship from '../assets/images/smallship.jpg';
import smallwheel from '../assets/images/smallwheel.png';
import Interior from '../assets/images/Interior.jpg'
import Ocean from '../assets/images/Ocean.jpg';
import Mini from '../assets/images/Mini.jpg';
import Suite from '../assets/images/Suite.jpg';
import girlff from '../assets/images/girlff.png';
import violetship from '../assets/images/violetship.png';
import cimage from '../assets/images/cimage.jpg';

export default function Home2() {
  return (
    <div>
    <Nav/>
    <Home/>
    <div className='rect'>
      <div className='back'>
        <img src={bg2} height={200} width={1263} alt="Background" />
        <div className="text-container">
          <p>WEEKEND FUN</p>
        </div>
        <div className="text-container2">
          <p>THAT DOESN'T END</p>
        </div>
        <div className="text-container3">
          <p>From chilling by the pool to dancing the night away, welcome to a weekend filled with endless possibilities.</p>
        </div>
        <Carousel className="carousel-container" interval={1100} controls={false} indicators={false} wrap={true}>
          <Carousel.Item>
            <img
              className="carousel-image"
              src={slidingImage1} height={400} width={1263}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image"
              src={slidingImage2} height={400} width={1263}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-image"
              src={slidingImage3} height={400} width={1263}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='back2'>
        <img src={bg4} height={200} width={400} alt="Background" />
      </div>
      <div className='back3'>
        <img src={smallship} height={50} width={50} alt="Background" />
      </div>
      <div className='back4'>
        <img src={smallwheel} height={50} width={50} alt="Background" />
      </div>
      <div className="text-container4">
        <p>Sail Into A World That Dreams Are Made Of</p>
      </div>
      <div className="text-container5">
        <p>What you seek awaits you here. Come aboard for an extraordinary experience that goes beyond cruising.</p>
      </div>
      <div className='video-container'>
        <video controls>
          <source src={shipvideo} type="video/mp4" />
        </video>
      </div>
      <div className="text-container6">
        <p>STAY IN STYLE</p>
      </div>
      <div className="text-container7">
        <p>From cozy Staterooms to lavish Suites, choose from a range of ocean and interior-facing options for you to rest and recharge.</p>
      </div>
      <div className="buttons-container">
        <button className="button">Interior</button>
        <button className="button">Ocean View</button>
        <button className="button">Mini Suite</button>
        <button className="button">Suite</button>
      </div>
      <div className='back0'>
        <img src={bg4} height={200} width={400} alt="Background" />
      </div>
      <Carousel className="carousel-container1" interval={1500}>
        <Carousel.Item>
          <img
            className="carousel-image1"
            src={Interior}
            alt="Interior"
          />
          <div className="rectangle2">
            <div className="fontint">Interior Stateroom</div>
            <div className="fint">Not only are they budget-friendly, our Interior Staterooms have everything you need to make your journey and stay onboard truly special.</div>
            <button className="button2">Accessible (Limited Cabins Available)</button>
            <button className="button2">Bathroom, Vanity Area</button>
            <button className="button2">Secure Locker</button>
            <button className="button2">Intercom</button>
            <button className="button2">Television</button>
            <button className="button2">Hairdryer (on request)</button>
            <button className="button2">Sanitized</button>
            <button className="button2">2 Water Bottles</button>
          </div>
          </Carousel.Item>
          <Carousel.Item>
  <img
    className="carousel-image1"
    src={Ocean}
    alt="Ocean View"
  />
  <div className="rectangle2">
    <div className="fontint">Ocean View Stateroom</div>
    <div className="fint">Talk about a private and cozy cabin of your own with a picturesque view of the sea, because that’s what our Ocean View Staterooms are all about!</div>
    <button className="button2">Accessible (Limited Cabins Available)</button>
    <button className="button2">Window</button>
  <button className="button2">Accessible (Limited Cabins Available)</button>
  <button className="button2">Bathroom, Vanity Area</button>
  <button className="button2">Television</button>
  <button className="button2">Hairdryer (on request)</button>
  <button className="button2">Secure Locker</button>
  </div>
</Carousel.Item>
        <Carousel.Item>
        <img
            className="carousel-image1"
            src={Mini}
            alt="Interior"
          />
        <div className="rectangle2">
  <div className="fontint">Mini Suite</div>
  <div className="fint">Experience premium accommodation onboard with a private balcony for you to sit back and enjoy panoramic views of the ocean from your happy place.</div>
  <button className="button2">Private Balcony</button>
  <button className="button2">Sofa Sitting</button>
  <button className="button2">Bathroom, Vanity Area</button>
  <button className="button2">Hairdryer</button>
  <button className="button2">Intercom</button>
  <button className="button2">Television</button>
  <button className="button2">Secure Locker</button>
  <button className="button2">2 Water Bottles</button>
  <button className="button2">Sanitized</button>
</div>
</Carousel.Item>
<Carousel.Item>
<img
    className="carousel-image1"
    src={Suite}
    alt="Interior"
    />
<div className="rectangle2">
  <div className="fontint">Suite</div>
  <div className="fint">Get ready to make your cruise journey oh so Suite! Furnished with world-class amenities and classy exuberance.</div>
  <button className="button2">Private Balcony</button>
  <button className="button2">Living Area</button>
  <button className="button2">Sofa Sitting</button>
  <button className="button2">Refrigerator</button>
  <button className="button2">Tea/Coffee Making Facility</button>
  <button className="button2">Bathroom, Vanity Area</button>
  <button className="button2">Hairdryer</button>
  <button className="button2">Intercom</button>
  <button className="button2">Television</button>
  <button className="button2">Secure Locker</button>
  <button className="button2">Bedroom</button>
</div>
</Carousel.Item>
</Carousel>
<div className="button0">
        <button0>Book Now</button0>
        </div>
        <div className='violetship'>
        <img src={violetship} height={150} width={250} alt="Background" />
      </div>
        <div className='girlff'>
        <img src={girlff} height={200} width={1263} alt="Background" />
      </div>
      <div className="text-containergirl1">
          <p>UPCOMING</p>
        </div>
        <div className="text-containergirl2">
          <p>WEEKEND CRUISES</p>
        </div>
        <div className="text-containergirl3">
          <p>Save the date, pack your bags, and set sail!</p>
        </div>
        <div className='cimage'>
        <img src={cimage} height={480} width={500} alt="Ship" />
      </div>
      <Book/>
      <div className="text-containersk1">
          <p>KNOW YOUR</p>
        </div>
        <div className="text-containersk2">
          <p>CRUISE</p>
        </div>
      <div className='ship'>
        <img src={Shipz} height={480} width={1263} alt="Ship" />
        <Footer/>
      </div>
    </div>
    </div>
  );
}
