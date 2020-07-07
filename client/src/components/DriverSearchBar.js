<<<<<<< HEAD
import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const DriverSearchBar = ({ destinationLocationDetail, navigation }) => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Destination')}
      >
=======
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const DriverSearchBar = ({ destinationLocationDetail, navigation }) => {

  return (
    <View>
      <TouchableWithoutFeedback onPress={() =>  navigation.navigate('Destination')}>
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
        <View style={styles.backgroundStyle}>
          <MaterialIcons name="location-city" style={styles.iconStyle} />
          <TextInput
            value={destinationLocationDetail}
            style={styles.inputStyle}
            placeholder="Destination"
            editable={false}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
<<<<<<< HEAD
=======

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
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
    marginBottom: 10,
=======
    marginBottom: 10
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

export default withNavigation(DriverSearchBar);
