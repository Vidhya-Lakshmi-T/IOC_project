const Service = require('../models/Service');

// Get all services
exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

// Create a new service
exports.createService = async (req, res) => {
  const newService = new Service(req.body);
  const saved = await newService.save();
  res.status(201).json(saved);
};
