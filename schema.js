
//new schema
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  },
  contactNumber: {
    type: String
  }
});

module.exports.User= mongoose.model('User', userSchema);

const vehicleSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  vin: {
    type: String,
    required: true,
    unique: true
  },
  licensePlate: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports.Vehicle = mongoose.model('Vehicle', vehicleSchema);


const serviceSchema = new mongoose.Schema({
  vehicle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: true
  },
  serviceType: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  serviceDate: {
    type: Date,
    required: true
  },
  mileage: {
    type: Number
  },
  status: {
    type: String,
    enum: ['scheduled', 'in progress', 'completed'],
    default: 'scheduled'
  },
  estimatedCompletionDate: {
    type: Date
  },
  partsUsed: [{
    name: String,
    quantity: Number,
    price: Number
  }],
  laborHours: {
    type: Number
  },
  totalCost: {
    type: Number
  }
});

module.exports.Service = mongoose.model('Service', serviceSchema);







