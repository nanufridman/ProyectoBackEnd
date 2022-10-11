const express = require('express');
const router = express.Router();

const appt = require('./appt');

router.use('/appt', appt)

module.exports = router;