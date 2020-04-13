import React, { useContext } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import LoginForm from '../components/LoginForm';
import NavLink from '../components/NavLink';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { SafeAreaView } from 'react-navigation';
import gql from 'graphql-tag';

const LoginScreen = ({ navigation }) => {
  const { state: { userIsDriver } } = useContext(AuthContext);

  const client = useApolloClient();
  const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!, $userIsDriver: Boolean!) {
      login(username: $username, password: $password, userIsDriver: $userIsDriver) {
        token
      }
    }
  `;
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

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={styles.container}>

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

export default LoginScreen;
