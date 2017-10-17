const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/config');
const router = require('./routes/index');

const app = express();

mongoose.connect(config.mongoUrl, () => {
  console.log('DB initialized...');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router)

app.listen(config.port, () => {
  console.log(`Connected on port ${config.port}`)
});
