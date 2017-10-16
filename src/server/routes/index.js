const express = require('express');
const dinosaures = require('./dinosaures');

const router = express.Router();

router.use('/dinosaures', dinosaures);

module.exports = router;
