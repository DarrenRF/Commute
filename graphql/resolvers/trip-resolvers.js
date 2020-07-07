const Trip = require('../../models/Trip');
const User = require('../../models/User');
const DriverLocation = require('../../models/DriverLocation');
const UserLocation = require('../../models/UserLocation');
const { requireUserAuth, requireDriverAuth } = require('../../services/auth');

module.exports = {
<<<<<<< HEAD
  createTrip: async (
    _,
    { tripCoordinate, userId, userLocationId, ...rest },
    { driver }
  ) => {
    try {
      await requireDriverAuth(driver);
      const userlocation = await UserLocation.findOne({
        _id: userLocationId,
        user: userId,
      });
      const driverlocation = await DriverLocation.find({ driver: driver._id });
      const driverLocation = driverlocation[0];
      const user = await User.findById(userId);
      tripCoordinate = userlocation.pickupCoordinate;
      finalTripCoordinate = userlocation.userDestinationCoordinate;
=======
  createTrip: async (_, { tripCoordinate, userId, userLocationId, ...rest }, { driver }) => {
    try {
      await requireDriverAuth(driver);
      const userlocation = await UserLocation.findOne({ _id: userLocationId, user: userId });
      const driverlocation = await DriverLocation.find({ driver: driver._id })
      const driverLocation = driverlocation[0]
      const user =  await User.findById(userId);
      tripCoordinate = userlocation.pickupCoordinate
      finalTripCoordinate = userlocation.userDestinationCoordinate
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      return Trip.create({
        tripCoordinate,
        finalTripCoordinate,
        driver: driver._id,
        driverLocation,
        user,
<<<<<<< HEAD
        ...rest,
      });
    } catch (error) {
      throw error;
=======
        ...rest
      });
    } catch (error) {
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },

  updateTrip: async (_, { _id, ...rest }, { driver }) => {
    try {
<<<<<<< HEAD
      const trip = await Trip.findOne({ _id });
=======
      const trip = await Trip.findOne({_id});
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      if (!trip) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        trip[key] = value;
      });

      return trip.save();
    } catch (error) {
<<<<<<< HEAD
      throw error;
=======
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },
  deleteTrip: async (_, { _id }, { driver }) => {
    try {
<<<<<<< HEAD
      await requireDriverAuth(driver);
=======
      await requireDriverAuth(driver)
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      const trip = await Trip.findOne({ _id });

      if (!trip) {
        throw new Error('Not found!');
      }

      await trip.remove();

      return { message: 'Delete Success!' };
    } catch (error) {
<<<<<<< HEAD
      throw error;
=======
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },

  getTrip: async (_, args, { user }) => {
    try {
      await requireUserAuth(user);
      return Trip.find({ user: user._id });
    } catch (error) {
<<<<<<< HEAD
      throw error;
=======
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },

  getTrips: async (_, args, { driver }) => {
    try {
      await requireDriverAuth(driver);
      return Trip.find({ driver: driver._id });
    } catch (error) {
<<<<<<< HEAD
      throw error;
    }
  },
};
=======
      throw error
    }
  },
}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
