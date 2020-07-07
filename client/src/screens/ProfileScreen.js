<<<<<<< HEAD
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
=======
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Avatar  } from 'react-native-elements';
import { Linking } from 'expo';
import Spacer from '../components/Spacer';
import LogoutButton from '../components/LogoutButton';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Context as LocationContext } from '../context/LocationContext';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
