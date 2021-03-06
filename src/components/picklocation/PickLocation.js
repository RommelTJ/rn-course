import {Button, StyleSheet, View, Dimensions} from "react-native";
import React, {Component} from "react";
import MapView from 'react-native-maps';

class PickLocation extends Component {

  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) * 0.0122
    },
    locationChosen: false
  };

  pickLocationHandler = (event) => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });
    this.props.onLocationPick({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const coordsEvent = {
          nativeEvent: {
            coordinate: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          }
        };
        this.pickLocationHandler(coordsEvent);
      },
      error => {
        console.log(error);
        alert("Fetching the position failed. Please pick one manually.");
      }
    );
  };

  render() {
    let marker = null;
    if (this.state.locationChosen) marker = <MapView.Marker coordinate={this.state.focusedLocation} />;

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          region={this.state.focusedLocation}
          ref={ref => this.map = ref}
        >
          {marker}
        </MapView>
        <View style={styles.button} >
          <Button title="Locate me" onPress={this.getLocationHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  map: {
    width: "100%",
    height: 250
  },
  button: {
    margin: 8
  }
});

export default PickLocation;
