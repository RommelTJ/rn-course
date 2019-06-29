import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AuthScreen extends Component {

  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
      </View>
    );
  }
}

export default AuthScreen;
