const UserResolvers = require('./user-resolvers');
const TripResolvers = require('./trip-resolvers');
const DriverResolvers = require('./driver-resolvers');
const DriverLocationResolvers = require('./driverLocation-resolvers');
const UserLocationResolvers = require('./userLocation-resolvers');
const User = require('../../models/User');
const Driver = require('../../models/Driver');
const DriverLocation = require('../../models/DriverLocation');
const UserLocation = require('../../models/UserLocation');
const GraphQLDate = require('graphql-date');

module.exports = {
  Date: GraphQLDate,

  Trip: {
    user: ({ user }) => User.findById(user),
    driver: ({ driver }) => Driver.findById(driver),
  },

  UserLocation: {
    user: ({ user }) => User.findById(user),
    driver: ({ driver }) => Driver.findById(driver)
  },

  DriverLocation: {
    user: ({ user }) => User.findById(user),
    driver: ({ driver }) => Driver.findById(driver)
  },

  Query: {
    getUser: UserResolvers.getUser,
    getUsers: UserResolvers.getUsers,
    getDrivers: DriverResolvers.getDrivers,
    getPassengers: DriverLocationResolvers.getPassengers,
    currentUser: UserResolvers.currentUser,
    currentDriver: DriverResolvers.currentDriver,
    getTrips: TripResolvers.getTrips,
    getTrip: TripResolvers.getTrip,
  },
  Subscription: {
    updateLocation: DriverLocationResolvers.updateLocation,
    updateUserWithDriverSub: DriverResolvers.updateUserWithDriverSub,
    getPassengersSub: DriverLocationResolvers.getPassengersSub
  },
  Mutation: {
    addPickupLocation: UserLocationResolvers.addPickupLocation,
    addDriverLocation: DriverLocationResolvers.addDriverLocation,
    updateUserWithDriver: DriverResolvers.updateUserWithDriver,
    updateUserLocation: UserLocationResolvers.updateUserLocation,
    updateDriverLocation: DriverLocationResolvers.updateDriverLocation,
    deletePickupLocation: UserLocationResolvers.deletePickupLocation,
    deleteDriverLocation: DriverLocationResolvers.deleteDriverLocation,
    updateDriver: DriverResolvers.updateDriver,
    createTrip: TripResolvers.createTrip,
    updateTrip: TripResolvers.updateTrip,
    deleteTrip: TripResolvers.deleteTrip,
    signup: UserResolvers.signup,
    login: UserResolvers.login,
  }
}
