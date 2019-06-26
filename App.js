import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import PlaceList from "./src/components/placelist/PlaceList";
import PlaceInput from "./src/components/placeinput/PlaceInput";
import PlaceDetail from "./src/components/placedetail/PlaceDetail";
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
import configureStore from "./src/store/configureStore";
import { Ionicons } from '@expo/vector-icons';

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

class App extends Component {

  constructor(props) {
    super(props);
  }

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace}
                     onItemDeleted={this.placeDeletedHandler}
                     onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }

}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default RootComponent = () => (
  <Provider store={configureStore()}>
    <ConnectedApp />
  </Provider>
);

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
