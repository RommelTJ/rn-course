import React, { Component } from 'react';
import {AsyncStorage, View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import PlaceList from '../../components/placelist/PlaceList';
import PlaceDetailScreen from '../../screens/placedetail/PlaceDetailScreen';
import Styles from '../../styles';
import {createStackNavigator} from 'react-navigation';

class FindPlaceScreen extends Component {

  state = {
    placesLoaded: false,
    removeAnim: new Animated.Value(1),
    placesAnim: new Animated.Value(0)
  };

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

  // Handle animation that fades in a list.
  placesLoadedHandler = () => {
    Animated.timing(this.state.placesAnim, {
      toValue: 1,
      duration: 500, // milliseconds
      useNativeDriver: true
    }).start();
  };

  // Handle the animation, load new places, and switch placesLoaded to false.
  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 500, // milliseconds
      useNativeDriver: true
    }).start(() => {
      this.setState({
        placesLoaded: true
      });
      this.placesLoadedHandler();
    });
  };

  render() {
    let content = (
      <Animated.View style={
        {
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate(
                {
                  inputRange: [0, 1],
                  outputRange: [12, 1]
                }
              )
            }
          ]
        }
      }>
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );

    if (this.state.placesLoaded) {
      content = (
        <Animated.View style={
          {
            opacity: this.state.placesAnim

          }
        }>
          <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
        </Animated.View>

        );
    }

    return <View style={this.state.placesLoaded ? null : styles.buttonContainer}>{content}</View>;
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
    backgroundColor: '#fff'
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
