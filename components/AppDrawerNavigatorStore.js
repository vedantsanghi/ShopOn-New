import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import OrderedItemsScreen from "../screens/OrderedItemsScreen";
import RequestedItemsScreen from "../screens/RequestedItemsScreen";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenuStore";

export const AppDrawerNavigatorStore = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    OrderedItems:  {
      screen: OrderedItemsScreen,
    },
    RequestedItems:  {
      screen: RequestedItemsScreen,
    }
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
