import React, { Component } from 'react';
import { AsyncStorage, View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import DefaultInput from '../../components/UI/defaultinput/DefaultInput';
import HeadingText from '../../components/UI/headingtext/HeadingText';
import MainText from '../../components/UI/maintext/MainText';
import backgroundImage from '../../assets/background.png';
import ButtonWithBackground from '../../components/UI/button/ButtonWithBackground';

class AuthScreen extends Component {

  static navigationOptions = {
    title: 'Please sign in',
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'dummyToken', null);
    this.props.navigation.navigate('App');
  };

  render() {
    let headingText = undefined;

    if (Dimensions.get('window').height > 500) {
      headingText = <MainText><HeadingText>Please Log In</HeadingText></MainText>;
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <View style={styles.inputContainer}>
            <ButtonWithBackground onPress={() => alert("Hello")} color="#29aaf4">Switch to Login</ButtonWithBackground>
            <DefaultInput placeholder="Your Email Address" style={styles.input} />
            <View style={styles.passwordContainer}>
              <View style={styles.passwordWrapper}>
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>
              <View style={styles.passwordWrapper}>
              <DefaultInput placeholder="Confirm Password" style={styles.input} />
              </View>
            </View>
          </View>
          <ButtonWithBackground onPress={this._signInAsync} color="#29aaf4">Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
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
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  passwordContainer: {
    flexDirection: Dimensions.get('window').height > 500 ? "column" : "row",
    justifyContent: "space-between"
  },
  passwordWrapper: {
    width: Dimensions.get('window').height > 500 ? "100%" : "45%"
  }
});

export default AuthScreen;
