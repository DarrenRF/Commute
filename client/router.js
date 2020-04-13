import { createStackNavigator } from 'react-navigation'
import MenuContainer from './src/components/Menu'

export const RootStack = createStackNavigator(
  {
    MenuStack: { screen: MenuContainer },
  },
  {
    headerMode: 'none',
    initialRouteName: 'AppStack',
  }
)
