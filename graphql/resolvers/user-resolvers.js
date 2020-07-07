const User = require('../../models/User');
const Driver = require('../../models/Driver');
const { requireUserAuth } = require('../../services/auth');
const jwt = require('jsonwebtoken');

module.exports = {
  signup: async (_, { fullname, userIsDriver, ...rest }) => {
<<<<<<< HEAD
=======

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    try {
      const [firstName, lastName] = fullname.split(' ');
      if (!userIsDriver) {
        const user = await User.create({
          firstName,
          lastName,
<<<<<<< HEAD
          ...rest,
=======
          ...rest
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
        });
        return { token: user.createToken() };
      } else {
        const driver = await Driver.create({
          firstName,
          lastName,
<<<<<<< HEAD
          ...rest,
=======
          ...rest
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
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
<<<<<<< HEAD
        const user = await User.findOne({ username });

        if (!user) {
          throw new Error('User does not exist!');
        }

        if (!user.authenticateUser(password)) {
          throw new Error('password does not match!');
        }
        return { token: user.createToken() };
      } else {
        const driver = await Driver.findOne({ username });

        if (!driver) {
          throw new Error('Driver does not exist!');
        }

        if (!driver.authenticateDriver(password)) {
          throw new Error('password does not match!');
        }
        return { token: driver.createToken() };
      }
=======
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
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
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
<<<<<<< HEAD
    } catch (error) {
      throw error;
=======

    } catch (error) {
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },
  currentUser: async (_, args, { user }) => {
    try {
<<<<<<< HEAD
      const currentUser = await requireUserAuth(user);
      return currentUser;
    } catch (error) {
      throw error;
=======
      const currentUser = await requireUserAuth(user)
      return currentUser;
    } catch (error) {
      throw error
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    }
  },
  getUser: (_, { _id }) => User.findById(_id),
  getUsers: async (_, args, { user }) => {
    try {
<<<<<<< HEAD
      return User.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },
};
=======
      return User.find({}).sort({ createdAt: -1 })
    } catch (error) {
      throw error
    }
  },

}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
