const mongoose = require('mongoose');

const mursheSchema = new mongoose.Schema({
  id: { type: String, required: true },
  T100: { type: String },
  pay: { type: String }
});

module.exports = mongoose.model('Murshe', mursheSchema);
