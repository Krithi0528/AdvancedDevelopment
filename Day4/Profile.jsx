import React, { useState } from 'react';
import Nav from './Nav';
import './Profile.css'; // Import your CSS file for styling
const Profile = () => {
  // Define user state
  const [user, setUser] = useState({
    firstName: 'Krithi',
    lastName: 'Muru',
    userName: 'krithim',
    bookedCruises: ['Caribbean Adventure', 'Mediterranean Voyage'],
    upcomingCruises: ['Alaskan Expedition', 'Tropical Getaway'],
    favouriteCruise: 'Caribbean Adventure',
    // Add more user details as needed
  });

  // Function to handle updates to user details
  const handleUserUpdate = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  return (
    <div>
      <Nav />
      <div className="profile-page">
        <h2>Welcome Krithi!</h2>
        <div className="user-info">
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={user.firstName}
              onChange={(e) => handleUserUpdate('firstName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={user.lastName}
              onChange={(e) => handleUserUpdate('lastName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              value={user.userName}
              onChange={(e) => handleUserUpdate('userName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Booked Cruises:</label>
            <ul>
              {user.bookedCruises.map((cruise, index) => (
                <li key={index}>{cruise}</li>
              ))}
            </ul>
          </div>
          <div className="form-group">
            <label>Upcoming Cruises:</label>
            <ul>
              {user.upcomingCruises.map((cruise, index) => (
                <li key={index}>{cruise}</li>
              ))}
            </ul>
          </div>
          <div className="form-group">
            <label>Favourite Cruise:</label>
            <input
              type="text"
              value={user.favouriteCruise}
              onChange={(e) => handleUserUpdate('favouriteCruise', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
