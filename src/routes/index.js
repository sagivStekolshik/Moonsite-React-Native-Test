import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Splash from '../screens/Splash'
import Auth from '../routes/Auth'
const AppNavigator = createSwitchNavigator(
  {
    Splash,
    Auth,
  },
  {
    initialRouteName: 'Splash',
  },
)

export default createAppContainer(AppNavigator)
