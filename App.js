import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceList from "./src/components/placelist/PlaceList";
import PlaceInput from "./src/components/placeinput/PlaceInput";
import placeImage from "./src/assets/SanDiego.jpg";

export default class App extends Component {

  state = {
    places: []
  };

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return { places: prevState.places.concat(
        {
          key: Math.random().toString(),
          name: placeName,
          image: placeImage
        }
      )};
    });
  };

  placeDeletedHandler = (key) => {
    this.setState((prevState) => {
      return { places: prevState.places.filter((place, idx) => place.key !== key)};
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
      </View>
    );
  }

}

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
