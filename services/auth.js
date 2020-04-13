const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Driver = require('../models/Driver');

exports.requireUserAuth = async function (user) {
  if (!user || !user._id) {
    throw new Error('You are not an authorized user');
  }

  const currentUser = await User.findById(user._id);

  if (!currentUser) {
    throw new Error('You are not the current user')
  }

  return currentUser;
}

exports.requireDriverAuth = async function (driver) {
  if (!driver || !driver._id) {
    throw new Error('You are not an authorized driver');
  }

  const currentDriver = await Driver.findById(driver._id);

  if (!currentDriver) {
    throw new Error('You are not the current driver')
  }

  return currentDriver;
}

exports.decodeToken = function (token) {
  const arr = token.split(' ');

  if (arr[0] === 'Bearer') {
    return jwt.verify(arr[1], 'SECRET');
  }

  throw new Error('Token not valid');
};
