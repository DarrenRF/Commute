import React from 'react';
<<<<<<< HEAD
import { StyleSheet } from 'react-native';
=======
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import { Marker } from 'react-native-maps';

import { withNavigation } from 'react-navigation';

<<<<<<< HEAD
const MapNavLink = ({
  navigation,
  key,
  coordinates,
  userId,
  userLocationId,
}) => {
=======
const MapNavLink = ({ navigation, key, coordinates, routeName, userId, userLocationId }) => {

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  return (
    <Marker
      key={key}
      coordinate={coordinates}
<<<<<<< HEAD
      onPress={() =>
        navigation.navigate('PickupProfile', {
          coordinates,
          userId,
          userLocationId,
        })
      }
=======
      onPress={() => navigation.navigate('PickupProfile', { coordinates, userId, userLocationId } )}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      pinColor="#0000FF"
    />
  );
};

const styles = StyleSheet.create({
  link: {
<<<<<<< HEAD
    color: 'blue',
  },
=======
    color: 'blue'
  }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

export default withNavigation(MapNavLink);
