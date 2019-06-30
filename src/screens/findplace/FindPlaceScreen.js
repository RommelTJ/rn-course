import React, { Component } from 'react';
import { AsyncStorage, View, Text } from 'react-native';

class FindPlaceScreen extends Component {
  static navigationOptions = {
    title: 'Find a Place!',
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
        <Text>Find Place</Text>
      </View>
    );
  }
}

export default FindPlaceScreen;
