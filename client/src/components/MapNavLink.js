import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Marker } from 'react-native-maps';

import { withNavigation } from 'react-navigation';

const MapNavLink = ({ navigation, key, coordinates, routeName, userId, userLocationId }) => {

  return (
    <Marker
      key={key}
      coordinate={coordinates}
      onPress={() => navigation.navigate('PickupProfile', { coordinates, userId, userLocationId } )}
      pinColor="#0000FF"
    />
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

export default withNavigation(MapNavLink);
