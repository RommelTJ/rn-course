import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AsyncStorage, View, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import DefaultInput from '../../components/UI/defaultinput/DefaultInput';
import HeadingText from '../../components/UI/headingtext/HeadingText';
import MainText from '../../components/UI/maintext/MainText';
import backgroundImage from '../../assets/background.png';
import ButtonWithBackground from '../../components/UI/button/ButtonWithBackground';
import { ScreenOrientation } from 'expo';
import validate from '../../utility/validation';
import { tryAuth } from "../../store/actions";

class AuthScreen extends Component {

  state = {
    authMode: "login",
    screenOrientation: ScreenOrientation.OrientationLock.PORTRAIT_UP,
    controls: {
      email: { value: "", valid: false, validationRules: { isEmail: true }, touched: false },
      password: { value: "", valid: false, validationRules: { minLength: 6 }, touched: false },
      confirmPassword: { value: "", valid: false, validationRules: { equalTo: "password" }, touched: false }
    }
  };

  static navigationOptions = {
    title: 'Please sign in'
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.toggleScreenOrientation);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.toggleScreenOrientation)
  }

  async changeScreenOrientation() {
    await ScreenOrientation.lockAsync(this.state.screenOrientation);
  }

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { authMode: prevState.authMode === "login" ? "signup" : "login" };
    });
  };

  toggleScreenOrientation() {
    if (this.state.screenOrientation === ScreenOrientation.OrientationLock.PORTRAIT_UP) {
      this.setState({screenOrientation: ScreenOrientation.OrientationLock.LANDSCAPE_LEFT})
    } else {
      this.setState({screenOrientation: ScreenOrientation.OrientationLock.PORTRAIT_UP})
    }
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'dummyToken', null);
    const authData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    };
    this.props.onLogin(authData);
    this.props.navigation.navigate('App');
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid: key === 'password'
              ? validate(
                prevState.controls.confirmPassword.value,
                prevState.controls.confirmPassword.validationRules,
                connectedValue
              )
              : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(value, prevState.controls[key].validationRules, connectedValue),
            touched: true
          }
        }
      };
    });
  };

  render() {
    const _ = this.changeScreenOrientation();

    let headingText = undefined;
    if (this.state.screenOrientation === ScreenOrientation.OrientationLock.PORTRAIT_UP) {
      headingText = (
        <MainText>
          <HeadingText>
            Please {this.state.authMode === "login" ? "Login" : "Sign Up"}
          </HeadingText>
        </MainText>
      );
    }

    let confirmPasswordControl = undefined;
    if (this.state.authMode === "signup") {
      confirmPasswordControl = (
        <View style={
          this.state.screenOrientation === ScreenOrientation.OrientationLock.PORTRAIT_UP
            ? styles.portraitPasswordWrapper
            : styles.landscapePasswordWrapper
        }>
          <DefaultInput
            placeholder="Confirm Password"
            style={styles.input}
            value={this.state.controls.confirmPassword.value}
            onChangeText={(value) => this.updateInputState('confirmPassword', value)}
            valid={this.state.controls.confirmPassword.valid}
            touched={this.state.controls.email.touched}
            secureTextEntry
          />
        </View>
      );
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior={"padding"} >
          {headingText}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
              <ButtonWithBackground
                onPress={this.switchAuthModeHandler}
                color="#29aaf4"
              >
                Switch to {this.state.authMode === "login" ? "Sign Up" : "Login"}
              </ButtonWithBackground>
              <DefaultInput
                placeholder="Your Email Address"
                style={styles.input}
                value={this.state.controls.email.value}
                onChangeText={(value) => this.updateInputState('email', value)}
                valid={this.state.controls.email.valid}
                touched={this.state.controls.email.touched}
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"email-address"}
              />
              <View style={
                this.state.screenOrientation === ScreenOrientation.OrientationLock.PORTRAIT_UP || this.state.authMode === "login"
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }>
                <View style={
                  this.state.screenOrientation === ScreenOrientation.OrientationLock.PORTRAIT_UP || this.state.authMode === "login"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }>
                  <DefaultInput
                    placeholder="Password"
                    style={styles.input}
                    value={this.state.controls.password.value}
                    onChangeText={(value) => this.updateInputState('password', value)}
                    valid={this.state.controls.password.valid}
                    touched={this.state.controls.email.touched}
                    secureTextEntry
                  />
                </View>
                {confirmPasswordControl}
              </View>
            </View>
          </TouchableWithoutFeedback>
          <ButtonWithBackground
            onPress={this._signInAsync}
            color="#29aaf4"
            disabled={
              (!this.state.controls.confirmPassword.valid && this.state.authMode === "signup")
              || !this.state.controls.password.valid
              || !this.state.controls.email.valid
            }
          >
            Submit
          </ButtonWithBackground>
        </KeyboardAvoidingView>
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
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (authData) => dispatch(tryAuth(authData))
  };
};

export default connect(null, mapDispatchToProps)(AuthScreen);
