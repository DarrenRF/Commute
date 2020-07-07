import React from 'react';
<<<<<<< HEAD
import {} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
=======
import {  } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ApolloProvider } from '@apollo/react-hooks';

import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';

import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PassengerScreen from './src/screens/PassengerScreen';
import ListScreen from './src/screens/ListScreen';
import DirectionsScreen from './src/screens/DirectionsScreen';

import DriverScreen from './src/screens/DriverScreen';
import PickupModalScreen from './src/screens/PickupModalScreen';
import DestinationModalScreen from './src/screens/DestinationModalScreen';
import ProfileModalScreen from './src/screens/ProfileModalScreen';
import DriverDestinationModalScreen from './src/screens/DriverDestinationModalScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

import { setNavigator } from './src/navigationRef';

import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as PlacesProvider } from './src/context/PlacesContext';
import { Provider as AuthProvider } from './src/context/AuthContext';

import client from './src/graphql-client';

<<<<<<< HEAD
const passengerFlow = createStackNavigator(
  {
    Passenger: PassengerScreen,
    Pickup: PickupModalScreen,
    Destination: DestinationModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    drawerIcon: () => <Ionicons name="ios-person" size={20} />,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  }
);

const driverFlow = createStackNavigator(
  {
    Driver: DriverScreen,
    Destination: DriverDestinationModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  }
);

const listFlow = createStackNavigator(
  {
    List: ListScreen,
    PickupProfile: ProfileModalScreen,
    Directions: DirectionsScreen,
  },
  {
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  }
);

listFlow.navigationOptions = () => {
  return {
    tabBarIcon: (
      <MaterialCommunityIcons name="format-list-bulleted" size={20} />
    ),
  };
};

driverFlow.navigationOptions = () => {
  return {
    tabBarIcon: <MaterialCommunityIcons name="steering" size={20} />,
  };
};

const PassengerStackNavigator = createStackNavigator(
  {
    passengerFlow,
  },
  { headerMode: 'none' }
);
=======
const passengerFlow = createStackNavigator({
  Passenger: PassengerScreen,
  Pickup: PickupModalScreen,
  Destination: DestinationModalScreen
}, {
  mode: 'modal',
  headerMode: 'none',
  drawerIcon: () => (
    <Ionicons name="ios-person" size={20} />
  ),
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    }
  })
})

const driverFlow = createStackNavigator({
  Driver: DriverScreen,
  Destination: DriverDestinationModalScreen,
}, {
  mode: 'modal',
  headerMode: 'none',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    }
  })
})

const listFlow = createStackNavigator({
  List: ListScreen,
  PickupProfile: ProfileModalScreen,
  Directions: DirectionsScreen,
}, {
  headerMode: 'none',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    }
  })
})

listFlow.navigationOptions = () => {
  return {
    tabBarIcon: <MaterialCommunityIcons name="format-list-bulleted" size={20} />
  }
}

driverFlow.navigationOptions = () => {
  return {
    tabBarIcon: <MaterialCommunityIcons name="steering" size={20} />
  }
}

const PassengerStackNavigator = createStackNavigator({
  passengerFlow,
}, {headerMode: "none"})
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const DriverBottomTabNavigator = createBottomTabNavigator({
  Driver: driverFlow,
  List: listFlow,
<<<<<<< HEAD
});

const DriverStackNavigator = createStackNavigator(
  {
    DriverBottomTabNavigator,
  },
  { headerMode: 'none' }
);
=======
})

  const DriverStackNavigator = createStackNavigator({
    DriverBottomTabNavigator,
  }, {headerMode: "none"})

>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const PassengerDrawerNavigator = createDrawerNavigator({
  Passenger: {
    screen: PassengerStackNavigator,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Passenger',
<<<<<<< HEAD
      drawerIcon: () => <Ionicons name="ios-home" size={20} />,
    }),
=======
      drawerIcon: () => (
        <Ionicons name="ios-home" size={20} />
      )
    })
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile Screen',
      drawerLabel: 'Profile',
<<<<<<< HEAD
      drawerIcon: () => <Ionicons name="ios-person" size={20} />,
    }),
=======
      drawerIcon: () => (
        <Ionicons name="ios-person" size={20} />
      )
    })
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
<<<<<<< HEAD
      drawerIcon: () => <Ionicons name="ios-settings" size={20} />,
    }),
=======
      drawerIcon: () => (
        <Ionicons name="ios-settings" size={20} />
      )
    })
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
});

const DriverDrawerNavigator = createDrawerNavigator({
  Driver: {
    screen: DriverStackNavigator,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Driver',
<<<<<<< HEAD
      drawerIcon: () => <MaterialCommunityIcons name="steering" size={20} />,
    }),
=======
      drawerIcon: () => (
        <MaterialCommunityIcons name="steering" size={20} />
      )
    })
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile Screen',
      drawerLabel: 'Profile',
