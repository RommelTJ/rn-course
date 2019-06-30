import React from 'react';
import {createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import AuthScreen from "./src/screens/auth/AuthScreen";
import AuthLoadingScreen from "./src/screens/auth/AuthLoadingScreen";
import FindPlaceScreen from "./src/screens/findplace/FindPlaceScreen";
import SharePlaceScreen from "./src/screens/shareplace/SharePlaceScreen";

const AppStack = createBottomTabNavigator({ FindPlace: FindPlaceScreen, SharePlace: SharePlaceScreen });
const AuthStack = createStackNavigator({ Auth: AuthScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

