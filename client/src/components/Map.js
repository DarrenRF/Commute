<<<<<<< HEAD
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';
=======
import React, { useContext } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, TouchableWithoutFeedback } from 'react-native';
import MapView, { Polyline, Circle, Marker } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

import { Context as LocationContext } from '../context/LocationContext';
import { Context as PlacesContext } from '../context/PlacesContext';
import MapNavLink from '../components/MapNavLink';

const Map = ({
  pickupLocation,
  destinationLocation,
  driverDestinationLocation,
  data,
  driverData,
  driverState,
  currentUser,
  navigation,
  driverLocation,
<<<<<<< HEAD
  onTrip,
}) => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  const {
    state: { directionsResults },
  } = useContext(PlacesContext);
  const markers = [
    {
      coordinates: { latitude: 0, longitude: 0 },
      userId: '',
      userLocationId: '',
    },
  ];
  markers.shift();
  const markerIDs = ['Marker1', 'Marker2', 'Marker3', 'Marker4', 'Marker5'];
  const timeout = 50;
  let animationTimeout;
  let driver;

  if (driverLocation) {
    driver = { latitude: driverLocation[0], longitude: driverLocation[1] };
  }

  if (data) {
    data.getPassengers.map((r) =>
      markers.push({
        coordinates: {
          latitude: r.pickupCoordinate[0],
          longitude: r.pickupCoordinate[1],
        },
        userId: r.user._id,
      })
    );
  }

  if (driverData) {
    driverData.getPassengers.map((r) =>
      markers.push({
        coordinates: {
          latitude: r.pickupCoordinate[0],
          longitude: r.pickupCoordinate[1],
        },
        userId: r.user._id,
        userLocationId: r._id,
      })
    );
=======
  onTrip
}) => {

  const { state: { currentLocation, locations } } = useContext(LocationContext);
  const { state: { directionsResults } } = useContext(PlacesContext);
  const markers = [{coordinates:{latitude: 0, longitude: 0}, userId: "", userLocationId: "" }]
  markers.shift()
  const markerIDs = ['Marker1', 'Marker2', 'Marker3', 'Marker4', 'Marker5'];
  const timeout = 50;
  let animationTimeout;
  let driver

  if (driverLocation) {
    driver = {latitude: driverLocation[0], longitude: driverLocation[1]}
  }

  if (data) {
    data.getPassengers.map(r => markers.push({
      coordinates:{
        latitude: r.pickupCoordinate[0],
        longitude: r.pickupCoordinate[1]
      },
      userId: r.user._id,
      })
    )
  }

  if (driverData) {
    driverData.getPassengers.map(r => markers.push({
      coordinates:{
        latitude: r.pickupCoordinate[0],
        longitude: r.pickupCoordinate[1]
      },
      userId: r.user._id,
      userLocationId: r._id
      })
    )
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  }

  focusMap = (markers, animated) => {
    this._map.fitToSuppliedMarkers(markers, animated);
<<<<<<< HEAD
  };

  focus = () => {
    animationTimeout = setTimeout(() => {
      this.focusMap([markerIDs[0], markerIDs[1]], false);
    }, timeout);
  };
=======
  }

  focus = () => {
   animationTimeout = setTimeout(() => {
     this.focusMap([markerIDs[0], markerIDs[1]], false);
   }, timeout);
 }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  focus2 = () => {
    animationTimeout = setTimeout(() => {
      this.focusMap([markerIDs[0], markerIDs[2]], false);
    }, timeout);
<<<<<<< HEAD
  };

  if (pickupLocation && destinationLocation) {
    this.focus();
  }

  if (onTrip) {
    this.focus2();
  }

  onCaroselItemChange = (index) => {
    let location = markers[index];
    this._map.animateToRegion({
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
  };

  _renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('PickupProfile', {
            coordinates: item.coordinates,
            userId: item.userId,
            userLocationId: item.userLocationId,
          })
        }
      >
=======
  }

 if (pickupLocation && destinationLocation) {
   this.focus();
 }

 if (onTrip) {
   this.focus2();
 }

  onCaroselItemChange = (index) => {
    let location = markers[index]
    this._map.animateToRegion({
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
      latitudeDelta: 0.10,
      longitudeDelta: 0.10
    })
  }

  _renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('PickupProfile', { coordinates: item.coordinates, userId: item.userId, userLocationId: item.userLocationId } )}>
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{item.userId}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
<<<<<<< HEAD
  };