<<<<<<< HEAD
      drawerIcon: () => <Ionicons name="ios-person" size={20} />,
    }),
=======
      drawerIcon: () => (
        <Ionicons name="ios-person" size={20} />
      )
    })
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
<<<<<<< HEAD
      drawerIcon: () => <Ionicons name="ios-settings" size={20} />,
    }),
=======
      drawerIcon: () => (
        <Ionicons name="ios-settings" size={20} />
      )
    })
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
});

const Passenger = createStackNavigator({
  PassengerDrawerNavigator: {
    screen: PassengerDrawerNavigator,
    navigationOptions: ({ navigation }) => {
      const { state } = navigation;

      const { routeName } = navigation.state.routes[navigation.state.index];
      const headerTitle = routeName;

<<<<<<< HEAD
      if (state.isDrawerOpen) {
        return {
          headerLeft: ({ titleStyle }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            >
              <Ionicons
                name="ios-close"
                style={styles.menuClose}
                size={36}
                color={titleStyle}
              />
            </TouchableOpacity>
          ),
        };
      } else {
        return {
          headerLeft: ({ titleStyle }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            >
              <Ionicons
                name="ios-menu"
                style={styles.menuOpen}
                size={32}
                color={titleStyle}
              />
            </TouchableOpacity>
          ),
          headerRight: <Text>{headerTitle} </Text>,
        };
      }
    },
  },
});
=======
      if(state.isDrawerOpen) {
        return {
          headerLeft: ({titleStyle}) => (
            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
              <Ionicons name="ios-close" style={styles.menuClose} size={36} color={titleStyle} />
            </TouchableOpacity>
          )
        }
      }
      else {
        return {
          headerLeft: ({titleStyle}) => (
            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
              <Ionicons name="ios-menu" style={styles.menuOpen} size={32} color={titleStyle} />
            </TouchableOpacity>
          ),
          headerRight: <Text>{headerTitle}     </Text>
        }
      }
    }
  },
})
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const Driver = createStackNavigator({
  DriverDrawerNavigator: {
    screen: DriverDrawerNavigator,
    navigationOptions: ({ navigation }) => {
      const { state } = navigation;

      const { routeName } = navigation.state.routes[navigation.state.index];
      const headerTitle = routeName;

<<<<<<< HEAD
      if (state.isDrawerOpen) {
        return {
          headerLeft: ({ titleStyle }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            >
              <Ionicons
                name="ios-close"
                style={styles.menuClose}
                size={36}
                color={titleStyle}
              />
            </TouchableOpacity>
          ),
        };
      } else {
        return {
          headerLeft: ({ titleStyle }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            >
              <Ionicons
                name="ios-menu"
                style={styles.menuOpen}
                size={32}
                color={titleStyle}
              />
            </TouchableOpacity>
          ),
          headerRight: <Text>{headerTitle} </Text>,
        };
      }
    },
  },
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator(
    {
      Signup: SignupScreen,
      Login: LoginScreen,
    },
    {
      transitionConfig: () => ({
        transitionSpec: {
          duration: 0,
        },
      }),
    }
  ),
  mainFlow: Passenger,
  mainFlow2: Driver,
=======
      if(state.isDrawerOpen) {
        return {
          headerLeft: ({titleStyle}) => (
            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
              <Ionicons name="ios-close" style={styles.menuClose} size={36} color={titleStyle} />
            </TouchableOpacity>
          )
        }
      }
      else {
        return {
          headerLeft: ({titleStyle}) => (
            <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())}}>
              <Ionicons name="ios-menu" style={styles.menuOpen} size={32} color={titleStyle} />
            </TouchableOpacity>
          ),
          headerRight: <Text>{headerTitle}     </Text>
        }
      }
    }
  },
})

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Login: LoginScreen
  }, {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      }
    })
  }),
  mainFlow: Passenger,
  mainFlow2: Driver
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuOpen: {
    marginLeft: 10,
  },
  menuClose: {
    marginLeft: 14,
<<<<<<< HEAD
    marginTop: 5,
  },
=======
    marginTop: 5
  }
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <ApolloProvider client={client}>
      <LocationProvider>
        <PlacesProvider>
          <AuthProvider>
<<<<<<< HEAD
            <App
              ref={(navigator) => {
                setNavigator(navigator);
              }}
            />
=======
            <App ref={(navigator) => {setNavigator(navigator)}} />
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
          </AuthProvider>
        </PlacesProvider>
      </LocationProvider>
    </ApolloProvider>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
