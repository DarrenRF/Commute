<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
=======
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import { SafeAreaView } from 'react-navigation';

import Spacer from '../components/Spacer';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import SearchBar from '../components/SearchBar2';
import { Context as PlacesContext } from '../context/PlacesContext';
import { Context as LocationContext } from '../context/LocationContext';

const PickupModalScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
<<<<<<< HEAD
  const {
    state: { searchResults },
    searchApi,
  } = useContext(PlacesContext);
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
=======
  const { state: { searchResults }, searchApi } = useContext(PlacesContext);
  const { state: { currentLocation } } = useContext(LocationContext);
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term, currentLocation.coords)}
        iName="person-pin-circle"
        pName="Pickup Location"
      />
<<<<<<< HEAD
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Passenger', {
            pickupLocation: {
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
            },
            pickupLocationDetail: 'Current Location',
          })
        }
      >
        <ListItem topDivider bottomDivider title="Use Current Location" />
=======
    <TouchableOpacity onPress={() => navigation.navigate('Passenger', {
         pickupLocation: {
           latitude: currentLocation.coords.latitude,
           longitude: currentLocation.coords.longitude
         },
         pickupLocationDetail: "Current Location"
       })}>
        <ListItem
          topDivider
          bottomDivider
          title="Use Current Location"
       />
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      </TouchableOpacity>

      <ScrollView>
        <FlatList
          data={searchResults}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
<<<<<<< HEAD
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Passenger', {
                    pickupLocation: {
                      latitude: item.geometry.location.lat,
                      longitude: item.geometry.location.lng,
                    },
                    pickupLocationDetail: item.vicinity,
                  })
                }
              >
=======
              <TouchableOpacity onPress={() => navigation.navigate('Passenger', {
                  pickupLocation: {
                    latitude: item.geometry.location.lat,
                    longitude: item.geometry.location.lng
                  },
                  pickupLocationDetail: item.vicinity
                })}>
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
                <ListItem
                  chevron
                  topDivider
                  bottomDivider
                  title={item.name}
                  subtitle={item.vicinity}
<<<<<<< HEAD
                />
=======
               />
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </>
  );
};

export default PickupModalScreen;
