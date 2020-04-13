import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Avatar  } from 'react-native-elements';
import Spacer from '../components/Spacer';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as LocationContext } from '../context/LocationContext';

const ProfileModalScreen = ({ navigation }) => {
  const _userId = navigation.getParam('userId');
  const _userLocationId = navigation.getParam('userLocationId');

  const userId = _userId.toString()
  const userLocationId = _userLocationId.toString()

  const { state: { currentDriver }, getCurrentDriver } = useContext(AuthContext);
  const { state: { currentLocation } } = useContext(LocationContext);

  const [onTrip, setOnTrip] = useState(false);

  const GET_USER = gql`
    query getUser($_id: ID!) {
      getUser(_id: $_id) {
        username
        email
        firstName
        lastName
        avatar
        onTrip
      }
    }
  `;

  console.log(currentLocation.coords.latitude);

  const { loading, data, refetch } = useQuery(GET_USER, {
    variables: { _id: userId },
  });

  const CREATE_TRIP = gql`
    mutation createTrip($userLocationId: ID!, $userId: ID!, $passengerName: String, $tripInProgress: Boolean, $tripAccepted: Boolean) {
      createTrip(userLocationId: $userLocationId, userId: $userId, passengerName: $passengerName, tripInProgress: $tripInProgress, tripAccepted: $tripAccepted) {
        _id,
        passengerName,
        tripInProgress,
        tripAccepted
      }
    }
  `;


  const UPDATE_USER = gql`
    mutation updateUserWithDriver($_id: ID!, $onTrip: Boolean, $driverLocation: [Float]) {
      updateUserWithDriver(_id: $_id, onTrip: $onTrip, driverLocation: $driverLocation) {
        _id
        onTrip
        driverLocation
      }
    }
  `;

  const DELETE_PICKUP = gql`
    mutation deletePickupLocation($userLocationId: ID!) {
      deletePickupLocation(userLocationId: $userLocationId) {
        message
      }
    }
  `;

  const [deletePickupLocation, dprops] = useMutation(
    DELETE_PICKUP, {
      onCompleted({ deletePickupLocation }) {}
    });

  const [createTrip, cprops] = useMutation(
    CREATE_TRIP, {
      onCompleted({ createTrip }) {
        navigation.navigate('List', { firstName: data.getUser.firstName })
        deletePickupLocation({ variables: { userLocationId } })
      }
    });

  const [updateUserWithDriver, uprops] = useMutation(
    UPDATE_USER, {
      onCompleted({ updateUserWithDriver }) {
        createTrip({ variables: { userId, userLocationId, tripAccepted: onTrip, tripInProgress: false, passengerName: data.getUser.firstName } })
      }
    });

    useEffect(() => {
      if (data) {
        getCurrentDriver()
        setOnTrip(data.getUser.onTrip);
        refetch()
      }
    }, [data])


  return (
    <>
    <Spacer>
      {!onTrip ?
        <Button title="Pickup" onPress={() => setOnTrip(true)} />
        : <Button
          title="Confirm Pickup"
          onPress={() => updateUserWithDriver({variables: { _id: userId, onTrip, driverLocation: [currentLocation.coords.latitude, currentLocation.coords.longitude] }})}
          />}

      <Button
        title="Back To Map"
        onPress={() => navigation.navigate('Driver')}
      />
    </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default ProfileModalScreen;
