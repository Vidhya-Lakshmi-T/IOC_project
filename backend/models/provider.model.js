// backend/models/provider.model.js
const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: { type: String, required: true },
  phone: {
    type: String,
    required: true,
    match: [/^[6-9]\d{9}$/, 'Phone number must be valid']
  },
  email: { type: String },
  startTime: {
    type: String,
    validate: {
      validator: function (v) {
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
      },
      message: props => `${props.value} is not a valid start time (HH:mm)`
    }
  },
  endTime: {
    type: String,
    validate: {
      validator: function (v) {
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
      },
      message: props => `${props.value} is not a valid end time (HH:mm)`
    }
  }
});

module.exports = mongoose.model('Provider', providerSchema);
// This code defines a Mongoose schema for service providers in the booking system.
// It includes fields for the provider's name, service type, phone number, email, and