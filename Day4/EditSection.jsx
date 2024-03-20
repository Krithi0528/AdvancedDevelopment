// EditSection.jsx
import React, { useState } from 'react';
import './EditSection.css'; // Import your CSS file for styling
import Sidebar from './Sidebar';

export default function EditSection() {
  const [cruiseDetails, setCruiseDetails] = useState([
    {
      id: 1,
      startingPort: 'Mumbai',
      endingPort: 'Chennai',
      cabinOptionsAvailable: ['Interior', 'Ocean View', 'Mini Suite', 'Suite'],
      price: 25000,
      date: '2024-03-20',
    },
    {
      id: 2,
      startingPort: 'New York',
      endingPort: 'Miami',
      cabinOptionsAvailable: ['Interior', 'Ocean View', 'Suite'],
      price: 35000,
      date: '2024-04-15',
    },
    // Add more cruise details as needed
  ]);

  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const handleEditField = (id, field, value) => {
    const updatedCruiseDetails = cruiseDetails.map((cruise) => {
      if (cruise.id === id) {
        return {
          ...cruise,
          [field]: value,
        };
      }
      return cruise;
    });
    setCruiseDetails(updatedCruiseDetails);
    setUnsavedChanges(true);
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log('Editing cruise with ID:', id);
    // You can implement editing logic or navigate to another page for editing
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log('Deleting cruise with ID:', id);
    // You can implement deletion logic, such as removing the item from the state
    setCruiseDetails(cruiseDetails.filter((cruise) => cruise.id !== id));
    setUnsavedChanges(false);
  };

  const handleSave = () => {
    // Implement save functionality here
    console.log('Saving changes...');
    setUnsavedChanges(false);
    // You can add logic here to save the details to a database or perform other actions
  };

  return (
    <div>
      <Sidebar />
      <div className="edit-container">
        <h1>Edit Cruise Details</h1>
        <div className="edit-form">
          {cruiseDetails.map((cruise) => (
            <div className="cruise-details" key={cruise.id}>
              <div className="form-group">
                <label>Starting Port:</label>
                <select
                  value={cruise.startingPort}
                  onChange={(e) => handleEditField(cruise.id, 'startingPort', e.target.value)}
                >
                  <option value="Mumbai">Mumbai</option>
                  <option value="New York">New York</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <label>Ending Port:</label>
                <select
                  value={cruise.endingPort}
                  onChange={(e) => handleEditField(cruise.id, 'endingPort', e.target.value)}
                >
                  <option value="Chennai">Chennai</option>
                  <option value="Miami">Miami</option>
                  
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <label>Cabin Options Available:</label>
                <select
                  value={cruise.cabinOptionsAvailable.join(',')}
                  onChange={(e) => handleEditField(cruise.id, 'cabinOptionsAvailable', e.target.value.split(','))}
                >
                  <option value="Interior">Interior</option>
                  <option value="Ocean View">Ocean View</option>
                  <option value="Mini Suite">Mini Suite</option>
                  <option value="Suite">Suite</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input
                  type="number"
                  value={cruise.price}
                  onChange={(e) => handleEditField(cruise.id, 'price', parseInt(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  value={cruise.date}
                  onChange={(e) => handleEditField(cruise.id, 'date', e.target.value)}
                />
              </div>
              <div className="button-group">
                <button className="edit-button" onClick={() => handleEdit(cruise.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(cruise.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        {unsavedChanges && (
          <button className="save-button" onClick={handleSave}>Save Changes</button>
        )}
      </div>
    </div>
  );
}
