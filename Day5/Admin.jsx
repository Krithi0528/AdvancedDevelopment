import React, { useState } from 'react';

import BookingInfo from './BookingInfo'; // Import the BookingInfo component
import EditSection from './EditSection'; // Import the EditSection component
import Graph from './Graph'; // Import the Graph component
import './Admin.css'; // Import your CSS file for styling
import Sidebar from './Sidebar'; 
const Admin = () => {
  // Define state for booking information
  const [bookingInfo, setBookingInfo] = useState({
    // Placeholder booking information
    bookings: [
      { id: 1, name: 'John Doe', date: '2024-03-20', status: 'Confirmed' },
      { id: 2, name: 'Jane Smith', date: '2024-03-25', status: 'Pending' },
      // Add more bookings as needed
    ],
    // Placeholder graph data
    graphData: [10, 20, 30, 40, 50], // Example data for the graph
  });

  // Function to handle updates to booking information
  const handleBookingUpdate = (updatedInfo) => {
    setBookingInfo(updatedInfo);
  };

  return (
    <div>
    <Sidebar/>
      
    </div>
  );
};

export default Admin;
