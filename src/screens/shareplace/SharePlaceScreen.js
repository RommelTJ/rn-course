import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet, TouchableOpacity, View, Text, TextInput, Button, ScrollView } from 'react-native';
import {addPlace} from "../../store/actions";
import Styles from "../../styles";
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from "react-navigation";
import DefaultInput from '../../components/UI/defaultinput/DefaultInput';
import MainText from '../../components/UI/maintext/MainText';
import HeadingText from '../../components/UI/headingtext/HeadingText';

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
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>

          <View style={styles.placeholder} >
            <Text>Image Preview!</Text>
          </View>
          <View style={styles.button}>
            <Button title="Pick image" />
          </View>

          <View style={styles.placeholder} >
            <Text>Map</Text>
          </View>
          <View style={styles.button} >
            <Button title="Locate me" />
          </View>

          <DefaultInput placeholder="Place name" />
          <View style={styles.button} >
            <Button title="Share the place!" />
          </View>
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
  },
  button: {
    margin: 8
  }
});

const ConnectedSharePlaceScreen = connect(null, mapDispatchToProps)(SharePlaceScreen);

export default createStackNavigator({ConnectedSharePlaceScreen});
