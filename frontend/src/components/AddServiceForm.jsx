import React, { useState } from 'react';
import api from '../api';
import './AddServiceForm.css';

const AddServiceForm = () => {
  const [form, setForm] = useState({ name: '', description: '', image: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/services', form).then(() => alert('Service added!'));
  };

  return (
    <form className="add-service" onSubmit={handleSubmit}>
      <h2>Add New Service</h2>
      <input name="name" placeholder="Service Name" value={form.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <input name="image" placeholder="Image URL (optional)" value={form.image} onChange={handleChange} />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
// This component provides a form for administrators to add new services.
// It allows input for service name, description, and an optional image URL.