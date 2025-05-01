const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: String,
  roll: String,
  email: String,
  phone: String,
  department: String,
  about: String,
  image: String
});

module.exports = mongoose.model('Member', MemberSchema);
