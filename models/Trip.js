const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  type: {
    type: String,
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
  },
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
