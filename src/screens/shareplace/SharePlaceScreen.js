import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, StyleSheet, TouchableOpacity, View, Text, TextInput, Button} from 'react-native';
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
      <View style={styles.container}>
        <Text>Share a place with us!</Text>

        <View>
          <Text>Image Preview!</Text>
        </View>
        <Button title="Pick image" />

        <View>
          <Text>Map</Text>
        </View>
        <Button title="Locate me" />

        <TextInput placeholder="Place name" />
        <Button title="Share the place!" />
      </View>
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
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

const ConnectedSharePlaceScreen = connect(null, mapDispatchToProps)(SharePlaceScreen);

export default createStackNavigator({ConnectedSharePlaceScreen});
