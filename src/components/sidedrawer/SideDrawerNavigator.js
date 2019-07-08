import React  from 'react';
import {createDrawerNavigator} from 'react-navigation';
import FindPlaceScreen from "../../screens/findplace/FindPlaceScreen";
import SharePlaceScreen from "../../screens/shareplace/SharePlaceScreen";

const SideDrawerNavigator = createDrawerNavigator({
  FindPlace: {
    screen: FindPlaceScreen,
  },
  SharePlace: {
    screen: SharePlaceScreen,
  },
});

export default SideDrawerNavigator;
