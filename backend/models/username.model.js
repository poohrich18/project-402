const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usernameSchema = new Schema({
  id: { type: Number, required: true,minlenght: 1,maxlenght: 10 ,unique: true},
  pass: { type: Number, required: true,minlenght: 1,maxlenght: 13 },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  year: { type: Number, required: true,minlenght: 3,maxlenght: 4 },
  type: { type: String, required: true },
  date: { type: Date, required: false },
}, {
  timestamps: true,
});

const Username = mongoose.model('Username', usernameSchema);

module.exports = Username;