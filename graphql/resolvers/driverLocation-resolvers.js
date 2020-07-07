const DriverLocation = require('../../models/DriverLocation');
const UserLocation = require('../../models/UserLocation');
const { requireUserAuth, requireDriverAuth } = require('../../services/auth');
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

module.exports = {
  addDriverLocation: async (_, args, { driver }) => {
    try {
<<<<<<< HEAD
      await requireDriverAuth(driver);
      return DriverLocation.create({ ...args, driver: driver._id });
    } catch (error) {
      throw error;
=======
      await requireDriverAuth(driver)
      return DriverLocation.create({ ...args, driver: driver._id });
    } catch (error) {
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },

  getPassengers: async (_, { location }, { driver }) => {
    try {
<<<<<<< HEAD
      await requireDriverAuth(driver);
      const passengers = UserLocation.find({});
      pubsub.publish('getPassengersSub', { getPassengersSub: passengers });
      return passengers;
    } catch (error) {
      throw error;
=======
      await requireDriverAuth(driver)
      const passengers = UserLocation.find({})
      pubsub.publish('getPassengersSub', { getPassengersSub: passengers })
      return passengers;
    } catch (error) {
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },

  getPassengersSub: {
<<<<<<< HEAD
    subscribe: async () => pubsub.asyncIterator(['getPassengersSub']),
  },

  updateDriverLocation: async (_, { _id, ...rest }, { driver }) => {
    try {
      await requireDriverAuth(driver);
      const updatedLocation = await DriverLocation.findOne({
        _id,
        driver: driver._id,
      });
=======
    subscribe: async () => pubsub.asyncIterator(['getPassengersSub'])
  },


  updateDriverLocation: async (_, { _id, ...rest }, { driver }) => {
    try {
      await requireDriverAuth(driver);
      const updatedLocation = await DriverLocation.findOne({_id, driver: driver._id});
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

      if (!updatedLocation) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        updatedLocation[key] = value;
      });

<<<<<<< HEAD
      pubsub.publish('updateLocation', { updateLocation: updatedLocation });
    } catch (error) {
      throw error;
=======
      pubsub.publish('updateLocation', { updateLocation: updatedLocation })

    } catch (error) {
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },

  updateLocation: {
<<<<<<< HEAD
    subscribe: async () => pubsub.asyncIterator(['updateLocation']),
  },

  deleteDriverLocation: async (_, { _id }, { driver }) => {
    try {
      await requireDriverAuth(driver);
      const driverLocation = DriverLocation.findOne({
        _id,
        driver: driver._id,
      });
=======
    subscribe: async () => pubsub.asyncIterator(['updateLocation'])
  },


  deleteDriverLocation: async (_, { _id }, { driver }) => {
    try {
      await requireDriverAuth(driver)
      const driverLocation = DriverLocation.findOne({ _id, driver: driver._id });
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      if (!driverLocation) {
        throw new Error('Not found!');
      }

      await driverLocation.deleteMany();

      return { message: 'Delete Success!' };
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
