import React, { Component } from 'react';
import { AsyncStorage, View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import DefaultInput from '../../components/UI/defaultinput/DefaultInput';
import HeadingText from '../../components/UI/headingtext/HeadingText';
import MainText from '../../components/UI/maintext/MainText';
import backgroundImage from '../../assets/background.png';
import ButtonWithBackground from '../../components/UI/button/ButtonWithBackground';
import { ScreenOrientation } from 'expo';

class AuthScreen extends Component {

  state = {
    styles: {
      passwordContainerDirection: "column",
      passwordContainerJustifyContent: "flex-start",
      passwordWrapperWidth: "100%"
    },
    screenOrientation: ScreenOrientation.OrientationLock.PORTRAIT_UP
  };

  static navigationOptions = {
    title: 'Please sign in',
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", (dimensions) => {
      // Changing the styles when there's a dimension event
      this.setState({
        styles: {
          passwordContainerDirection: Dimensions.get("window").width > 500 ? "column" : "row",
          passwordContainerJustifyContent: Dimensions.get("window").width > 500 ? "flex-start" : "space-between",
          passwordWrapperWidth: Dimensions.get("window").width > 500 ? "100%" : "45%"
        }
      });
      this.toggleScreenOrientation();
    });
  }

  async changeScreenOrientation() {
    await ScreenOrientation.lockAsync(this.state.screenOrientation);
  }

  toggleScreenOrientation() {
    if (this.state.screenOrientation === ScreenOrientation.OrientationLock.PORTRAIT_UP) {
      this.setState({screenOrientation: ScreenOrientation.OrientationLock.LANDSCAPE_LEFT})
    } else {
      this.setState({screenOrientation: ScreenOrientation.OrientationLock.PORTRAIT_UP})
    }
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'dummyToken', null);
    this.props.navigation.navigate('App');
  };

  render() {
    const _ = this.changeScreenOrientation();

    let headingText = undefined;
    if (Dimensions.get('window').width > 500) {
      headingText = <MainText><HeadingText>Please Log In</HeadingText></MainText>;
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <View style={styles.inputContainer}>
            <ButtonWithBackground onPress={() => alert("Hello")} color="#29aaf4">Switch to Login</ButtonWithBackground>
            <DefaultInput placeholder="Your Email Address" style={styles.input} />
            <View style={
              {
                flexDirection: this.state.styles.passwordContainerDirection,
                justifyContent: this.state.styles.passwordContainerJustifyContent
              }
            }>
              <View style={
                {
                  width: this.state.styles.passwordWrapperWidth
                }
              }>
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>
              <View style={
                {
                  width: this.state.styles.passwordWrapperWidth
                }
              }>
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
  }
});

export default AuthScreen;
