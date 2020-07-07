import { useEffect, useContext } from 'react';
<<<<<<< HEAD
import { Context as AuthContext } from '../context/AuthContext';
=======
import { AsyncStorage } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import client from '../graphql-client';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const ResolveAuthScreen = ({ navigation }) => {
  const { automaticSignin } = useContext(AuthContext);

  useEffect(() => {
    automaticSignin();
<<<<<<< HEAD
  }, []);
=======
  }, [])
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  return null;
};

export default ResolveAuthScreen;
