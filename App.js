import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import AuthScreen from "./src/screens/auth/AuthScreen";
import AuthLoadingScreen from "./src/screens/auth/AuthLoadingScreen";
import FindPlaceScreen from "./src/screens/findplace/FindPlaceScreen";
import SharePlaceScreen from "./src/screens/shareplace/SharePlaceScreen";

const AuthStack = createStackNavigator({ Auth: AuthScreen });
const AppStack = createBottomTabNavigator({
    FindPlace: FindPlaceScreen,
    SharePlace: SharePlaceScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'FindPlace') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'SharePlace') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
);

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

