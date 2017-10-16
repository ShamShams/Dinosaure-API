const mongoose = require('mongoose');

let dinosaureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
  },
  type: {
    type: String,
    required: true
  }
}, {versionKey: false});

module.exports = mongoose.model('Dinosaure', dinosaureSchema);
