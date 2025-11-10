const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String },

  status: {
    type: String,
    enum: ['Patur', 'Morasha'],
    required: true
  },

  dateOpenTik: { type: Date, default: Date.now },

 dochSnati: {
  type: String,
  enum: ['הוגש', 'בעבודה', 'לא הוגש']
},

  note: { type: String }
});

module.exports = mongoose.model('Customer', customerSchema);
