
 🛠️ Service Booking Portal

A full-stack web application that allows users to book services and admins to manage service providers, approvals, and bookings.

🚀 Tech Stack

- **Frontend**: React, Axios, React Router DOM, Tailwind CSS (optional for styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using MongoDB Compass)
- **API Communication**: RESTful API

---

 ✨ Features

🧑‍💼 User Features
- User registration and login
- Browse available services
- Book a service using a form
- View booking status

🔐 Admin Features
- Login as admin(passcode: admin123)
- View and manage all bookings
- Approve or reject service requests
- Add new services and providers

---

🔧 Setup Instructions

1. Install backend dependencies
cd backend
npm install

2. Install frontend dependencies
cd ../frontend
npm install

3. Configure MongoDB
Make sure MongoDB is installed and running (e.g., via MongoDB Compass or Atlas)

Create a .env file inside the /backend folder with the following:
MONGO_URI=mongodb://localhost:27017/servicebooking
PORT=5000

4. Run the project
Backend:
cd backend
npm run dev

Frontend:
cd frontend
npm start
