const Booking = require('../models/Booking');

// Get all bookings
exports.getBookings = async (req, res) => {
  const bookings = await Booking.find().populate('serviceId');
  res.json(bookings);
};

// Create a booking
exports.createBooking = async (req, res) => {
  const booking = new Booking(req.body);
  const saved = await booking.save();
  res.status(201).json(saved);
};

// Update booking status
exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updated = await Booking.findByIdAndUpdate(id, { status }, { new: true });
  res.json(updated);
};
