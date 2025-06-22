import React, { useEffect, useState } from 'react';
import api from '../api';
import './BookingForm.css';

const BookingForm = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    customerName: '',
    phoneNumber: '',
    serviceId: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    api.get('/services').then(res => setServices(res.data));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
  e.preventDefault();
  api.post('/bookings', form)
    .then(() => {
      alert('Booking Submitted!');
      window.location.reload(); // Refreshes the page
    })
    .catch(() => {
      alert('Something went wrong!');
    });
};


  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book a Service</h2>
      <input name="customerName" placeholder="Your Name" value={form.customerName} onChange={handleChange} required />
      <input name="phoneNumber" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
      <select name="serviceId" value={form.serviceId} onChange={handleChange} required>
        <option value="">Select Service</option>
        {services.map(service => (
          <option key={service._id} value={service._id}>{service.name}</option>
        ))}
      </select>
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <input type="time" name="time" value={form.time} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
// This component provides a form for users to book services.
// It fetches available services from the API and allows users to select a service, enter their