import React, { useContext } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
<<<<<<< HEAD
import { Context as AuthContext } from '../context/AuthContext';
=======
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import LoginForm from '../components/LoginForm';
import NavLink from '../components/NavLink';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { SafeAreaView } from 'react-navigation';
import gql from 'graphql-tag';

const LoginScreen = ({ navigation }) => {
<<<<<<< HEAD
  const {
    state: { userIsDriver },
  } = useContext(AuthContext);

  const client = useApolloClient();
  const LOGIN_USER = gql`
    mutation login(
      $username: String!
      $password: String!
      $userIsDriver: Boolean!
    ) {
      login(
        username: $username
        password: $password
        userIsDriver: $userIsDriver
      ) {
=======
  const { state: { userIsDriver } } = useContext(AuthContext);

  const client = useApolloClient();
  const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!, $userIsDriver: Boolean!) {
      login(username: $username, password: $password, userIsDriver: $userIsDriver) {
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
        token
      }
    }
  `;
<<<<<<< HEAD
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      AsyncStorage.setItem('token', login.token);
      client.writeData({ data: { isLoggedIn: true } });
      if (!userIsDriver) {
        navigation.navigate('PassengerDrawerNavigator');
      } else {
        navigation.navigate('DriverDrawerNavigator');
      }
    },
  });
=======
  const [login, { loading, error }] = useMutation(
    LOGIN_USER,
    {
      onCompleted({ login }) {
        AsyncStorage.setItem('token', login.token);
        client.writeData({ data: { isLoggedIn: true } });
        if (!userIsDriver) {
          navigation.navigate('PassengerDrawerNavigator')
        } else {
          navigation.navigate('DriverDrawerNavigator')
        }
      }
    }
  );
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={styles.container}>
<<<<<<< HEAD
=======

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
        <LoginForm
          headerText="Login"
          onSubmit={login}
          submitButtonText="Login"
        />
        <NavLink
          text="Don't have an account? Sign up instead"
          routeName="Signup"
        />
      </View>
    </SafeAreaView>
  );
};

LoginScreen.navigationOptions = () => {
  return {
<<<<<<< HEAD
    header: null,
=======
    header: null
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  };
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    justifyContent: 'center',
    marginBottom: 250,
=======
  container : {
    justifyContent: 'center',
    marginBottom: 250
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
<<<<<<< HEAD
    marginTop: 15,
=======
    marginTop: 15
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
});

export default LoginScreen;
