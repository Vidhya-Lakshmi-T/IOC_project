import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navbarStyle = {
    backgroundImage: `url('public/images/bg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <h1 className="navbar-title">Service Booking Portal</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
// This component renders the navigation bar for the service booking portal.
// It includes links to the home page, admin panel, and about page.