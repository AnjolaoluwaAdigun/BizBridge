const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactPerson: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  website: { type: String, required: true },
  cacStatus: { type: String, required: true }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
