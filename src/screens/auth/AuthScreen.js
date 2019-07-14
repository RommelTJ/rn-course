import React, { Component } from 'react';
import { AsyncStorage, Button, Text, TextInput, View, StyleSheet } from 'react-native';
import DefaultInput from '../../components/UI/defaultinput/DefaultInput';

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
        <Text style={styles.textHeading}>Please Log In</Text>
        <View style={styles.inputContainer}>
          <Button title="Switch to Login" />
          <DefaultInput placeholder="Your Email Address" style={styles.input} />
          <DefaultInput placeholder="Password" style={styles.input} />
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
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
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default AuthScreen;
