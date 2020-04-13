import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useApolloClient, useMutation, useQuery, useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const SearchButton = ({ searching, startSearching, stopSearching, pickupLocation, destinationLocation, getCurrentUser, currentUser, onTrip }) => {

  const ADD_PiCKUP = gql`
    mutation addPickupLocation($pickupCoordinate: [Float], $userDestinationCoordinate: [Float]) {
      addPickupLocation(pickupCoordinate: $pickupCoordinate, userDestinationCoordinate: $userDestinationCoordinate) {
        _id
        pickupCoordinate
        userDestinationCoordinate
      }
    }
  `;

  const [addPickupLocation, { data }] = useMutation(
    ADD_PiCKUP,
    {
      onCompleted({ addPickupLocation }) {
        if (pickupLocation && destinationLocation) {
          startSearching();
          getCurrentUser();
        }
      },
    }
  );

  const DELETE_PiCKUP = gql`
    mutation deletePickupLocation($_id: ID!) {
      deletePickupLocation(_id: $_id) {
        message
      }
    }
  `;

  const [deletePickupLocation, props ] = useMutation(
    DELETE_PiCKUP,
    {
      onCompleted({ deletePickupLocation }) {
        stopSearching();
      }
    }
  );

  return (
    <>
      {searching && !onTrip
       ? <Button
            title="Stop"
            buttonStyle={{ backgroundColor: "#ff0000"}}
            onPress={() => deletePickupLocation({
              variables: { _id: data.addPickupLocation._id }
            })}
          />
        : null}
        {!searching && !onTrip ? <Button
             title="Find a Driver"
             onPress={() => addPickupLocation({
               variables: {
                 pickupCoordinate: [pickupLocation.latitude, pickupLocation.longitude],
                 userDestinationCoordinate: [destinationLocation.latitude, destinationLocation.longitude]
               }
             })}
           /> : null}
        {onTrip && searching ? <Button
             title="Driver Is Coming"
             buttonStyle={{ backgroundColor: "#FFA500"}} /> : null}
    </>
  );
}

export default SearchButton;