=======
  }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
<<<<<<< HEAD
        ref={(map) => (this._map = map)}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        showsUserLocation={true}
      >
        {currentUser ? (
          <Polyline
            coordinates={directionsResults}
            strokeColor="red"
            strokeWidth={2}
          />
        ) : null}
        {pickupLocation ? (
          <Marker
            identifier="Marker1"
            icon={<MaterialIcons name="person-pin-circle" />}
            coordinate={pickupLocation}
            pinColor="#0000FF"
          />
        ) : null}
        {destinationLocation ? (
          <Marker identifier="Marker2" coordinate={destinationLocation} />
        ) : null}
        {onTrip ? (
          <Marker identifier="Marker3" coordinate={driver} pinColor="#FFA500" />
        ) : null}
        {driverDestinationLocation ? (
          <Marker identifier="Marker4" coordinate={driverDestinationLocation} />
        ) : null}
        {data
          ? markers.map(({ coordinates, _id }, index) => (
              <MapNavLink key={index} coordinates={coordinates} id={_id} />
            ))
          : null}
        {driverState
          ? markers.map(({ coordinates, userId, userLocationId }, index) => (
              <MapNavLink
                key={index}
                coordinates={coordinates}
                userId={userId}
                userLocationId={userLocationId}
              />
            ))
          : null}
      </MapView>

      {driverState ? (
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={markers}
          containerCustomStyle={styles.carousel}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          onSnapToItem={(index) => this.onCaroselItemChange(index)}
        />
      ) : null}
    </View>
  );
};
=======
        ref={map => this._map = map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.10,
          longitudeDelta: 0.10
        }}
        showsUserLocation={true}
      >
      {currentUser ? <Polyline coordinates={directionsResults} strokeColor="red" strokeWidth={2}  /> : null}
      {pickupLocation ? <Marker identifier="Marker1" icon={<MaterialIcons name="person-pin-circle" />} coordinate={pickupLocation} pinColor="#0000FF" /> : null}
      {destinationLocation ? <Marker identifier="Marker2" coordinate={destinationLocation} /> : null}
      {onTrip ? <Marker identifier="Marker3" coordinate={driver} pinColor="#FFA500" /> : null}
      {driverDestinationLocation ? <Marker identifier="Marker4" coordinate={driverDestinationLocation} /> : null}
      {data ? markers.map(({coordinates, _id}, index) => (
        <MapNavLink
          key={index}
          coordinates={coordinates}
          id={_id}
        />
      )): null}
      {driverState ? markers.map(({coordinates, userId, userLocationId}, index) => (
        <MapNavLink
          key={index}
          coordinates={coordinates}
          userId={userId}
          userLocationId={userLocationId}
        />
      )): null}
      </MapView>

      {driverState ? <Carousel
        ref={(c) => { this._carousel = c; }}
        data={markers}
        containerCustomStyle={styles.carousel}
        renderItem={this._renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={300}
        onSnapToItem={(index) => this.onCaroselItemChange(index)}
      /> : null}

    </View>
  );
}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    height: '100%',
  },
  map: {
    flex: 1,
    height: '100%',
=======
    height: "100%"
  },
  map: {
    flex: 1,
    height: "100%"
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 48,
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 200,
    width: 300,
    padding: 24,
<<<<<<< HEAD
    borderRadius: 24,
=======
    borderRadius: 24
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
<<<<<<< HEAD
    alignSelf: 'center',
  },
=======
    alignSelf: 'center'
  }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

export default Map;
