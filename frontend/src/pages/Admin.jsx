import React, { useState } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import AddServiceForm from '../components/AddServiceForm';
import AddServiceProviderForm from '../components/AddServiceProviderForm';

const Admin = () => {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');

  const checkPassword = () => {
    if (password === 'admin123') {
      setAuthorized(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="admin">
      {!authorized ? (
        <div className="admin-auth">
          <h2>Enter Admin Passcode</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter passcode"
          />
          <button onClick={checkPassword}>Submit</button>
        </div>
      ) : (
        <>
          <AddServiceForm />
          <AddServiceProviderForm />
          <AdminDashboard />
        </>
      )}
    </div>
  );
};

export default Admin;
// This component serves as the admin page for managing services and providers.
// It includes a password check for authorization, and once authorized, it displays forms for adding services and service providers, as well as the admin dashboard for managing bookings and services.
// The password is hardcoded for simplicity, but in a real application, you would implement a more secure authentication mechanism.
// The Admin component can be expanded with more features such as viewing all bookings, managing service providers, and generating reports.
// It can also include error handling and validation for the forms to ensure data integrity.    