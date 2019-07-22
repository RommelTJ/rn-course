import {Button, StyleSheet, Text, View} from "react-native";
import React, {Component, Fragment} from "react";

class PickLocation extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.placeholder} >
          <Text>Map</Text>
        </View>
        <View style={styles.button} >
          <Button title="Locate me" />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
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

export default PickLocation;
