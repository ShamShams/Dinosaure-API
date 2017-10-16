const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/config');

const app = express();

app.listen(config.port, () => {
  console.log(`Connected on port ${config.port}`)
});
