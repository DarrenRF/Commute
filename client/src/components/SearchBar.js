import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const SearchBar = ({ pickupLocationDetail, destinationLocationDetail, navigation }) => {

  return (
    <View>
      <TouchableWithoutFeedback onPress={() =>  navigation.navigate('Pickup')}>
        <View style={styles.backgroundStyle}>
          <MaterialIcons name="person-pin-circle" style={styles.iconStyle} />
          <TextInput
            value={pickupLocationDetail}
            style={styles.inputStyle}
            placeholder="Pickup Location"
            editable={false}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() =>  navigation.navigate('Destination')}>
        <View style={styles.backgroundStyle2}>
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
  backgroundStyle2: {
    marginTop: 0,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
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

export default withNavigation(SearchBar);
