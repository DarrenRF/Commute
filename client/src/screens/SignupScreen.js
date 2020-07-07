import React, { useContext } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
<<<<<<< HEAD
import { Context as AuthContext } from '../context/AuthContext';
=======
import { Text } from 'react-native-elements';

import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { NavigationEvents } from 'react-navigation';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import SignupForm from '../components/SignupForm';
import NavLink from '../components/NavLink';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { SafeAreaView } from 'react-navigation';
import gql from 'graphql-tag';

<<<<<<< HEAD
const SignupScreen = ({ navigation }) => {
  const {
    state: { userIsDriver },
  } = useContext(AuthContext);

  const client = useApolloClient();
  const SIGNUP_USER = gql`
    mutation signup(
      $email: String!
      $fullname: String!
      $username: String!
      $userIsDriver: Boolean!
      $password: String!
      $onTrip: Boolean
      $avatar: String
    ) {
      signup(
        email: $email
        fullname: $fullname
        username: $username
        userIsDriver: $userIsDriver
        password: $password
        onTrip: $onTrip
        avatar: $avatar
      ) {
=======

const SignupScreen = ({ navigation }) => {
  const { state: { userIsDriver } } = useContext(AuthContext);

  const client = useApolloClient();
  const SIGNUP_USER = gql`
    mutation signup($email: String!, $fullname: String!, $username: String!, $userIsDriver: Boolean!, $password: String!, $onTrip: Boolean, $avatar: String) {
      signup(email: $email, fullname: $fullname, username: $username, userIsDriver: $userIsDriver, password: $password, onTrip: $onTrip, avatar: $avatar) {
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
        token
      }
    }
  `;
<<<<<<< HEAD
  const [signup, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted({ signup }) {
      AsyncStorage.setItem('token', signup.token);
      client.writeData({ data: { isLoggedIn: true } });
      if (!userIsDriver) {
        navigation.navigate('PassengerDrawerNavigator');
      } else {
        navigation.navigate('DriverDrawerNavigator');
      }
    },
  });
=======
  const [signup, { loading, error }] = useMutation(
    SIGNUP_USER,
    {
      onCompleted({ signup }) {
        AsyncStorage.setItem('token', signup.token)
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
        <SignupForm
          headerText="Sign Up"
          submitButtonText="Sign Up"
          onSubmit={signup}
        />
<<<<<<< HEAD
        <NavLink
          routeName="Login"
          text="Already have an account? Login instead!"
        />
=======
      <NavLink
        routeName="Login"
        text="Already have an account? Login instead!"
      />
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      </View>
    </SafeAreaView>
  );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
