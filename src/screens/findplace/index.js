import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import FindPlaceScreen from './FindPlaceScreen';
import SharePlaceScreen from "../../screens/shareplace/SharePlaceScreen";
import FindPlaceIconWithBadge from "../../components/icons/FindPlaceIconWithBadge";

const FindPlaceTabs = createBottomTabNavigator({
    FindPlace: {
      screen: FindPlaceScreen,
    },
    SharePlace: {
      screen: SharePlaceScreen,
    }
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

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ FindPlaceTabs }, { headerMode: "none" });