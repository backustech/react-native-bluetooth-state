/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';
import BluetoothState from 'react-native-bluetooth-state';

console.log(BluetoothState);

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bluetooth: 'unknown',
    };
  }

  componentDidMount() {
    BluetoothState.subscribe(bluetoothState => {
      this.setState({ bluetooth: bluetoothState });
    });

    BluetoothState.initialize();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          What's the state of my bluetooth?
        </Text>
        <Text style={styles.instructions}>
          {this.state.bluetooth}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);
