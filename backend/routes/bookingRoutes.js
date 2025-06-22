const express = require('express');
const router = express.Router();
const { getBookings, createBooking, updateStatus } = require('../controllers/bookingController');

router.get('/', getBookings);
router.post('/', createBooking);
router.patch('/:id/status', updateStatus);

module.exports = router;
