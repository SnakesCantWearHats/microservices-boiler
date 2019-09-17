const express = require('express');

const authRoutes = require('./routes/authentication');

const router = express.Router();

router.use('/auth', authRoutes);

module.exports = router;

