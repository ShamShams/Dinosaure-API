const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/config');

const app = express();

mongoose.connect(config.mongoUrl, () => {
  console.log('DB initialized...');
});

app.listen(config.port, () => {
  console.log(`Connected on port ${config.port}`)
});
