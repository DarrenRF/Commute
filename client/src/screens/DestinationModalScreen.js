import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { Feather, MaterialIcons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import SearchBar from '../components/SearchBar2';
import { Context as PlacesContext } from '../context/PlacesContext';
import { Context as LocationContext } from '../context/LocationContext';

const DestinationModalScreen = ({ navigation }) => {
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

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={searchResults}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Passenger', {
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

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
});

export default DestinationModalScreen;
