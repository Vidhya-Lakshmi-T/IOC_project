import React, { useState, useEffect } from 'react';
import api from '../api';
import './Card.css';

const ServiceCard = ({ service }) => {
  const [providers, setProviders] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (showDetails && service?.name) {
      api.get(`/providers?service=${service.name}`)
        .then(res => setProviders(res.data))
        .catch(() => setProviders([]));
    }
  }, [showDetails, service?.name]);

  const handleClick = (e) => {
    e.stopPropagation();
    setShowDetails(true);
  };

  if (!service || typeof service !== 'object' || !service.name) {
    return <div className="card error-card">Service unavailable</div>;
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={service.image || '/default-service.jpg'} alt={service.name} />
      <h3>{service.name}</h3>
      <p>{service.description}</p>

      {showDetails && (
        <div className="provider-info">
          {providers.length > 0 ? (
            <>
              <h4>Available Providers:</h4>
              <ul>
                {providers.map((p) => (
                  <li key={p._id}>
                    <strong>{p.name}</strong> ({p.phone})<br />
                    Email: {p.email}<br />
                    Available: {p.startTime} - {p.endTime}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="no-providers">⚠️ Service currently unavailable</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
// This component displays a service card with its details.
// When clicked, it fetches and displays the available providers for that service.