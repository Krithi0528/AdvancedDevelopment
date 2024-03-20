import React, { useState } from 'react';
import './BookingPage.css'; // Assuming the CSS file is in the same directory

const BookingPage = () => {
  const [selectedCruise, setSelectedCruise] = useState('');
  const [showRoomOptions, setShowRoomOptions] = useState(false);

  const handleCruiseChange = (event) => {
    setSelectedCruise(event.target.value);
    // Show room options when a cruise is selected
    setShowRoomOptions(true);
  };

  return (
    <div className="booking-page">
      <h2>Select Cruise</h2>
      <select value={selectedCruise} onChange={handleCruiseChange}>
        <option value="">Select Cruise</option>
        <option value="cruise1">Cruise 1</option>
        <option value="cruise2">Cruise 2</option>
        {/* Add more cruise options as needed */}
      </select>
      {showRoomOptions && (
        <div className="room-options">
          <h2>Room 1</h2>
          {/* Add room options here */}
          <div className="guest-info">
  <h3>Guest</h3>
  <div>
    <label htmlFor="adults">Adults (12 & Above):</label>
    <input type="number" id="adults" name="adults" min="1" defaultValue="1" />
  </div>
  <div>
    <label htmlFor="children">Children (2 Years - 12 Years):</label>
    <input type="number" id="children" name="children" min="0" defaultValue="0" />
  </div>
  <div>
    <label htmlFor="infants">Infants (6 Months - 2 Years):</label>
    <input type="number" id="infants" name="infants" min="0" defaultValue="0" />
  </div>
</div>

<div className="room-category">
  <h3>Room Category</h3>
  <div className="room-option">
    <label>
      <input type="checkbox" name="interior" />
      Interior
    </label>
    <div className="cruise-details">
      <p>Cruise</p>
      <p>₹19,970</p>
      <p>Per Guest/Night</p>
      <p>₹59,909</p>
      <p>Sub-Total</p>
    </div>
  </div>
  <div className="room-option">
    <label>
      <input type="checkbox" name="ocean-view" />
      Ocean View
    </label>
    <div className="cruise-details">
      <p>Cruise</p>
      <p>₹23,954</p>
      <p>Per Guest/Night</p>
      <p>₹71,861</p>
      <p>Sub-Total</p>
    </div>
  </div>
</div>
          <button className="add-room-btn">+ Add Another Room</button>
          <button className="continue-btn">Continue Booking</button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
