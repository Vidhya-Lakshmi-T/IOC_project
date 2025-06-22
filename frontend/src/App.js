import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import About from './pages/About';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// This is the main application file for the service booking portal.
// It sets up the React Router with routes for the home page, admin panel, and about page.
// The Navbar component is included to provide navigation links across the application.
// The application uses a container class for styling and layout purposes.
// The `App.css` file is imported for styling the application.
// The `BrowserRouter` component wraps the entire application to enable routing functionality.
// The `Routes` component defines the different routes available in the application.
// Each `Route` specifies a path and the component to render when that path is accessed.
// The `Home`, `Admin`, and `About` components are imported from their respective files
// to be used as the content for each route.
// The `Navbar` component is included to provide a consistent navigation experience across the application.
// The `App` component is exported as the default export, making it the entry point for the React application.
// The application is structured to allow easy expansion with additional features and pages in the future.
// The use of React Router allows for a single-page application experience, where navigation does not require full page reloads.
// The application is designed to be responsive and user-friendly, with a focus on service booking and management.
// The `App.css` file should contain styles to enhance the visual appearance of the application,
// including layout, colors, fonts, and responsive design elements. 