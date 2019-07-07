import React, { Component } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { deletePlace } from "../../store/actions/index";

class PlaceDetailScreen extends Component {

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.selectedPlace = navigation.getParam('selectedPlace');
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.selectedPlace.key);
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Ionicons size={32} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailScreen);
