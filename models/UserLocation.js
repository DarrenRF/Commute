const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pointSchema = new Schema({
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
});

const UserLocation = mongoose.model('UserLocation', pointSchema);

module.exports = UserLocation;
