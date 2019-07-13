import React from 'react';
import {Text, TextInput, StyleSheet } from 'react-native';

const defaultInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[props.style, styles.input]}
      underlineColorAndroid="transparent"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  }
});

export default defaultInput;
