import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet, TouchableOpacity, View, Text, Image, Button, ScrollView } from 'react-native';
import {addPlace} from "../../store/actions";
import Styles from "../../styles";
import { Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from "react-navigation";
import PlaceInput from '../../components/placeinput/PlaceInput';
import PickImage from '../../components/pickimage/PickImage';
import PickLocation from '../../components/picklocation/PickLocation';
import MainText from '../../components/UI/maintext/MainText';
import HeadingText from '../../components/UI/headingtext/HeadingText';
import validate from '../../utility/validation';

class SharePlaceScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Share a Place',
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}>
        <Ionicons name="md-menu" size={25} />
      </TouchableOpacity>
    ),
    headerTintColor: "orange"
  });

  state = {
    controls: {
      placeName: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      location: {
        value: null,
        valid: false
      }
    }
  };

  placeAddedHandler = () => {
    this.props.onAddPlace(
      this.state.controls.placeName.value,
      this.state.controls.location.value
    );
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  placeNameChangedHandler = (val) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid: validate(val, prevState.controls.placeName.validationRules),
            touched: true
          }
        }
      }
    });
  };

  locationPickedHandler = (location) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      };
    });
  };

  render() {
    return (
      <ScrollView>
        {/* Workaround for Android Scrolling */}
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>

          <PickImage />

          <PickLocation onLocationPick={this.locationPickedHandler} />

          <PlaceInput
            placeData={this.state.controls.placeName}
            onChangeText={this.placeNameChangedHandler}
          />

          <View style={styles.button} >
            <Button
              title="Share the place!"
              onPress={this.placeAddedHandler}
              disabled={!this.state.controls.placeName.valid || !this.state.controls.location.valid}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name, location) => dispatch(addPlace(name, location))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: '#fff',
    alignItems: "center"
  },
  button: {
    margin: 8
  }
});

const ConnectedSharePlaceScreen = connect(null, mapDispatchToProps)(SharePlaceScreen);

export default createStackNavigator({ConnectedSharePlaceScreen});
