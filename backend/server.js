const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

const providerRoutes = require('./routes/providerRoutes');
app.use('/api/providers', providerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// This code initializes an Express server for a service booking portal.
// It connects to a MongoDB database, sets up CORS and JSON parsing middleware,
// and defines routes for services, bookings, and providers.