import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Login from './components/Login/LoginContainer'

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
  },
  {
    initialRouteName: "Login"
  }
) 

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer