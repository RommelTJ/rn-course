import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet, TouchableOpacity, View, Text, TextInput, Button, ScrollView } from 'react-native';
import {addPlace} from "../../store/actions";
import Styles from "../../styles";
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from "react-navigation";

class SharePlaceScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Share a Place',
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}>
        <Ionicons name="md-menu" size={25} />
      </TouchableOpacity>
    )
  });

  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <ScrollView>
        {/* Workaround for Android Scrolling */}
        <View style={styles.container}>
          <Text>Share a place with us!</Text>

          <View style={styles.placeholder} >
            <Text>Image Preview!</Text>
          </View>
          <Button title="Pick image" />

          <View style={styles.placeholder} >
            <Text>Map</Text>
          </View>
          <Button title="Locate me" />

          <TextInput placeholder="Place name" />
          <Button title="Share the place!" />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: '#fff',
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  }
});

const ConnectedSharePlaceScreen = connect(null, mapDispatchToProps)(SharePlaceScreen);

export default createStackNavigator({ConnectedSharePlaceScreen});
