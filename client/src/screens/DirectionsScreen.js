<<<<<<< HEAD
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
=======
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Linking } from 'expo';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import Spacer from '../components/Spacer';

const DirectionsScreen = ({ navigation }) => {
  const tripId = navigation.getParam('tripId');
  const { latitude, longitude } = navigation.getParam('tripCoordinates');
  const { flatitude, flongitude } = navigation.getParam('finalTripCoordinate');
<<<<<<< HEAD
=======
  const tripInProgress = navigation.getParam('tripInProgress');
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  const [onTrip, setOnTrip] = useState(false);
  const [onfTrip, setfOnTrip] = useState(false);

  const UPDATE_TRIP = gql`
<<<<<<< HEAD
    mutation updateTrip(
      $_id: ID!
      $tripInProgress: Boolean
      $tripCoordinate: [Float]
    ) {
      updateTrip(
        _id: $_id
        tripInProgress: $tripInProgress
        tripCoordinate: $tripCoordinate
      ) {
=======
    mutation updateTrip($_id: ID!, $tripInProgress: Boolean, $tripCoordinate: [Float]) {
      updateTrip(_id: $_id, tripInProgress: $tripInProgress, tripCoordinate: $tripCoordinate) {
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
        _id
        tripInProgress
        tripCoordinate
      }
    }
  `;

  const DELETE_TRIP = gql`
    mutation deleteTrip($_id: ID!) {
      deleteTrip(_id: $_id) {
        message
      }
    }
  `;

<<<<<<< HEAD
  const [updateTrip, props] = useMutation(UPDATE_TRIP, {
    onCompleted({ updateTrip }) {},
  });

  const [deleteTrip, props1] = useMutation(DELETE_TRIP, {
    onCompleted({ deleteTrip }) {
      setOnTrip(false), setfOnTrip(false), navigation.navigate('List');
    },
  });

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      {onTrip && !onfTrip ? (
        <Button
          title="Get Directions To User"
          onPress={() => {
            return (
              Linking.openURL(
                `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
              ),
              updateTrip({ variables: { _id: tripId, tripInProgress: onTrip } })
            );
          }}
        />
      ) : null}

      <Spacer />

      {!onTrip && onfTrip ? (
        <Button
          title="Get Directions To Destination"
          onPress={() => {
            return (
              Linking.openURL(
                `https://www.google.com/maps/search/?api=1&query=${flatitude},${flongitude}`
              ),
              updateTrip({ variables: { _id: tripId, tripInProgress: onTrip } })
            );
          }}
        />
      ) : null}

      {!onfTrip && onTrip ? (
        <Button
          title="Complete Pickup"
          onPress={() => {
            return setOnTrip(false), setfOnTrip(true);
          }}
        />
      ) : null}

      <Spacer />

      {!onTrip && !onfTrip ? (
        <Button title="Start Trip" onPress={() => setOnTrip(true)} />
      ) : null}

      {onTrip && !onfTrip ? (
        <Button
          title="Cancel Trip"
          buttonStyle={{ backgroundColor: '#ff0000' }}
          onPress={() => {
            return deleteTrip({ variables: { _id: tripId } });
          }}
        />
      ) : null}

      {!onTrip && onfTrip ? (
        <Button
          title="Drop Off"
          buttonStyle={{ backgroundColor: '#32CD32' }}
          onPress={() => {
            return deleteTrip({ variables: { _id: tripId } });
          }}
        />
      ) : null}
=======
  const [updateTrip, props] = useMutation(
    UPDATE_TRIP, {
      onCompleted({ updateTrip }) {}
    });

    const [deleteTrip, props1] = useMutation(
      DELETE_TRIP, {
        onCompleted({ deleteTrip }) {
          setOnTrip(false),
          setfOnTrip(false),
          navigation.navigate('List')
        }
      });

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      {onTrip && !onfTrip ? <Button
        title="Get Directions To User"
        onPress={() => {
          return (
            Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`),
            updateTrip({variables: { _id: tripId, tripInProgress: onTrip }})
          )
        }}
        />
      : null }

      <Spacer />

      {!onTrip && onfTrip ? <Button
        title="Get Directions To Destination"
        onPress={() => {
          return (
            Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${flatitude},${flongitude}`),
            updateTrip({variables: { _id: tripId, tripInProgress: onTrip }})
          )
        }}
        />
      : null }

      {!onfTrip && onTrip ? <Button
        title="Complete Pickup"
        onPress={() => {
          return (
            setOnTrip(false),
            setfOnTrip(true)
          )}} />
      : null }

      <Spacer />

      {!onTrip && !onfTrip ? <Button title="Start Trip" onPress={() => setOnTrip(true)} /> : null}

      {onTrip && !onfTrip ? <Button title="Cancel Trip" buttonStyle={{ backgroundColor: "#ff0000"}} onPress={() => {
        return (
          deleteTrip({variables: { _id: tripId }})
        )}} /> : null}

        {!onTrip && onfTrip ? <Button title="Drop Off" buttonStyle={{ backgroundColor: "#32CD32"}} onPress={() => {
          return (
            deleteTrip({variables: { _id: tripId }})
          )}} /> : null}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default DirectionsScreen;
