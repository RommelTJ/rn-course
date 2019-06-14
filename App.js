import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {

  state = {
    placeName: ''
  };

  placeNameChangedHandler = (val) => {
    this.setState({placeName: val});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{width: 300}}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button title="Add" />
        </View>
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
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
