const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pointSchema = new Schema({
<<<<<<< HEAD
  type: {
    type: String,
    default: 'Point',
  },
  pickupCoordinate: {
    type: [Number],
  },
  userDestinationCoordinate: {
    type: [Number],
  },
  driverDestinationCoordinate: {
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
    type: {
      type: String,
      default: 'Point'
    },
    pickupCoordinate: {
      type: [Number]
    },
    userDestinationCoordinate: {
      type: [Number]
    },
    driverDestinationCoordinate: {
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

const UserLocation = mongoose.model('UserLocation', pointSchema);

module.exports = UserLocation;
