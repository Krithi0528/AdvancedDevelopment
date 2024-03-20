// BookingInfo.jsx
import React from 'react';
import Sidebar from './Sidebar';
import './BookingInfo.css'; // Import your CSS file for styling

const BookingInfo = ({ bookingInfo }) => {
  // Dummy booking data for three passengers
  const passengers = [
    {
      id: 1,
      name: 'krithi',
      age: 35,
      bookedCruise: 'Caribbean Adventure',
      destination: 'Goa',
      startingPoint: 'Mumbai',
      price: 'INR 31500',
      date: '2024-05-10', // Added date
    },
    {
      id: 2,
      name: 'Smitha',
      age: 28,
      bookedCruise: 'Mediterranean Voyage',
      destination: 'Mumbai',
      startingPoint: 'Goa',
      price: 'INR 38000',
      date: '2024-06-15', // Added date
    },
    {
      id: 3,
      name: 'Michael Johnson',
      age: 45,
      bookedCruise: 'Alaskan Expedition',
      destination: 'Mumbai',
      startingPoint: 'Mumbai',
      price: 'INR 22000',
      date: '2024-07-20', // Added date
    },
  ];

  return (
    <div>
      <Sidebar />
      <div className="booking-info-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Booked Cruise</th>
              <th>Destination</th>
              <th>Starting Point</th>
              <th>Date</th> {/* Added Date column */}
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger) => (
              <tr key={passenger.id}>
                <td>{passenger.name}</td>
                <td>{passenger.age}</td>
                <td>{passenger.bookedCruise}</td>
                <td>{passenger.destination}</td>
                <td>{passenger.startingPoint}</td>
                <td>{passenger.date}</td> {/* Added Date */}
                <td>{passenger.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingInfo;
