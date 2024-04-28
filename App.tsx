/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import CocosWebviewComponent from './src/screens/CocosWebviewComponent';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <CocosWebviewComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
