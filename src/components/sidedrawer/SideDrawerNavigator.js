import React  from 'react';
import {createDrawerNavigator} from 'react-navigation';
import findplace from "../../screens/findplace";
import SharePlaceScreen from "../../screens/shareplace/SharePlaceScreen";

const SideDrawerNavigator = createDrawerNavigator(
  {
    FindPlace: {screen: findplace},
    SharePlace: {screen: SharePlaceScreen}
  },
  {
    drawerBackgroundColor: "orange",
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

export default SideDrawerNavigator;
