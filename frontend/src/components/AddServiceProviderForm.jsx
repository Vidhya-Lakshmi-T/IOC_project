import React, { useState, useEffect } from 'react';
import api from '../api';
import './AddProviderForm.css';

const AddServiceProviderForm = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    name: '',
    service: '',
    phone: '',
    email: '',
    startTime: '',
    endTime: ''
  });

  useEffect(() => {
    api.get('/services').then((res) => setServices(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/providers', form)
      .then(() => {
        alert('Provider added!');
        setForm({
          name: '',
          service: '',
          phone: '',
          email: '',
          startTime: '',
          endTime: ''
        });
      })
      .catch(() => alert('Error adding provider'));
  };

  return (
    <form className="add-provider-form" onSubmit={handleSubmit}>
      <h2>Add Service Provider</h2>
      <input name="name" placeholder="Provider Name" value={form.name} onChange={handleChange} required />
      <select name="service" value={form.service} onChange={handleChange} required>
        <option value="">Select Service</option>
        {services.map(service => (
          <option key={service._id} value={service.name}>{service.name}</option>
        ))}
      </select>
      <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
      <input name="email" placeholder="Email (optional)" value={form.email} onChange={handleChange} />
      <input name="startTime" type="time" value={form.startTime} onChange={handleChange} />
      <input name="endTime" type="time" value={form.endTime} onChange={handleChange} />
      <button type="submit">Add Provider</button>
    </form>
  );
};

export default AddServiceProviderForm;
// This component allows administrators to add optional service providers.