// medicineSchema.js

const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true
  },
  med_name: {
    type: String,
    required: true
  },
  date_of_arrival: {
    type: Date,
    required: true
  },
  expiry_date: {
    type: Date,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  manufacture_date: {
    type: Date,
    required: true
  },
  supplier_number: {
    type: Number,
    required: true
  }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
