const Trip = require('../../models/Trip');
const User = require('../../models/User');
const DriverLocation = require('../../models/DriverLocation');
const UserLocation = require('../../models/UserLocation');
const { requireUserAuth, requireDriverAuth } = require('../../services/auth');

module.exports = {
  createTrip: async (_, { tripCoordinate, userId, userLocationId, ...rest }, { driver }) => {
    try {
      await requireDriverAuth(driver);
      const userlocation = await UserLocation.findOne({ _id: userLocationId, user: userId });
      const driverlocation = await DriverLocation.find({ driver: driver._id })
      const driverLocation = driverlocation[0]
      const user =  await User.findById(userId);
      tripCoordinate = userlocation.pickupCoordinate
      finalTripCoordinate = userlocation.userDestinationCoordinate
      return Trip.create({
        tripCoordinate,
        finalTripCoordinate,
        driver: driver._id,
        driverLocation,
        user,
        ...rest
      });
    } catch (error) {
      throw error
    }
  },

  updateTrip: async (_, { _id, ...rest }, { driver }) => {
    try {
      const trip = await Trip.findOne({_id});
      if (!trip) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        trip[key] = value;
      });

      return trip.save();
    } catch (error) {
      throw error
    }
  },
  deleteTrip: async (_, { _id }, { driver }) => {
    try {
      await requireDriverAuth(driver)
      const trip = await Trip.findOne({ _id });

      if (!trip) {
        throw new Error('Not found!');
      }

      await trip.remove();

      return { message: 'Delete Success!' };
    } catch (error) {
      throw error
    }
  },

  getTrip: async (_, args, { user }) => {
    try {
      await requireUserAuth(user);
      return Trip.find({ user: user._id });
    } catch (error) {
      throw error
    }
  },

  getTrips: async (_, args, { driver }) => {
    try {
      await requireDriverAuth(driver);
      return Trip.find({ driver: driver._id });
    } catch (error) {
      throw error
    }
  },
}
