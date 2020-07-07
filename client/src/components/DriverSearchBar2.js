<<<<<<< HEAD
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const DriverSearchBar2 = ({
  term,
  onTermChange,
  onTermSubmit,
  pName,
  navigation,
}) => {
=======
import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback , Modal, TouchableHighlight } from 'react-native';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';


const DriverSearchBar2 = ({ term, onTermChange, onTermSubmit, iName, pName, navigation }) => {

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <View>
<<<<<<< HEAD
      <View style={styles.backgroundStyle}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Driver')}>
=======

      <View style={styles.backgroundStyle}>
        <TouchableWithoutFeedback onPress={() =>  navigation.navigate('Driver')}>
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
          <AntDesign name="arrowleft" style={styles.iconStyle} />
        </TouchableWithoutFeedback>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder={pName}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
          autoFocus={true}
        />
      </View>
<<<<<<< HEAD
    </View>
=======

    </View>

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
    marginBottom: 5,
=======
    marginBottom: 5
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 28,
    alignSelf: 'center',
    marginHorizontal: 15,
<<<<<<< HEAD
  },
=======
  }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

export default withNavigation(DriverSearchBar2);
