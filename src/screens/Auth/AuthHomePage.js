import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

const AuthHomePage = () => (
  <Icon
    name="facebook-square"
    size={Dimensions.get('window').width / 1.5}
    color="#3b5998"
    style={{transform: [{rotateY: '180deg'}]}}
  />
)

export default AuthHomePage
