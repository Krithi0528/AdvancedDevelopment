// Nav.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Nav.css';
// import logo2 from '../assets/images/logo2.png';
export default function Nav() {
  return (
    <div>
      <div className="navbar1">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rooms">Cabins</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/login">Logout</Link> */}
        <Link to="/">Home</Link>
        <Link to="/pro">Profile</Link>
        <Link to="/offer">Offers</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/amenities">Amenities</Link>
        <Link to="/boo">Booking</Link>
        <Link to="/login">Logout</Link>
        {/* <div className="lo">
          <img src={logo2} width="50px" height="50px" alt="Logo" />
        </div> */}
        <div className="namm">
          <p><Link to="/admin">Jubilant Kismet Cruise</Link></p>
        </div>
      </div>
 </div>
);
}