import React, { Component } from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';

class AuthScreen extends Component {

  static navigationOptions = {
    title: 'Please sign in',
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'dummyToken', null);
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View>
        <Text>Please Log In</Text>
        <Button title="Switch to Login" />
        <TextInput placeholder="Your Email Address" />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm Password" />
        <Button title="Submit" onPress={this._signInAsync} />
      </View>
    );
  }
}

export default AuthScreen;
