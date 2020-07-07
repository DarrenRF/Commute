import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';

import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
<<<<<<< HEAD
        <Text style={styles.link}>{text}</Text>
=======
        <Text style={styles.link}>
          {text}
        </Text>
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
<<<<<<< HEAD
    color: 'blue',
  },
=======
    color: 'blue'
  }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

export default withNavigation(NavLink);
