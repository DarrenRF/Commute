const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID
const faker = require('faker');
const User = require('../models/User');
const Driver = require('../models/Driver');
const Trip = require('../models/Trip');
const DriverLocation = require('../models/DriverLocation');
const UserLocation = require('../models/UserLocation');

const USERS_TOTAL = 5;
const DRIVERS_TOTAL = 5;
const LOCATIONS_TOTAL = 1;

module.exports = async () => {
  var id = new ObjectId("5e4eebf4f1fe917590e2e911");
  try {
    await User.deleteMany();
    await Driver.deleteMany();
    await DriverLocation.deleteMany();
    await UserLocation.deleteMany();
    await Trip.deleteMany();

    await Array.from({ length: USERS_TOTAL }).forEach(async (_, i) => {
      const user = await User.create({
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        password: 'password',
        onTrip: false,
        driver: id
      })
      await Array.from({ length: LOCATIONS_TOTAL }).forEach(
        async () => await UserLocation.create({
          user: user,
          pickupCoordinate: [
            faker.address.latitude(),
            faker.address.longitude()
          ],
          userDestinationCoordinate: [
            faker.address.latitude(),
            faker.address.longitude()
          ],
        })
      )
    });

    await Array.from({ length: DRIVERS_TOTAL }).forEach(async (_, i) => {
      const driver = await Driver.create({
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
        password: 'password',
        driverModeEnabled: false,
        onTrip: false
      })
      await Array.from({ length: LOCATIONS_TOTAL }).forEach(
        async () => await DriverLocation.create({
          driver: driver,
          driverCoordinate: [
            faker.address.latitude(),
            faker.address.longitude()
          ],
        })
      )
    });
  } catch (error) {
    throw error;
  }
};
