import React  from 'react';
import {createDrawerNavigator} from 'react-navigation';
import findplace from "../../screens/findplace";
import SharePlaceScreen from "../../screens/shareplace/SharePlaceScreen";

const SideDrawerNavigator = createDrawerNavigator({
  FindPlace: {
    screen: findplace,
  },
  SharePlace: {
    screen: SharePlaceScreen,
  }
});

export default SideDrawerNavigator;
