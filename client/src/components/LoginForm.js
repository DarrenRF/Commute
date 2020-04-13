import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as AuthContext } from '../context/AuthContext';


const LoginForm = ({ headerText, onSubmit, submitButtonText }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { state: { userIsDriver }, isPassenger, isDriver } = useContext(AuthContext);


  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
      <Spacer>
        {userIsDriver
         ? <Button title="Passenger" onPress={() => isPassenger()} />
         : <Button title="Passenger" buttonStyle={{ backgroundColor: "#ff0000"}} onPress={() => isPassenger()} />}
        {userIsDriver
         ? <Button title="Driver" buttonStyle={{ backgroundColor: "#ff0000"}} onPress={() => isDriver()} />
         : <Button title="Driver" onPress={() => isDriver()} />}
      </Spacer>
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ variables: { username, userIsDriver, password }})} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  },
});

export default LoginForm;
