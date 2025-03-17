const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true }, // 'Doctor' or 'Nurse'
  specialization: { type: String }, // For doctors
  department: { type: String }, // For nurses
  yearsOfExperience: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 5 }, // For doctors
  isEmergencyDoctor: { type: Boolean, default: false },
  status: { type: String, enum: ['Online', 'Offline', 'On Call'], default: 'Offline' },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // ... other fields ...
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema); 