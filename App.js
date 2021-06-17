import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
