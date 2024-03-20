// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul className="nav-links">
        {/* <li>
          <Link to="/admin">Admin</Link>
        </li> */}
        <li>
          <Link to="/bookinginfo">Booking Information</Link>
        </li>
        <li>
          <Link to="/edit">Edit Information</Link>
        </li>
        {/* <li>
          <Link to="/graph">Graph</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
