import React, { Component } from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet } from 'react-native';

class AuthScreen extends Component {

  static navigationOptions = {
    title: 'Please sign in',
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'dummyToken', null);
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <View style={styles.inputContainer}>
          <Button title="Switch to Login" />
          <TextInput placeholder="Your Email Address" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TextInput placeholder="Confirm Password" style={styles.input} />
        </View>
        <Button title="Submit" onPress={this._signInAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    width: "100%"
  }
});

export default AuthScreen;
