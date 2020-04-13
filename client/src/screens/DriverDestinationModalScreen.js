import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import SearchBar from '../components/DriverSearchBar2';
import { Context as PlacesContext } from '../context/PlacesContext';
import { Context as LocationContext } from '../context/LocationContext';

const DriverDestinationModalScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const { state: { searchResults }, searchApi } = useContext(PlacesContext);
  const { state: { currentLocation } } = useContext(LocationContext);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term, currentLocation.coords)}
        iName="location-city"
        pName="Destination"
      />

      <ScrollView>
        <FlatList
          data={searchResults}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Driver', {
                 destinationLocation: {
                   latitude: item.geometry.location.lat,
                   longitude: item.geometry.location.lng
                 },
                 destinationLocationDetail: item.vicinity
               })}>
                <ListItem
                  chevron
                  topDivider
                  bottomDivider
                  title={item.name}
                  subtitle={item.vicinity}
               />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </>
  );
};

export default DriverDestinationModalScreen;
