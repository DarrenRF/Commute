import React, { useContext, useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
<<<<<<< HEAD
import gql from 'graphql-tag';
import { useSubscription } from '@apollo/react-hooks';
=======
import { View } from 'react-native';
import gql from 'graphql-tag';
import { useApolloClient, useMutation, useSubscription } from '@apollo/react-hooks';

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import Map from '../components/Map';
import SearchButton from '../components/SearchButton';
import SearchBar from '../components/SearchBar';
import { Context as LocationContext } from '../context/LocationContext';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as PlacesContext } from '../context/PlacesContext';
import useLocation from '../hooks/useLocation';

<<<<<<< HEAD
const PassengerScreen = ({ isFocused, navigation }) => {
  const {
    state: { searching },
    addLocation,
    startSearching,
    stopSearching,
  } = useContext(LocationContext);

  const { directionsApi } = useContext(PlacesContext);

  const {
    state: { currentUser, currentDriver },
    getCurrentUser,
  } = useContext(AuthContext);
  const [onTrip, setOnTrip] = useState(false);
  const [driverLocation, setDriverLocation] = useState([0, 0]);

  const pickupLocation = navigation.getParam('pickupLocation');
  const pickupLocationDetail = navigation.getParam('pickupLocationDetail');
  const destinationLocation = navigation.getParam('destinationLocation');
  const destinationLocationDetail = navigation.getParam(
    'destinationLocationDetail'
  );

  const USER_SUBSCRIPTION = gql`
    subscription updateUserWithDriverSub($_id: ID) {
      updateUserWithDriverSub(_id: $_id) {
        _id
        onTrip
        driverLocation
      }
    }
  `;

  const subData = useSubscription(USER_SUBSCRIPTION, {
    variables: { _id: currentUser._id },
  });

  useEffect(() => {
    if (pickupLocation && destinationLocation) {
      directionsApi(pickupLocation, destinationLocation);
    }
    getCurrentUser();
    if (!subData.loading) {
      setOnTrip(subData.data.updateUserWithDriverSub.onTrip);
      setDriverLocation(subData.data.updateUserWithDriverSub.driverLocation);
    }
  }, [currentUser, subData.loading, pickupLocation, destinationLocation]);

  const callback = useCallback(
    (location) => {
      addLocation(location, searching);
    },
    [searching]
  );

=======

const PassengerScreen = ({ isFocused, navigation }) => {
  const { state: { searching },
    addLocation,
    startSearching,
    stopSearching,
} = useContext(LocationContext);

const { state: { directionsResults },
  directionsApi
} = useContext(PlacesContext);

const { state: { currentUser, currentDriver }, getCurrentUser} = useContext(AuthContext);
const [onTrip, setOnTrip] = useState(false);
const [driverLocation, setDriverLocation] = useState([0,0]);

const pickupLocation = navigation.getParam('pickupLocation');
const pickupLocationDetail = navigation.getParam('pickupLocationDetail');
const destinationLocation = navigation.getParam('destinationLocation');
const destinationLocationDetail = navigation.getParam('destinationLocationDetail');


const USER_SUBSCRIPTION = gql`
  subscription updateUserWithDriverSub($_id: ID) {
    updateUserWithDriverSub(_id: $_id) {
      _id
      onTrip
      driverLocation
    }
  }
`;

  const subData = useSubscription(
    USER_SUBSCRIPTION,
    { variables: { _id: currentUser._id } }
  );


useEffect(() => {
  if (pickupLocation && destinationLocation) {
    directionsApi(pickupLocation, destinationLocation)
  }
  getCurrentUser()
  if (!subData.loading) {
    setOnTrip(subData.data.updateUserWithDriverSub.onTrip);
    setDriverLocation(subData.data.updateUserWithDriverSub.driverLocation)
  }
}, [currentUser, subData.loading, pickupLocation, destinationLocation])



const ADD_PiCKUP = gql`
  mutation addPickupLocation($pickupCoordinate: [Float], $userDestinationCoordinate: [Float]) {
    addPickupLocation(pickupCoordinate: $pickupCoordinate, userDestinationCoordinate: $userDestinationCoordinate) {
      pickupCoordinate
      userDestinationCoordinate
    }
  }
`;

const [addPickupLocation, { data }] = useMutation(
  ADD_PiCKUP
);

  const callback = useCallback((location) => {
    addLocation(location, searching);
  }, [searching]);

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  const [err] = useLocation(isFocused || searching, callback);

  return (
    <>
      <SearchBar
        destinationLocationDetail={destinationLocationDetail}
        pickupLocationDetail={pickupLocationDetail}
      />
<<<<<<< HEAD
      {currentUser || currentDriver ? (
        <Map
          pickupLocation={pickupLocation}
          destinationLocation={destinationLocation}
          currentUser={currentUser}
          driverLocation={driverLocation}
          onTrip={onTrip}
        />
      ) : null}

      {destinationLocationDetail && pickupLocationDetail ? (
=======
    {currentUser || currentDriver ?
      <Map
        pickupLocation={pickupLocation}
        destinationLocation={destinationLocation}
        currentUser={currentUser}
        driverLocation={driverLocation}
        onTrip={onTrip}
      /> : null}

      {destinationLocationDetail && pickupLocationDetail ?
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
        <SearchButton
          searching={searching}
          startSearching={startSearching}
          stopSearching={stopSearching}
          pickupLocation={pickupLocation}
          destinationLocation={destinationLocation}
          getCurrentUser={getCurrentUser}
          currentUser={currentUser}
          onTrip={onTrip}
        />
<<<<<<< HEAD
      ) : null}

      {err ? (
        <Text style={{ flex: 1 }}>Please enable location services</Text>
      ) : null}
    </>
  );
=======
      : null}

      {err ? <Text style={{ flex: 1 }}>Please enable location services</Text> : null}
    </>
  )
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
};

export default withNavigationFocus(PassengerScreen);
