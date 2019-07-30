import React, { Component } from 'react';
import {AsyncStorage, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import PlaceList from '../../components/placelist/PlaceList';
import PlaceDetailScreen from '../../screens/placedetail/PlaceDetailScreen';
import Styles from '../../styles';
import {createStackNavigator} from 'react-navigation';

class FindPlaceScreen extends Component {

  state = { placesLoaded: false };

  static navigationOptions = ({ navigation }) => ({
    title: 'Find a Place',
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}>
        <Ionicons name="md-menu" size={25} />
      </TouchableOpacity>
    ),
    headerTintColor: "orange"
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
    let content = (
      <TouchableOpacity>
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Find Places</Text>
        </View>
      </TouchableOpacity>
    );

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
  },
  searchButton: {
    borderColor: "orange",
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 26
  }
});

const ConnectedFindPlaceScreen = connect(mapStateToProps)(FindPlaceScreen);

export default createStackNavigator({ConnectedFindPlaceScreen, PlaceDetailScreen});
