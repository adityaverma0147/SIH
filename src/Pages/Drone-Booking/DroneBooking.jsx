import React, { useState } from 'react';
import './DroneBooking.css';

const DroneBooking = () => {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    time: '',
    duration: '',
    purpose: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="drone-booking-container">
      <h2>Drone Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (hours):</label>
          <input type="number" id="duration" name="duration" value={formData.duration} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="purpose">Purpose:</label>
          <textarea id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required></textarea>
        </div>
        {/* <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes:</label>
          <textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange}></textarea>
        </div> */}
        <button type="submit">Book Drone</button>
      </form>
    </div>
  );
};

export default DroneBooking;