import React, { Component } from 'react';
import {AsyncStorage, View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/placelist/PlaceList';

class FindPlaceScreen extends Component {
  static navigationOptions = {
    title: 'Find a Place!',
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  itemSelectedHandler = (key) => {
    this.props.navigation.navigate('PlaceDetail');
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

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

export default connect(mapStateToProps)(FindPlaceScreen);
