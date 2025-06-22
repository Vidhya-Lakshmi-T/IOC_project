import React, { useEffect, useState } from 'react';
import api from '../api';
import ServiceCard from './ServiceCard';
import './ServiceList.css';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('/services').then(res => setServices(res.data));
  }, []);

  return (
    <div className="services-grid">
      {services.map(service => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
// This component fetches and displays a list of services available for booking.
// It uses the ServiceCard component to render each service in a grid layout.