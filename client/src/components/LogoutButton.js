import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { useApolloClient } from '@apollo/react-hooks';

const LogoutButton = ({ navigation }) => {
  const client = useApolloClient();

  return (
    <>
      <Button title="Logout" onPress={() => {
        client.writeData({ data: { isLoggedIn: false } });
        AsyncStorage.removeItem('token');
          navigation.navigate('loginFlow');
      }} />
    </>
  );
}

export default LogoutButton;
