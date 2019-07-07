import React, { Component } from 'react';
import {AsyncStorage, View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import PlaceList from '../../components/placelist/PlaceList';
import PlaceDetailScreen from '../../screens/placedetail/PlaceDetailScreen';

class FindPlaceScreen extends Component {
  static navigationOptions = {
    title: 'Find a Place',
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  itemSelectedHandler = (key) => {
    this.props.navigation.navigate('PlaceDetailScreen', {
      selectedPlace: this.props.places.find(place => place.key === key)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

const ConnectedFindPlaceScreen = connect(mapStateToProps)(FindPlaceScreen);

export default createStackNavigator({ConnectedFindPlaceScreen, PlaceDetailScreen});
