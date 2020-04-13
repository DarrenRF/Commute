import createDataContext from './createDataContext';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    case 'start_searching':
      return { ...state, searching: true };
    case 'stop_searching':
      return { ...state, searching: false };
    case 'is_on_trip':
      return { ...state, onTrip: true };
    case 'not_on_trip':
      return { ...state, onTrip: false };
    case 'add_location':
      return { ...state, locations: [ ...state.locations, action.payload ] };
    case 'change_name':
      return { ...state, name: action.payload };
    case 'driver_mode_enabled':
      return { ...state, driverModeEnabled: true };
    case 'driver_mode_disabled':
      return { ...state, driverModeEnabled: false };
    default:
      return state;

  }
};


const setDriverModeEnabled = dispatch => () => {
  const GET_PASSENGERS = gql`
    {
      getPassengers {
        pickupCoordinate
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PASSENGERS);

  dispatch({ type: 'driver_mode_enabled', payload: data });
};

const setDriverModeDisabled= dispatch => () => {
  dispatch({ type: 'driver_mode_disabled' });
};

const changeName = dispatch => (name) => {
  dispatch({ type: 'change_name', payload: name });
};

const isOnTrip = dispatch => () => {
  dispatch({ type: 'is_on_trip' });
};

const notOnTrip = dispatch => () => {
  dispatch({ type: 'not_on_trip' });
};

const startSearching = dispatch => () => {
  dispatch({ type: 'start_searching' });
};
const stopSearching = dispatch => () => {
  dispatch({ type: 'stop_searching' });
};

const addLocation = dispatch => (location, searching) => {

  dispatch({ type: 'add_current_location', payload: location });

  if (searching) {
    dispatch({ type: 'add_location', payload: location }); // adds location to "locations" array
  }
};

const reset = dispatch => () => {
  dispatch({ type: 'reset' });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  {
    startSearching,
    stopSearching,
    addLocation,
    changeName,
    setDriverModeEnabled,
    setDriverModeDisabled,
    isOnTrip,
    notOnTrip
  },
  {
    name: '',
    searching: false,
    locations: [],
    currentLocation: null,
    driverModeEnabled: false,
    OnTrip: false
  },
);
