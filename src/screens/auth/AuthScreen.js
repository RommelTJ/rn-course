import React, { Component } from 'react';
import { AsyncStorage, Button, View } from 'react-native';

class AuthScreen extends Component {

  static navigationOptions = {
    title: 'Please sign in',
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'dummyToken');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}

export default AuthScreen;
