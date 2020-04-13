const User = require('../../models/User');
const UserLocation = require('../../models/UserLocation');
const { requireUserAuth, requireDriverAuth } = require('../../services/auth');
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

module.exports = {
  addPickupLocation: async (_, args, { user }) => {
    try {
      await requireUserAuth(user)
      return UserLocation.create({ ...args, user: user._id });
    } catch (error) {
      throw error
    }
  },

  updateUserLocation: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireUserAuth(user);
      const updatedLocation = await UserLocation.findOne({_id, user: user._id});

      if (!updatedLocation) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        updatedLocation[key] = value;
      });

      return updatedLocation.save();
    } catch (error) {
      throw error
    }
  },

  deletePickupLocation: async (_, { _id, userLocationId }, { user }) => {
    try {
      const userLocationForDriver = await UserLocation.findById(userLocationId);
      const userLocation = UserLocation.findOne({ _id, user: user._id });
      if (!userLocation || !user) {
        throw new Error('Not found!');
      }

      if (userLocation) {
        await userLocation.deleteMany();
      }

      if (userLocationForDriver) {
        await userLocationForDriver.deleteOne();
      }

      return { message: 'Delete Success!' };
    } catch (error) {
      throw error
    }
  },
}
