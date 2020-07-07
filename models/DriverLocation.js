const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pointSchema = new Schema({
  type: {
    type: String,
<<<<<<< HEAD
    default: 'Point',
  },
  driverCoordinate: {
    type: [Number],
  },
  driverDestinationCoordinate: {
    type: [Number],
  },
  userDestinationCoordinate: {
    type: [Number],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver',
  },
=======
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
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

const DriverLocation = mongoose.model('DriverLocation', pointSchema);

module.exports = DriverLocation;
