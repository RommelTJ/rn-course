import React from 'react';
import {Text, StyleSheet} from 'react-native';

const headingText = (props) => {
  return (
    <Text
      {...props}
      style={[styles.input, props.style]}
    >
      {props.children}
    </Text>
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

export default headingText;
