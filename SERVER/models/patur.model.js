const mongoose = require('mongoose');

const paturSchema = new mongoose.Schema({
  id: { type: String, required: true },
  zuir: { type: String, enum: ['זעיר', 'לא זעיר'] },
  haratKeva: { type: String },
  pay: { type: Number }
});

module.exports = mongoose.model('Patur', paturSchema);
