const { gql } = require('apollo-server-express');

module.exports = gql`
<<<<<<< HEAD
  scalar Date

  type Status {
=======
scalar Date

type Status {
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    message: String!
  }

  type Auth {
    token: String!
  }

  type User {
    _id: ID!
    userIsDriver: Boolean!
    onTrip: Boolean
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    driverLocation: [Float]
    createdAt: Date!
    updatedAt: Date!
    driver: ID
  }

  type Driver {
    _id: ID!
    driverModeEnabled: Boolean
    onTrip: Boolean
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type UserLocation {
    _id: ID
    pickupCoordinate: [Float]
    userDestinationCoordinate: [Float]
    driverDestinationCoordinate: [Float]
    userLocationId: ID
    user: User!
    driver: Driver!
  }

  type DriverLocation {
    _id: ID!
    driverCoordinate: [Float]
    driverDestinationCoordinate: [Float]
    userDestinationCoordinate: [Float]
    user: User!
    driver: Driver!
  }

  type Trip {
    _id: ID!
    tripCoordinate: [Float]
    finalTripCoordinate: [Float]
    tripLocationId: ID!
    tripAccepted: Boolean
    tripInProgress: Boolean
    passengerName: String
    userLocation: UserLocation!
    driverLocation: DriverLocation!
    userLocationId: ID!
    userId: ID!
    driver: Driver!
    user: User!
  }

  type CurrentUser {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
<<<<<<< HEAD
    avatar: String
=======
    avatar: String,
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    onTrip: Boolean
    createdAt: Date!
    updatedAt: Date!
  }

  type CurrentDriver {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    getUser(_id: ID!): User
    getUsers: [User]
    getDrivers: [Driver]
    getPassengers: [UserLocation]
    currentUser: CurrentUser
    currentDriver: CurrentDriver
    getTrips: [Trip]
    getTrip: [Trip]
  }

  type Subscription {
    updateLocation(_id: ID!, driverCoordinateForUser: [Float]): DriverLocation
    updateUserWithDriverSub(_id: ID): User
    getPassengersSub(_id: ID): UserLocation
  }

  type Mutation {
<<<<<<< HEAD
    addPickupLocation(
      pickupCoordinate: [Float]
      userDestinationCoordinate: [Float]
    ): UserLocation
    addDriverLocation(
      driverCoordinate: [Float]
      driverDestinationCoordinate: [Float]
    ): DriverLocation
    addUserDestinationLocation(
      _id: ID!
      userDestinationCoordinate: [Float]
    ): UserLocation
    addDriverDestinationLocation(
      _id: ID!
      driverDestinationCoordinate: [Float]
    ): DriverLocation

    updateUserWithDriver(
      _id: ID!
      onTrip: Boolean
      driver: ID
      driverLocation: [Float]
    ): User

    updateDriver(
      _id: ID!
      location: [Float]
      driverModeEnabled: Boolean
      onTrip: Boolean
    ): Driver

    updateUserLocation(
      _id: ID!
      pickupCoordinate: [Float]
      driverDestinationCoordinate: [Float]
      userDestinationCoordinate: [Float]
    ): UserLocation
    updateDriverLocation(
      _id: ID!
      driverCoordinate: [Float]
      driverDestinationCoordinate: [Float]
      userDestinationCoordinate: [Float]
    ): DriverLocation
=======
    addPickupLocation(pickupCoordinate: [Float], userDestinationCoordinate: [Float]): UserLocation
    addDriverLocation(driverCoordinate: [Float], driverDestinationCoordinate: [Float]): DriverLocation
    addUserDestinationLocation(_id: ID!, userDestinationCoordinate: [Float]): UserLocation
    addDriverDestinationLocation(_id: ID!, driverDestinationCoordinate: [Float]): DriverLocation

    updateUserWithDriver(_id: ID!, onTrip: Boolean, driver: ID, driverLocation: [Float]): User

    updateDriver(_id: ID!, location: [Float], driverModeEnabled: Boolean, onTrip: Boolean): Driver

    updateUserLocation(
      _id: ID!,
      pickupCoordinate: [Float],
      driverDestinationCoordinate: [Float],
      userDestinationCoordinate: [Float]): UserLocation
    updateDriverLocation(
      _id: ID!,
      driverCoordinate: [Float],
      driverDestinationCoordinate: [Float],
      userDestinationCoordinate: [Float]): DriverLocation

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

    deletePickupLocation(_id: ID, userLocationId: ID): Status
    deleteDriverLocation(_id: ID!): Status

<<<<<<< HEAD
    createTrip(
      userId: ID!
      userLocationId: ID!
      tripCoordinate: [Float]
      finalTripCoordinate: [Float]
      tripAccepted: Boolean
      tripInProgress: Boolean
      passengerName: String
    ): Trip
=======
    createTrip(userId: ID!, userLocationId: ID!, tripCoordinate: [Float], finalTripCoordinate: [Float], tripAccepted: Boolean, tripInProgress: Boolean, passengerName: String): Trip
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    updateTrip(_id: ID!, tripCoordinate: [Float], tripInProgress: Boolean): Trip
    deleteTrip(_id: ID!): Status

    signup(
<<<<<<< HEAD
      email: String!
      fullname: String!
      password: String!
      avatar: String
      username: String!
      userIsDriver: Boolean!
      onTrip: Boolean
=======
      email: String!,
      fullname: String!,
      password: String!,
      avatar: String,
      username: String!,
      userIsDriver: Boolean!,
      onTrip: Boolean,
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      driverLocation: [Float]
    ): Auth
    login(username: String!, password: String!, userIsDriver: Boolean!): Auth
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;
