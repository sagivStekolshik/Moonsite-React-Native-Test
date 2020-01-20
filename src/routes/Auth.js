import {createStackNavigator} from 'react-navigation-stack'
import HomePage from '../screens/Auth/AuthHomePage'

const authRoutes = {
  HomePage,
}

export default createStackNavigator(authRoutes, {
  initialRouteName: 'HomePage',
})
