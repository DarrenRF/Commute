const User = require('../../models/User');
const Driver = require('../../models/Driver');
const { requireUserAuth } = require('../../services/auth');
const jwt = require('jsonwebtoken');

module.exports = {
  signup: async (_, { fullname, userIsDriver, ...rest }) => {

    try {
      const [firstName, lastName] = fullname.split(' ');
      if (!userIsDriver) {
        const user = await User.create({
          firstName,
          lastName,
          ...rest
        });
        return { token: user.createToken() };
      } else {
        const driver = await Driver.create({
          firstName,
          lastName,
          ...rest
        });
        return { token: driver.createToken() };
      }
    } catch (error) {
      throw error;
    }
  },

  login: async (_, { username, password, userIsDriver }) => {
    try {
      if (!userIsDriver) {
      const user = await User.findOne({ username });

      if (!user) {
        throw new Error('User does not exist!')
      }

      if (!user.authenticateUser(password)) {
        throw new Error('password does not match!')
      }
      return { token: user.createToken() };


    } else {
      const driver = await Driver.findOne({ username });

      if (!driver) {
        throw new Error('Driver does not exist!')
      }

      if (!driver.authenticateDriver(password)) {
        throw new Error('password does not match!')
      }
      return { token: driver.createToken() };
    }
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (_, { _id, ...rest }, { user }) => {
    try {
      const currentUser = await requireUserAuth(user);

      if (!currentUser) {
        throw new Error('Not found!');
      }

      Object.entries(rest).forEach(([key, value]) => {
        currentUser[key] = value;
      });

      return currentUser.save();

    } catch (error) {
      throw error
    }
  },
  currentUser: async (_, args, { user }) => {
    try {
      const currentUser = await requireUserAuth(user)
      return currentUser;
    } catch (error) {
      throw error
    }
  },
  getUser: (_, { _id }) => User.findById(_id),
  getUsers: async (_, args, { user }) => {
    try {
      return User.find({}).sort({ createdAt: -1 })
    } catch (error) {
      throw error
    }
  },

}
