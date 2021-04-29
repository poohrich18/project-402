const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
 // id: { type: Number, required: true,minlenght: 1,maxlenght: 10 ,unique: true},
  groupname: { type: String, required: true },
  memberfirstname: { type: String, required: false},
  memberlastname: { type: String, required: false },
  advisorfirstname: { type: String,required: false},
  advisorlastname: { type: String ,required: false},
}, {
  timestamps: true,
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;