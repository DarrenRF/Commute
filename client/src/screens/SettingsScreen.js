import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import LogoutButton from '../components/LogoutButton';

const SettingsScreen = ({ navigation }) => {

  return (
    <>
    <Spacer>
      <LogoutButton navigation={navigation} />
    </Spacer>
    </>
  );
};

export default SettingsScreen;
