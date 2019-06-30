import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, StyleSheet, View} from 'react-native';
import PlaceInput from '../../components/placeinput/PlaceInput';
import {addPlace, deletePlace} from "../../store/actions";

class SharePlaceScreen extends Component {
  static navigationOptions = {
    title: 'Share a Place!',
  };

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace())
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);
