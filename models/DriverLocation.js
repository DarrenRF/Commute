const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pointSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  driverCoordinate: {
    type: [Number]
  },
  driverDestinationCoordinate: {
    type: [Number]
  },
  userDestinationCoordinate: {
    type: [Number]
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver'
  }
});

const DriverLocation = mongoose.model('DriverLocation', pointSchema);

module.exports = DriverLocation;
