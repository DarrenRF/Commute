import React, { useContext } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { NavigationEvents } from 'react-navigation';
import SignupForm from '../components/SignupForm';
import NavLink from '../components/NavLink';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { SafeAreaView } from 'react-navigation';
import gql from 'graphql-tag';


const SignupScreen = ({ navigation }) => {
  const { state: { userIsDriver } } = useContext(AuthContext);

  const client = useApolloClient();
  const SIGNUP_USER = gql`
    mutation signup($email: String!, $fullname: String!, $username: String!, $userIsDriver: Boolean!, $password: String!, $onTrip: Boolean, $avatar: String) {
      signup(email: $email, fullname: $fullname, username: $username, userIsDriver: $userIsDriver, password: $password, onTrip: $onTrip, avatar: $avatar) {
        token
      }
    }
  `;
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

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={styles.container}>

        <SignupForm
          headerText="Sign Up"
          submitButtonText="Sign Up"
          onSubmit={signup}
        />
      <NavLink
        routeName="Login"
        text="Already have an account? Login instead!"
      />
      </View>
    </SafeAreaView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container : {
    justifyContent: 'center',
    marginBottom: 250
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  },
});

export default SignupScreen;
