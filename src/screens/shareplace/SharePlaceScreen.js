import React, { Component } from 'react';
import {AsyncStorage, View, Text} from 'react-native';

class SharePlaceScreen extends Component {
  static navigationOptions = {
    title: 'Share a Place!',
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <Text>Share Place</Text>
      </View>
    );
  }
}

export default SharePlaceScreen;
