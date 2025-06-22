const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  date: String,
  time: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
