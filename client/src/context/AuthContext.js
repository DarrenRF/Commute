import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
<<<<<<< HEAD
=======
// import trackerApi from '../api/tracker';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
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

<<<<<<< HEAD
const isPassenger = (dispatch) => () => {
  dispatch({ type: 'user_passenger' });
};
const isDriver = (dispatch) => () => {
  dispatch({ type: 'user_driver' });
};

const getCurrentDriver = (dispatch) => async () => {
  const driver = await client.query({
    query: gql`
      {
        currentDriver {
          _id
        }
      }
    `,
  });

  dispatch({ type: 'get_driver', payload: driver.data.currentDriver });
};

const getCurrentUser = (dispatch) => async () => {
  const user = await client.query({
    query: gql`
      {
        currentUser {
          _id
          onTrip
        }
      }
    `,
  });

  dispatch({ type: 'get_user', payload: user.data.currentUser });
};

const automaticSignin = (dispatch) => async () => {
=======

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
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  const user = await client
    .query({
      query: gql`
        {
          currentUser {
            _id
          }
        }
<<<<<<< HEAD
      `,
    })
    .catch((err) => null);
=======
      `
  }).catch(err => null);
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  const driver = await client
    .query({
      query: gql`
        {
          currentDriver {
            _id
          }
        }
<<<<<<< HEAD
      `,
    })
    .catch((err) => null);
=======
      `
  }).catch(err => null);
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  const token = await AsyncStorage.getItem('token');

  if (token && user) {
    navigate('Passenger');
  } else if (token && driver) {
    navigate('Driver');
  } else {
    navigate('Signup');
  }
<<<<<<< HEAD
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

=======
}



const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};


>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
<<<<<<< HEAD
  {
    clearErrorMessage,
    automaticSignin,
    isPassenger,
    isDriver,
    getCurrentDriver,
    getCurrentUser,
  },
  {
    token: null,
    errorMessage: '',
    userIsDriver: false,
    currentDriver: '',
    currentUser: '',
  }
=======
  { clearErrorMessage, automaticSignin, isPassenger, isDriver, getCurrentDriver, getCurrentUser },
  { token: null, errorMessage: '', userIsDriver: false, currentDriver: '', currentUser: '' },
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
);
