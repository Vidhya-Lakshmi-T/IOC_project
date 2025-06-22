// backend/controllers/providerController.js
const Provider = require('../models/provider.model');

exports.createProvider = async (req, res) => {
  try {
    const provider = new Provider(req.body);
    await provider.save();
    res.status(201).json({ message: 'Provider added successfully', provider });
  } catch (err) {
    res.status(400).json({ message: 'Error adding provider', error: err.message });
  }
};

exports.getProvidersByService = async (req, res) => {
  try {
    const { service } = req.query;
    const providers = await Provider.find({ service });
    res.json(providers);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch providers', error: err.message });
  }
};

exports.updateProvider = async (req, res) => {
  try {
    const updated = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Provider not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating provider', error: err.message });
  }
};

exports.deleteProvider = async (req, res) => {
  try {
    const deleted = await Provider.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Provider not found' });
    res.json({ message: 'Provider deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting provider', error: err.message });
  }
};
// This code defines the controller for managing service providers in the booking system.
// It includes functions to create a provider, fetch providers by service type, update provider details,
// and delete a provider.
