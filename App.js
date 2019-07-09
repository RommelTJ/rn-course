import React from 'react';
import { Provider, connect } from 'react-redux';
import { addPlace } from './src/store/actions/index';
import configureStore from "./src/store/configureStore";
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import AuthScreen from "./src/screens/auth/AuthScreen";
import AuthLoadingScreen from "./src/screens/auth/AuthLoadingScreen";
import SideDrawerNavigator from './src/components/sidedrawer/SideDrawerNavigator';

const AuthStack = createStackNavigator({ Auth: AuthScreen });

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name))
  };
};

const App = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: SideDrawerNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default RootComponent = () => (
  <Provider store={configureStore()}>
    <ConnectedApp />
  </Provider>
);
