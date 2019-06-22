import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceList from "./src/components/placelist/PlaceList";
import PlaceInput from "./src/components/placeinput/PlaceInput";
import PlaceDetail from "./src/components/placedetail/PlaceDetail";

export default class App extends Component {

  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return { places: prevState.places.concat(
        {
          key: Math.random().toString(),
          name: placeName,
          image: {
            uri: "https://www.gannett-cdn.com/-mm-/fa888cd8ba5934840efa2cd0be4e477c78b2b1d1/c=0-42-2118-1239&r=x1683&c=3200x1680/local/-/media/2016/07/25/Phoenix/Phoenix/636050500824809040-ThinkstockPhotos-516182342.jpg"
          }
        }
      )};
    });
  };

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    });
  };

  placeDeletedHandler = () => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place) => place.key !== prevState.selectedPlace.key),
        selectedPlace: null
      };
    })
  };

  modalClosedHandler = () => {
    this.setState({selectedPlace: null});
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace}
                     onItemDeleted={this.placeDeletedHandler}
                     onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
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
