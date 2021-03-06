import React, { useContext, useCallback, useEffect, useState } from 'react';
<<<<<<< HEAD
import { withNavigationFocus } from 'react-navigation';
=======
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import Map from '../components/Map';
import DriverSwitch from '../components/DriverSwitch';
import DriverSearchBar from '../components/DriverSearchBar';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import gql from 'graphql-tag';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { NavigationEvents } from 'react-navigation';

const DriverScreen = ({ isFocused, navigation }) => {
<<<<<<< HEAD
  const {
    state: { searching, currentLocation },
    addLocation,
  } = useContext(LocationContext);

  const [driverState, setState] = useState(false);
  const [driverLocation, setDriverLocation] = useState([0, 0]);
  const {
    state: { currentDriver, currentUser },
    getCurrentDriver,
  } = useContext(AuthContext);

  const ADD_DRIVER_LOCATION = gql`
    mutation addDriverLocation($driverCoordinate: [Float]) {
      addDriverLocation(driverCoordinate: $driverCoordinate) {
        driverCoordinate
      }
    }
  `;

  const [addDriverLocation, { ldata }] = useMutation(ADD_DRIVER_LOCATION);
=======
  const { state: { searching, driverModeEnabled, currentLocation },
    addLocation,
    startSearching,
    stopSearching,
} = useContext(LocationContext);

const [driverState, setState] = useState(false);
const [driverLocation, setDriverLocation] = useState([0,0]);
const { state: { currentDriver, currentUser }, getCurrentDriver} = useContext(AuthContext);

const ADD_DRIVER_LOCATION = gql`
  mutation addDriverLocation($driverCoordinate: [Float]) {
    addDriverLocation(driverCoordinate: $driverCoordinate) {
      driverCoordinate
    }
  }
`;

const [addDriverLocation, { ldata }] = useMutation(
  ADD_DRIVER_LOCATION
);
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  const GET_PASSENGERS = gql`
    {
      getPassengers {
        _id
        user {
          _id
        }
        pickupCoordinate
        userDestinationCoordinate
      }
    }
  `;

<<<<<<< HEAD
  const [getPassengers, { loading, data, refetch }] = useLazyQuery(
    GET_PASSENGERS
  );

  useEffect(() => {
    getCurrentDriver();
  }, [currentDriver]);

  const driverDestinationLocation = navigation.getParam('destinationLocation');
  const destinationLocationDetail = navigation.getParam(
    'destinationLocationDetail'
  );

  const callback = useCallback(
    (location) => {
      addLocation(location, searching);
    },
    [searching]
  );
=======
  const [getPassengers, { loading, data, refetch }] = useLazyQuery(GET_PASSENGERS);

    useEffect(() => {
      getCurrentDriver()
    }, [currentDriver])

  const driverDestinationLocation = navigation.getParam('destinationLocation');
  const destinationLocationDetail = navigation.getParam('destinationLocationDetail');

  const callback = useCallback((location) => {
    addLocation(location, searching);
  }, [searching]);
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  const [err] = useLocation(isFocused || searching, callback);

  return (
    <>
<<<<<<< HEAD
      <NavigationEvents onWillFocus={refetch} />
      <DriverSearchBar destinationLocationDetail={destinationLocationDetail} />
      {destinationLocationDetail ? (
        <DriverSwitch
          getPassengers={getPassengers}
          addDriverLocation={addDriverLocation}
          currentLocation={currentLocation}
          driverState={driverState}
          setState={setState}
        />
      ) : null}
      {currentDriver || currentUser ? (
        <Map
          navigation={navigation}
          driverDestinationLocation={driverDestinationLocation}
          driverData={data}
          driverState={driverState}
          currentUser={currentUser}
          driverLocation={driverLocation}
        />
      ) : null}
    </>
  );
=======
      <NavigationEvents
        onWillFocus={refetch}
      />
      <DriverSearchBar destinationLocationDetail={destinationLocationDetail} />
      {destinationLocationDetail ? <DriverSwitch getPassengers={getPassengers} addDriverLocation={addDriverLocation} currentLocation={currentLocation} driverState={driverState} setState={setState} /> : null}
      {currentDriver || currentUser ?
        <Map
        navigation={navigation}
        driverDestinationLocation={driverDestinationLocation}
        driverData={data}
        driverState={driverState}
        currentUser={currentUser}
        driverLocation={driverLocation}
      /> : null}
    </>
  )
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
};

export default withNavigationFocus(DriverScreen);
