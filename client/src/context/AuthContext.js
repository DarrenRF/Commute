import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
// import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';
import client from '../graphql-client';
import gql from 'graphql-tag';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'user_passenger':
      return { ...state, userIsDriver: false };
    case 'user_driver':
      return { ...state, userIsDriver: true };
    case 'get_driver':
      return { ...state, currentDriver: action.payload };
    case 'get_user':
      return { ...state, currentUser: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};


const isPassenger = dispatch => () => {
  dispatch({ type: 'user_passenger' });
};
const isDriver = dispatch => () => {
  dispatch({ type: 'user_driver' });
};

const getCurrentDriver = dispatch => async () => {
  const driver = await client
    .query({
      query: gql`
        {
          currentDriver {
            _id
          }
        }
      `
  });

  dispatch({ type: 'get_driver', payload: driver.data.currentDriver });
}

const getCurrentUser = dispatch => async () => {
  const user = await client
    .query({
      query: gql`
        {
          currentUser {
            _id
            onTrip
          }
        }
      `
  });

  dispatch({ type: 'get_user', payload: user.data.currentUser });
}


const automaticSignin = dispatch => async () => {
  const user = await client
    .query({
      query: gql`
        {
          currentUser {
            _id
          }
        }
      `
  }).catch(err => null);

  const driver = await client
    .query({
      query: gql`
        {
          currentDriver {
            _id
          }
        }
      `
  }).catch(err => null);

  const token = await AsyncStorage.getItem('token');

  if (token && user) {
    navigate('Passenger');
  } else if (token && driver) {
    navigate('Driver');
  } else {
    navigate('Signup');
  }
}



const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};


const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { clearErrorMessage, automaticSignin, isPassenger, isDriver, getCurrentDriver, getCurrentUser },
  { token: null, errorMessage: '', userIsDriver: false, currentDriver: '', currentUser: '' },
);
