const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  staffStrength: { type: Number, required: true },
  contactName: { type: String, required: true },
  cacStatus: { type: String, required: true },
  contactPhoneNumber: { type: String, required: true },
  contactEmail: { type: String, required: true },
  businessName: { type: String, required: true },
  contactAddress: { type: String, required: true },
  city: { type: String, required: true },
  websiteURL: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
