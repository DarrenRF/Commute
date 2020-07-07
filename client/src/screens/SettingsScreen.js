<<<<<<< HEAD
import React from 'react';
=======
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import Spacer from '../components/Spacer';
import LogoutButton from '../components/LogoutButton';

const SettingsScreen = ({ navigation }) => {
<<<<<<< HEAD
  return (
    <>
      <Spacer>
        <LogoutButton navigation={navigation} />
      </Spacer>
=======

  return (
    <>
    <Spacer>
      <LogoutButton navigation={navigation} />
    </Spacer>
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
    </>
  );
};

export default SettingsScreen;
