import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

const Splash = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={styles.scrollView}>
          <Icon
            name="facebook-square"
            size={Dimensions.get('window').width / 1.5}
            color="#3b5998"
            style={{transform: [{rotateY: '180deg'}]}}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f7f8f9',
    height: Dimensions.get('window').height,
  },
})

export default Splash
