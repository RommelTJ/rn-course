import {Button, StyleSheet, Text, View} from "react-native";
import React, {Component} from "react";

class PickLocation extends Component {
  render() {
    return (
      <View>
        <View style={styles.placeholder} >
          <Text>Map</Text>
        </View>
        <View style={styles.button} >
          <Button title="Locate me" />
        </View>
      </View>
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
