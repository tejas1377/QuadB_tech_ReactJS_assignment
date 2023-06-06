import React, { useState } from 'react';

const BookingForm = ({ movieName, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your form submission logic here
    // You can access the movieName, name, and email state values

    // Reset the form
    setName('');
    setEmail('');

    // Close the booking form
    onClose();
  };

  return (
    <div className="mt-4">
      <h4>Book Tickets for {movieName}</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameInput">Name:</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email:</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
