const mongoose = require('mongoose');

const dinosaureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Dinosaure', dinosaureSchema);
