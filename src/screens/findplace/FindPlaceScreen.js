import React, { Component } from 'react';
import {AsyncStorage, View, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import PlaceList from '../../components/placelist/PlaceList';
import PlaceDetailScreen from '../../screens/placedetail/PlaceDetailScreen';
import Styles from '../../styles';
import {createStackNavigator} from 'react-navigation';

class FindPlaceScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Find a Place',
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}>
        <Ionicons name="md-menu" size={25} />
      </TouchableOpacity>
    )
  });

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
