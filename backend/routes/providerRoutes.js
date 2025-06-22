// backend/routes/providerRoutes.js
const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');

router.post('/', providerController.createProvider);
router.get('/', providerController.getProvidersByService);
router.patch('/:id', providerController.updateProvider);
router.delete('/:id', providerController.deleteProvider);

module.exports = router;
// This code defines the routes for managing service providers in the booking system.
// It includes a POST route to create a new provider and a GET route to fetch providers by
// service type, as well as PATCH and DELETE routes to update and delete a provider respectively.
// The routes are linked to the providerController which contains the logic for handling these requests.