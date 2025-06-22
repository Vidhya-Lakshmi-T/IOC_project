// === src/pages/About.jsx ===
import React from 'react';
import './About.css';
const About = () => (
  <div className="about">
    <h2>About This Portal</h2>
    <p>This is a professional service booking platform for managing and scheduling services.</p>

    <h3>🔧 SERVER-SIDE ENGINEERING FUNDAMENTALS</h3>
    <p>Your backend is built using Node.js, Express.js, and MongoDB, applying key server-side concepts such as:</p>

    <ol>
      <li>
        <strong>Server & Framework: Node.js with Express.js</strong><br />
        Node.js is a JavaScript runtime used for building scalable, event-driven servers.<br />
        Express.js is a lightweight web application framework for Node.js that simplifies routing and middleware management.<br />
        <em>Key concepts used:</em> Middleware functions for parsing request bodies and handling errors. Routing to define API endpoints like /services, /bookings, /providers. Controllers to separate logic from route definitions.
      </li>
      <li>
        <strong>RESTful API Architecture</strong><br />
        Your backend exposes RESTful API endpoints, which means:
        <ul>
          <li>Stateless interactions: Each request is independent.</li>
          <li>HTTP methods:<br />
            GET → fetch data (services/bookings/providers)<br />
            POST → create new entries (add service, book a service)<br />
            PATCH → update existing data (e.g., update booking status)<br />
            DELETE (optional) → remove data (future scope)
          </li>
        </ul>
      </li>
      <li>
        <strong>MongoDB (NoSQL Database)</strong><br />
        MongoDB stores data as documents (JSON-like format) inside collections.<br />
        <em>Used collections:</em> services, bookings, providers.<br />
        <em>Features:</em> Schema-less structure, optional Mongoose ODM.
      </li>
      <li>
        <strong>Modular Architecture</strong><br />
        <em>Folder structure:</em>
        <ul>
          <li>routes/: API route definitions</li>
          <li>controllers/: Business logic</li>
          <li>models/: MongoDB schemas</li>
          <li>config/db.js: MongoDB connection logic</li>
        </ul>
      </li>
      <li>
        <strong>Database Connection Handling</strong><br />
        Async connection to MongoDB with reusable instance setup.
      </li>
      <li>
        <strong>Validation & Error Handling</strong><br />
        Input validation (e.g., required fields), async error catching, user-friendly frontend messages.
      </li>
      <li>
        <strong>Cross-Origin Resource Sharing (CORS)</strong><br />
        Enables frontend-backend communication using cors middleware.
      </li>
      <li>
        <strong>Port & Server Initialization</strong><br />
        Backend listens on a specific port using app.listen and logs success messages.
      </li>
      <li>
        <strong>Security (Basic Level)</strong><br />
        Simple admin passcode check. No advanced authentication implemented yet.
      </li>
      <li>
        <strong>Scalability Considerations</strong><br />
        Modular code enables future enhancements like user auth, service categories, deployment to production-grade infrastructure.
      </li>
    </ol>
  </div>
);

export default About;
