/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
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
          <Text>hi</Text>
          <Icon name="rocket" size={30} color="#900" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f7f8f9',
    height: Dimensions.get('window').height,
  },
});

export default App;
