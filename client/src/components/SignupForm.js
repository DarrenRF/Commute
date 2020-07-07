import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupForm = ({ headerText, onSubmit, submitButtonText }) => {
<<<<<<< HEAD
  const [errorMessage] = useState('');
=======
  const [errorMessage, setErrorMessage] = useState('');
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullName] = useState('');
  const [username, setUsername] = useState('');
<<<<<<< HEAD
  const {
    state: { userIsDriver },
    isPassenger,
    isDriver,
  } = useContext(AuthContext);
=======
  const { state: { userIsDriver }, isPassenger, isDriver } = useContext(AuthContext);
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Name"
        value={fullname}
        onChangeText={setFullName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
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
<<<<<<< HEAD
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        {userIsDriver ? (
          <Button title="Passenger" onPress={() => isPassenger()} />
        ) : (
          <Button
            title="Passenger"
            buttonStyle={{ backgroundColor: '#ff0000' }}
            onPress={() => isPassenger()}
          />
        )}
        {userIsDriver ? (
          <Button
            title="Driver"
            buttonStyle={{ backgroundColor: '#ff0000' }}
            onPress={() => isDriver()}
          />
        ) : (
          <Button title="Driver" onPress={() => isDriver()} />
        )}
      </Spacer>
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() =>
            onSubmit({
              variables: {
                email,
                fullname,
                username,
                userIsDriver,
                password,
                avatar: '',
                onTrip: false,
              },
            })
          }
        />
=======
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
        <Button title={submitButtonText} onPress={() => onSubmit({variables: { email, fullname, username, userIsDriver, password, avatar: '', onTrip: false }})} />
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
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

export default SignupForm;
