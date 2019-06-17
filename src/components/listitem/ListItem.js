import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const listItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onItemPressed}>
      <View style={styles.listItem} >
        <Text>{props.placeName}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 10
  }
});

export default listItem;
