import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigations/AppNavigation'
import Login from './login/Login'

export default function App() {
  return (
      //<Login/>
      <AppNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
