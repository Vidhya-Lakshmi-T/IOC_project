const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  availableSlots: { type: Number, default: 5 }
});

module.exports = mongoose.model('Service', serviceSchema);
