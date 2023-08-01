const mongoose = require("mongoose");

// Define the employer schema
const employerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyLocation: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
