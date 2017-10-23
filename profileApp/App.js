'use strict';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './src/routers/Router';
import ProfileStore from './src/stores/ProfileStore';
import {Provider} from 'mobx-react';

export default class App extends React.Component {
  render() {
    return (
      <Provider {...ProfileStore}>
        <TabNav />        
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
