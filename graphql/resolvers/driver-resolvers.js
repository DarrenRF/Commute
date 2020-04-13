const Driver = require('../../models/Driver');
const User = require('../../models/User');
const { requireDriverAuth } = require('../../services/auth');
const { requireUserAuth } = require('../../services/auth');
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

module.exports = {
  getDrivers: async (_, { onTrip, ...rest}, { driver }) => {
    try {
      await requireDriverAuth(driver)
      if (onTrip) {
        return null;
      }
      return Driver.find({}).sort({ createdAt: -1 })
    } catch (error) {
      throw error
    }
  },

  updateDriver: async (_, { _id, ...rest }, { driver }) => {
    try {
      const currentDriver = await requireDriverAuth(driver);

      if (!currentDriver) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        currentDriver[key] = value;
      });

      return currentDriver.save();

    } catch (error) {
      throw error
    }
  },
  updateUserWithDriver: async (_, { _id, ...rest }, { driver }) => {
    try {
      await requireDriverAuth(driver);
      const user = await User.findOne({_id});
      if (!user) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        user[key] = value;
      });

      pubsub.publish('updateUserWithDriverSub', { updateUserWithDriverSub: user })

      return user.save();

    } catch (error) {
      throw error
    }
  },

  updateUserWithDriverSub: {
    subscribe: async () => pubsub.asyncIterator(['updateUserWithDriverSub'])
  },

  currentDriver: async (_, args, { driver }) => {
    try {
      const currentDriver = await requireDriverAuth(driver)
      return currentDriver;
    } catch (error) {
      throw error
    }
  },
  deleteDriver: async(_, { _id }, { driver }) => {
    try {
      await requireDriverAuth(driver)
      const driver = await Driver.findOne({_id, driver: driver._id});

      if (!driver) {
        throw new Error('Not found!');
      }

      await driver.remove();

      return { message: 'Delete Success!' };
    } catch (error) {
      throw error;
    }
  }
};
