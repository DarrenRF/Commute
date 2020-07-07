import React from 'react';
<<<<<<< HEAD
import { AsyncStorage } from 'react-native';
=======
import { View, StyleSheet, AsyncStorage } from 'react-native';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import { Button } from 'react-native-elements';
import { useApolloClient } from '@apollo/react-hooks';

const LogoutButton = ({ navigation }) => {
  const client = useApolloClient();

  return (
    <>
<<<<<<< HEAD
      <Button
        title="Logout"
        onPress={() => {
          client.writeData({ data: { isLoggedIn: false } });
          AsyncStorage.removeItem('token');
          navigation.navigate('loginFlow');
        }}
      />
    </>
  );
};
=======
      <Button title="Logout" onPress={() => {
        client.writeData({ data: { isLoggedIn: false } });
        AsyncStorage.removeItem('token');
          navigation.navigate('loginFlow');
      }} />
    </>
  );
}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

export default LogoutButton;
