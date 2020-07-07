<<<<<<< HEAD
import React from 'react';
import { Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
=======
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Linking } from 'expo';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ListScreen = ({ navigation }) => {
<<<<<<< HEAD
  const passengers = [
    {
      tripCoordinate: { latitude: 0, longitude: 0 },
      finalTripCoordinate: { flatitude: 0, flongitude: 0 },
      _id: '',
      userId: '',
      passengerName: '',
      tripInProgress: false,
      tripAccepted: false,
    },
  ];
  passengers.shift();
=======
  const passengers = [{
    tripCoordinate:{latitude: 0, longitude: 0},
    finalTripCoordinate:{flatitude: 0, flongitude: 0},
    _id: "",
    userId: "",
    passengerName: "",
    tripInProgress: false,
    tripAccepted: false
  }]
  passengers.shift()
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

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

  const GET_TRIPS = gql`
    {
      getTrips {
        _id
        user {
          _id
        }
        driver {
          _id
        }
        tripCoordinate
        finalTripCoordinate
        passengerName
        tripInProgress
        tripAccepted
      }
    }
  `;

  const { loading, data, refetch } = useQuery(GET_TRIPS);

  if (data) {
<<<<<<< HEAD
    data.getTrips.map((r) =>
      passengers.push({
        _id: r._id,
        tripCoordinate: {
          latitude: r.tripCoordinate[0],
          longitude: r.tripCoordinate[1],
        },
        finalTripCoordinate: {
          flatitude: r.finalTripCoordinate[0],
          flongitude: r.finalTripCoordinate[1],
        },
        userId: r.user._id,
        passengerName: r.passengerName,
        tripInProgress: r.tripInProgress,
        tripAccepted: r.tripAccepted,
      })
    );
=======
    data.getTrips.map(r => passengers.push({
      _id: r._id,
      tripCoordinate:{
        latitude: r.tripCoordinate[0],
        longitude: r.tripCoordinate[1]
      },
      finalTripCoordinate: {
        flatitude: r.finalTripCoordinate[0],
        flongitude: r.finalTripCoordinate[1]
      },
      userId: r.user._id,
      passengerName: r.passengerName,
      tripInProgress: r.tripInProgress,
      tripAccepted: r.tripAccepted
    }));
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  }

  return (
    <>
<<<<<<< HEAD
      <NavigationEvents onWillFocus={refetch} />
      {!passengers ? (
        <Text>No passengers yet</Text>
      ) : (
        <ScrollView>
          <FlatList
            data={passengers}
            keyExtractor={(result) => result._id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Directions', {
                      tripId: item._id,
                      tripCoordinates: item.tripCoordinate,
                      finalTripCoordinate: item.finalTripCoordinate,
                      userId: item.userId,
                      tripInProgress: item.tripInProgress,
                      refetch,
                    })
                  }
                >
                  <ListItem
                    chevron
                    topDivider
                    bottomDivider
                    title={item.passengerName}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      )}
=======
      <NavigationEvents
        onWillFocus={refetch}
      />
    {!passengers ?
      <Text>No passengers yet</Text> :
      <ScrollView>
        <FlatList
          data={passengers}
          keyExtractor={(result) => result._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Directions', {
                  tripId: item._id,
                  tripCoordinates: item.tripCoordinate,
                  finalTripCoordinate: item.finalTripCoordinate,
                  userId: item.userId,
                  tripInProgress: item.tripInProgress,
                  refetch
                })}>
                <ListItem
                  chevron
                  topDivider
                  bottomDivider
                  title={item.passengerName}
               />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    </>
  );
};

export default ListScreen;
