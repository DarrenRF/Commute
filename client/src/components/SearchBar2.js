import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback , Modal, TouchableHighlight } from 'react-native';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';


const SearchBar2 = ({ term, onTermChange, onTermSubmit, iName, pName, navigation }) => {

  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <View>

      <View style={styles.backgroundStyle}>
        <TouchableWithoutFeedback onPress={() =>  navigation.navigate('Passenger')}>
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

    </View>

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
    marginBottom: 5
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 28,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
});

export default withNavigation(SearchBar2);
