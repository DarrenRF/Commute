const Driver = require('../../models/Driver');
const User = require('../../models/User');
const { requireDriverAuth } = require('../../services/auth');
const { requireUserAuth } = require('../../services/auth');
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

module.exports = {
<<<<<<< HEAD
  getDrivers: async (_, { onTrip, ...rest }, { driver }) => {
    try {
      await requireDriverAuth(driver);
      if (onTrip) {
        return null;
      }
      return Driver.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
=======
  getDrivers: async (_, { onTrip, ...rest}, { driver }) => {
    try {
      await requireDriverAuth(driver)
      if (onTrip) {
        return null;
      }
      return Driver.find({}).sort({ createdAt: -1 })
    } catch (error) {
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
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
<<<<<<< HEAD
    } catch (error) {
      throw error;
=======

    } catch (error) {
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },
  updateUserWithDriver: async (_, { _id, ...rest }, { driver }) => {
    try {
      await requireDriverAuth(driver);
<<<<<<< HEAD
      const user = await User.findOne({ _id });
=======
      const user = await User.findOne({_id});
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      if (!user) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        user[key] = value;
      });

<<<<<<< HEAD
      pubsub.publish('updateUserWithDriverSub', {
        updateUserWithDriverSub: user,
      });

      return user.save();
    } catch (error) {
      throw error;
=======
      pubsub.publish('updateUserWithDriverSub', { updateUserWithDriverSub: user })

      return user.save();

    } catch (error) {
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },

  updateUserWithDriverSub: {
<<<<<<< HEAD
    subscribe: async () => pubsub.asyncIterator(['updateUserWithDriverSub']),
=======
    subscribe: async () => pubsub.asyncIterator(['updateUserWithDriverSub'])
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },

  currentDriver: async (_, args, { driver }) => {
    try {
<<<<<<< HEAD
      const currentDriver = await requireDriverAuth(driver);
      return currentDriver;
    } catch (error) {
      throw error;
    }
  },
  deleteDriver: async (_, { _id }, { driver }) => {
    try {
      await requireDriverAuth(driver);
      const driver = await Driver.findOne({ _id, driver: driver._id });
=======
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
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

      if (!driver) {
        throw new Error('Not found!');
      }

      await driver.remove();

      return { message: 'Delete Success!' };
    } catch (error) {
      throw error;
    }
<<<<<<< HEAD
  },
=======
  }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
};
