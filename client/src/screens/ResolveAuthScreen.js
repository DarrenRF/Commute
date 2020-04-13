import { useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import client from '../graphql-client';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';


const ResolveAuthScreen = ({ navigation }) => {
  const { automaticSignin } = useContext(AuthContext);

  useEffect(() => {
    automaticSignin();
  }, [])

  return null;
};

export default ResolveAuthScreen;
