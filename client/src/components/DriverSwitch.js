<<<<<<< HEAD
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

const DriverSwitch = ({
  getPassengers,
  addDriverLocation,
  driverState,
  setState,
  currentLocation,
}) => {
=======
import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';

const DriverSwitch = ({ getPassengers, addDriverLocation , driverState, setState, currentLocation }) => {
  const { state: { driverModeEnabled },
    setDriverModeEnabled,
    setDriverModeDisabled
} = useContext(LocationContext);

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  const toggleTrueFalse = () => setState(!driverState);

  useEffect(() => {
    if (driverState) {
<<<<<<< HEAD
      getPassengers();
      addDriverLocation({
        variables: {
          driverCoordinate: [
            currentLocation.coords.latitude,
            currentLocation.coords.longitude,
          ],
        },
      });
    }
  }, [driverState]);

  return (
    <View style={styles.backgroundStyle}>
      <Text style={{ fontSize: 16 }}>Driver Mode: </Text>
      <Switch
        onValueChange={toggleTrueFalse}
        value={driverState}
        trackColor={'orange'}
      />
=======
      getPassengers()
      addDriverLocation({
        variables: {
          driverCoordinate: [currentLocation.coords.latitude, currentLocation.coords.longitude],
        }
      })
    }
  }, [driverState])


  return (
    <View style={styles.backgroundStyle}>
    <Text style={{fontSize: 16}}>Driver Mode: </Text>
    <Switch
      onValueChange={toggleTrueFalse}
      value={driverState}
      trackColor={'orange'}
    />
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 0,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
    marginBottom: 0,
  },
=======
    marginBottom: 0
  }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

export default DriverSwitch;
