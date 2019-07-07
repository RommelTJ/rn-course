import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

const placeDetailScreen = (props) => {
  const { navigation } = props;
  const selectedPlace = navigation.getParam('selectedPlace');

  return (
    <View style={styles.container}>
      <View>
        <Image source={selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{selectedPlace.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.deleteButton}>
            <Ionicons size={32} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const mapStateToProps = state => {
  return {
    places: state.places.places
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

export default connect(mapStateToProps)(placeDetailScreen);
