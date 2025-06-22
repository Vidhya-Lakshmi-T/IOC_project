import React, { useEffect, useState } from 'react';
import api from '../api';
import './Dashboard.css';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get('/bookings').then(res => setBookings(res.data));
  }, []);

  const updateStatus = (id, status) => {
    api.patch(`/bookings/${id}/status`, { status }).then(() => {
      api.get('/bookings').then(res => setBookings(res.data));
    });
  };

  return (
    <div className="dashboard">
      <h2>Bookings Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b._id}>
              <td>{b.customerName}</td>
              <td>{b.phone}</td>
              <td>{b.serviceId?.name || 'Unknown'}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td><span className={`status ${b.status}`}>{b.status}</span></td>
              <td>
                <button onClick={() => updateStatus(b._id, 'approved')}>Approve</button>
                <button onClick={() => updateStatus(b._id, 'rejected')}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
// booking details, and submit the booking request.
// It also includes validation to ensure all fields are filled out before submission.