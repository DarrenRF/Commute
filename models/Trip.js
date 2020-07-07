const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  type: {
    type: String,
<<<<<<< HEAD
    default: 'Point',
  },
  tripCoordinate: {
    type: [Number],
  },
  finalTripCoordinate: {
    type: [Number],
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  driverLocation: {
    type: Schema.Types.ObjectId,
    ref: 'DriverLocation',
  },
  passengerName: String,
  tripAccepted: {
    type: Boolean,
  },
  tripInProgress: {
    type: Boolean,
=======
    default: 'Point'
  },
  tripCoordinate: {
    type: [Number]
  },
  finalTripCoordinate:{
    type: [Number]
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  driverLocation: {
    type: Schema.Types.ObjectId,
    ref: 'DriverLocation'
  },
  passengerName: String,
  tripAccepted: {
    type: Boolean
  },
  tripInProgress: {
    type: Boolean
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
