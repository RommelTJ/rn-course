import React from 'react';
import { Provider, connect } from 'react-redux';
import { addPlace, deletePlace } from './src/store/actions/index';
import configureStore from "./src/store/configureStore";
import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import AuthScreen from "./src/screens/auth/AuthScreen";
import AuthLoadingScreen from "./src/screens/auth/AuthLoadingScreen";
import FindPlaceScreen from "./src/screens/findplace/FindPlaceScreen";
import SharePlaceScreen from "./src/screens/shareplace/SharePlaceScreen";
import FindPlaceIconWithBadge from "./src/components/icons/FindPlaceIconWithBadge";

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
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = FindPlaceIconWithBadge;
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
    App: createStackNavigator( { AppStack }, { headerMode: "none" }),
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
