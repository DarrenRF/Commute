import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const DriverSearchBar = ({ destinationLocationDetail, navigation }) => {

  return (
    <View>
      <TouchableWithoutFeedback onPress={() =>  navigation.navigate('Destination')}>
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

export default withNavigation(DriverSearchBar);
