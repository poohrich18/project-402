const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projinfoSchema = new Schema({
 // id: { type: Number, required: true,minlenght: 1,maxlenght: 10 ,unique: true},
  projnamethai: { type: String, required: true },
  projnameeng: { type: String, required: true },
  member1firstname: { type: String, required: true},
  member1lastname: { type: String, required: true },
  id1: { type: Number, required: true,minlenght: 1,maxlenght: 10 },
  semester1: { type: String, required: false},
  member2firstname: { type: String, required: false},
  member2lastname: { type: String, required: false },
  id2: { type: Number, required: true,minlenght: 1,maxlenght: 10 },
  semester2: { type: String, required: false},
  advisor: { type: String,required: true},
  
}, {
  timestamps: true,
});

const Projinfo = mongoose.model('Projinfo', projinfoSchema);

module.exports = Projinfo;