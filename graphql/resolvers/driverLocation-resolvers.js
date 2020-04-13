const DriverLocation = require('../../models/DriverLocation');
const UserLocation = require('../../models/UserLocation');
const { requireUserAuth, requireDriverAuth } = require('../../services/auth');
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

module.exports = {
  addDriverLocation: async (_, args, { driver }) => {
    try {
      await requireDriverAuth(driver)
      return DriverLocation.create({ ...args, driver: driver._id });
    } catch (error) {
      throw error
    }
  },

  getPassengers: async (_, { location }, { driver }) => {
    try {
      await requireDriverAuth(driver)
      const passengers = UserLocation.find({})
      pubsub.publish('getPassengersSub', { getPassengersSub: passengers })
      return passengers;
    } catch (error) {
      throw error
    }
  },

  getPassengersSub: {
    subscribe: async () => pubsub.asyncIterator(['getPassengersSub'])
  },


  updateDriverLocation: async (_, { _id, ...rest }, { driver }) => {
    try {
      await requireDriverAuth(driver);
      const updatedLocation = await DriverLocation.findOne({_id, driver: driver._id});

      if (!updatedLocation) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        updatedLocation[key] = value;
      });

      pubsub.publish('updateLocation', { updateLocation: updatedLocation })

    } catch (error) {
      throw error
    }
  },

  updateLocation: {
    subscribe: async () => pubsub.asyncIterator(['updateLocation'])
  },


  deleteDriverLocation: async (_, { _id }, { driver }) => {
    try {
      await requireDriverAuth(driver)
      const driverLocation = DriverLocation.findOne({ _id, driver: driver._id });
      if (!driverLocation) {
        throw new Error('Not found!');
      }

      await driverLocation.deleteMany();

      return { message: 'Delete Success!' };
    } catch (error) {
      throw error
    }
  },
}
