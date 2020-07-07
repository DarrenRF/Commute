<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { ListItem } from 'react-native-elements';

=======
import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import SearchBar from '../components/SearchBar2';
import { Context as PlacesContext } from '../context/PlacesContext';
import { Context as LocationContext } from '../context/LocationContext';

const DestinationModalScreen = ({ navigation }) => {
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
        iName="location-city"
        pName="Destination"
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={searchResults}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
<<<<<<< HEAD
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Passenger', {
                    destinationLocation: {
                      latitude: item.geometry.location.lat,
                      longitude: item.geometry.location.lng,
                    },
                    destinationLocationDetail: item.vicinity,
                  })
                }
              >
=======
              <TouchableOpacity onPress={() => navigation.navigate('Passenger', {
                 destinationLocation: {
                   latitude: item.geometry.location.lat,
                   longitude: item.geometry.location.lng
                 },
                 destinationLocationDetail: item.vicinity
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

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
    marginBottom: 5,
=======
    marginBottom: 5
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
<<<<<<< HEAD
  },
=======
  }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

export default DestinationModalScreen;
